import { Swiper } from '~/shared/ui';
import { SwiperProps } from '~/shared/ui/Swiper';
import { ProjectCardTag } from '~/features/projects/model/Project.types';
import { useMemo } from 'react';
import { ProjectSlideItem } from '~/features/projects/ui/ProjectSlider/ProjectSlideItem';
import { SwiperSlide } from 'swiper/react';

export type ProjectSliderItem = {
  uuid: string;
  projectImageId: number;
  status: 'trending' | 'new' | 'ending' | 'rising';
  description: string;
  name: string;
  valuation: number;
  coinvesterInfo: string;
  investorsCount: number;
  investment: number;
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
}: ProjectSliderProps) => {
  const prepareSlides = useMemo(() => {
    const slides = [];

    for (let i = 0; i < items.length; i += step) {
      slides.push(items.slice(i, i + step));
    }

    return slides;
  }, [items, step]);
  return (
    <Swiper {...rest} className={'h-[592px]'}>
      <>
        {prepareSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={'flex gap-4'}>
              {slide.map((item, idx) => (
                <ProjectSlideItem key={idx + item.uuid} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};
