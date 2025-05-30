import { ProjectSliderItem } from '~/features/projects/ui/ProjectSlider/index';
import { Box, Card, Chip, Divider, Typography } from '@mui/material';
import { getImageLink } from '~/features/images/api/imagesApi';
import { useState } from 'react';
import {
  currencyFormater,
  formatToMillions,
  peopleFormater,
} from '~/shared/libs/utils';
import { Show } from '~/shared/ui';

interface ProjectSlideProps {
  item: ProjectSliderItem;
}

export const ProjectSlideItem = ({ item }: ProjectSlideProps) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredAvatar, setHoveredAvatar] = useState(false);
  const investorInfo = `от ${peopleFormater.format(item.investorsCount)} инвесторов`;
  return (
    <Card
      className={'relative max-h-[600px] max-w-[360px] cursor-pointer'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        height={`${hovered ? '35%' : '50%'}`}
        position="relative"
        style={{
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <Show when={!hoveredAvatar}>
          <img
            src={getImageLink(item.projectImageId)}
            className={'h-full max-h-[100%] w-full object-cover'}
          />
        </Show>
        <Show when={hoveredAvatar}>
          <Box className="h-full bg-sky-50 p-2 text-start">
            <Typography variant="body2" fontWeight={600}>
              {item.owner.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {item.owner.bio}
            </Typography>
          </Box>
        </Show>
      </Box>
      <Box
        className={
          'flex flex-col justify-between bg-white p-4 transition-all duration-300 ease-in-out'
        }
        style={{
          maxHeight: hovered ? '500px' : '360px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <Box className={'h-[90%]'}>
          <Typography
            className={'pb-2 text-zinc-500'}
            variant="body1"
            color={'textPrimary'}
          >
            {item.name}
          </Typography>
          <Typography className={'line-clamp-4 pb-2'} fontWeight={700}>
            {item.description}
          </Typography>
          <Typography className={'pb-2 text-zinc-400'} variant="body2">
            {item.coinvesterInfo}
          </Typography>
        </Box>
        <div className={'flex max-w-[360px] gap-4'}>
          {item.tags.map((tag) => {
            return <Chip key={tag} label={tag} color="info" />;
          })}
        </div>
        <Box
          className={`min-h-[60px] overflow-hidden transition-all duration-300 ${
            hovered ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
          style={{ transitionDelay: hovered ? '100ms' : '0ms' }}
        >
          <Divider orientation="horizontal" className="py-2" />
          <Typography
            fontSize={12}
            component={'span'}
            fontWeight={700}
            variant="body2"
          >
            Поднято {currencyFormater.format(item.investment)}{' '}
          </Typography>
          <Typography
            component={'span'}
            fontSize={12}
            className="text-zinc-400"
          >
            {investorInfo}
          </Typography>
          <Typography fontSize={12} fontWeight={700} variant="body2">
            Стоимость {formatToMillions(item.valuation)}
          </Typography>
        </Box>
      </Box>
      <Box
        className={`absolute left-[275px] h-[50px] w-[50px] rounded-3xl transition-[top] duration-300 ease-in-out`}
        style={{
          top: hovered ? '30%' : '46%',
        }}
        onMouseEnter={() => setHoveredAvatar(true)}
        onMouseLeave={() => setHoveredAvatar(false)}
      >
        <img
          src={getImageLink(Number(item.owner.imageId))}
          className={'z-40 h-[50px] w-[50px] rounded-3xl object-cover'}
        />
      </Box>
    </Card>
  );
};
