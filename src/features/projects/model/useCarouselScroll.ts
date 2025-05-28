import { useRef } from 'react';

interface CarouselProps {
  carouselId: string;
}

const useCarouselScroll = () => {
  const fadingObserversRef = useRef<Record<string, IntersectionObserver>>({});
  const scrollIntervalsRef = useRef<Record<string, number | null>>({});
  const isPausedFlagsRef = useRef<Record<string, boolean>>({}); // Флаги паузы
  const animationFrameRef = useRef<Record<string, number | null>>({});

  const startScrolling = ({ carouselId }: CarouselProps) => {
    // Получаем элемент трека (где находятся карточки)
    const trackElement = document
      .getElementById(carouselId)
      ?.querySelector('.carousel-track');

    const carouselElement = document.getElementById(carouselId);

    if (!trackElement) return;

    let position = 0;
    let direction = carouselId === 'carousel-bottom' ? 1 : -1; // 1 - вверх, -1 - вниз

    if (carouselId === 'carousel-bottom' && carouselElement) {
      carouselElement.scrollTop = carouselElement.scrollHeight;
    }
    const trackHeight = trackElement.scrollHeight / 2; // Длина одного списка

    let ticking = false;

    // Инициализируем состояние для этой карусели
    isPausedFlagsRef.current[carouselId] = false;

    const fadingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.add('fading');
          } else {
            entry.target.classList.remove('fading');
          }
        });
      },
      {
        root: carouselElement, // Указываем контейнер как корень области видимости
        threshold: [0, 0.5, 1], // Отслеживаем различные пороги пересечения
      },
    );

    // Настройка IntersectionObserver для плавного изменения opacity
    const animateOpacity = () => {
      const items = Array.from(trackElement.children) as HTMLElement[];

      const rect = carouselElement.getBoundingClientRect();
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();

        const topOverlap = Math.max(
          0,
          Math.min(itemRect.bottom, rect.bottom) -
            Math.max(itemRect.top, rect.top),
        );
        const height = itemRect.bottom - itemRect.top;

        const ratio = height > 0 ? topOverlap / height : 0;

        let opacity = ratio;

        if (ratio < 0.1) opacity = 0;
        else if (ratio > 0.95) opacity = 1;

        item.style.opacity = `${opacity}`;
      });

      animationFrameRef.current[carouselId] =
        requestAnimationFrame(animateOpacity);
    };

    // Начинаем анимацию прозрачности

    requestAnimationFrame(animateOpacity);

    fadingObserversRef.current[carouselId] = fadingObserver;

    const startInterval = () => {
      if (
        scrollIntervalsRef.current[carouselId] ||
        isPausedFlagsRef.current[carouselId]
      )
        return;

      scrollIntervalsRef.current[carouselId] = window.setInterval(() => {
        if (!trackElement) return;

        position += direction;
        trackElement.style.transform = `translateY(${position}px)`;

        if (Math.abs(position) >= trackHeight) {
          position = 0;
          trackElement.style.transition = 'none';
          trackElement.style.transform = `translateY(${position}px)`;
          requestAnimationFrame(() => {
            trackElement.style.transition = '';
          });
        }
      }, 16);
    };

    const stopInterval = () => {
      if (scrollIntervalsRef.current[carouselId]) {
        clearInterval(scrollIntervalsRef.current[carouselId]!);
        scrollIntervalsRef.current[carouselId] = null;
      }
    };

    // Наблюдаем за дочерними элементами
    Array.from(trackElement.children).forEach((child) => {
      const el = child as HTMLElement;
      fadingObserver.observe(el);
      cancelAnimationFrame(animationFrameRef.current[carouselId]!);

      el.addEventListener('mouseenter', () => {
        isPausedFlagsRef.current[carouselId] = true;
        stopInterval();
        el.classList.add('hovered');
      });

      el.addEventListener('mouseleave', () => {
        isPausedFlagsRef.current[carouselId] = false;
        el.classList.remove('hovered');
        startInterval();
      });
    });

    // Запускаем прокрутку
    startInterval();

    return () => {
      stopInterval();
      fadingObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current[carouselId]!);
      delete fadingObserversRef.current[carouselId];
      delete scrollIntervalsRef.current[carouselId];
      delete isPausedFlagsRef.current[carouselId];

      Array.from(trackElement.children).forEach((child) => {
        child.removeEventListener('mouseenter', () => {});
        child.removeEventListener('mouseleave', () => {});
      });
    }; // Очищаем интервал при размонтировании компонента
  };

  return { startScrolling };
};
export default useCarouselScroll;
