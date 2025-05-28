import { ProjectCarouselCard } from '~/features/projects/ui/ProjectCarousel/ProjectCarouselCard';
import { getShortProjects } from '~/features/projects/api/projectData';
import { useLayoutEffect } from 'react';
import useCarouselScroll from '~/features/projects/model/useCarouselScroll';

export const ProjectCarousel = () => {
  const dataTop = getShortProjects();
  const dataBottom = getShortProjects();
  const { startScrolling } = useCarouselScroll();

  useLayoutEffect(() => {
    debugger;
    // Запускаем прокрутку для верхней ленты
    startScrolling({ carouselId: 'carousel-top' });

    // Запускаем прокрутку для нижней ленты
    startScrolling({ carouselId: 'carousel-bottom' });

    return () => {
      // Очистка всех интервалов при размонтировании компонента
    };
  }, [startScrolling]);

  return (
    <div className="container relative top-[-78px] mx-auto flex max-h-[800px] rotate-[10deg] justify-center px-4">
      <div
        className="carousel relative mb-6 overflow-hidden whitespace-nowrap"
        id="carousel-top"
      >
        <div className="carousel-track flex flex-col gap-4 px-3">
          {[
            ...dataTop,
            ...dataTop.map((data) => ({ ...data, id: data.id + 100 })),
          ].map((item, index) => {
            return (
              <ProjectCarouselCard
                {...item}
                key={index + item.id + '_carousel-top'}
              />
            );
          })}
        </div>
      </div>

      <div
        className="carousel relative flex-col overflow-hidden whitespace-nowrap"
        id="carousel-bottom"
      >
        <div className="carousel-track flex flex-col gap-4 px-3">
          {[
            ...dataBottom,
            ...dataBottom.map((data) => ({ ...data, id: data.id + 100 })),
          ].map((item, index) => {
            return (
              <ProjectCarouselCard
                {...item}
                key={index + item.id + '_carousel-bottom'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
