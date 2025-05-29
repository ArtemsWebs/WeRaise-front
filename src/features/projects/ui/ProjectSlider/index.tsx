import { Swiper } from '~/shared/ui';
import { SwiperProps } from '~/shared/ui/Swiper';
import { ProjectCardTag } from '~/features/projects/model/Project.types';
import { useMemo } from 'react';

export type ProjectSliderItem = {
  projectImageId: number;
  status: 'trending' | 'new' | 'ending';
  description: string;
  name: string;
  valuation: string;
  investorsCount: number;
  invested: number;
  tags: ProjectCardTag[];
  owner: {
    name: string;
    imageId: string;
    bio: string;
  };
};

interface ProjectSliderProps extends SwiperProps {
  items: ProjectSliderItem[];
  step?: number;
}

export const ProjectSlider = ({
  items,
  step = 3,
  ...rest
}: ProjectSliderItem) => {
  const prepareSlides = useMemo(() => {
    const slides = [];

    for (let i = 0; i < items.length; i += step) {
      slides.push(items.slice(i, i + step));
    }

    return slides;
  }, [items, step]);
  return (
    <Swiper {...rest} className={'h-[592px]'}>
      {prepareSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={{ display: 'flex' }}>
            {slide.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
