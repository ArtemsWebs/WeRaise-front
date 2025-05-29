import { Swiper as BaseSwiper } from 'swiper';
import { PropsWithChildren } from 'react';
import { SwiperProps as BaseSwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface SwiperProps extends PropsWithChildren<BaseSwiperProps> {}

export const Swiper = ({ children, ...rest }: SwiperProps) => {
  return (
    <BaseSwiper
      slidesPerView={'auto'}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      {...rest}
    >
      {children}
    </BaseSwiper>
  );
};
