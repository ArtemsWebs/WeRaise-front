import {
  Box,
  Card,
  CardMedia,
  Divider,
  styled,
  Typography,
} from '@mui/material';
import { getImageLink } from '~/features/images/api/imagesApi';
import { currencyFormater, peopleFormater } from '~/shared/libs/utils';

interface ProjectCarouselCardProps {
  investment: number;
  investors: number;
  coinvester: { name: string; image?: string };
  image: string;
  imageId: number;
  title?: string;
}

export const ProjectCarouselCard = ({
  title,
  imageId,
  coinvester,
  investment,
  investors,
}: React.FC<ProjectCarouselCardProps>) => {
  return (
    <Card
      className={'carousel-item hover:scale-105'}
      sx={{
        width: 256,
        boxShadow: 3,
        borderRadius: 2,
        mr: 2,
        cursor: 'pointer',
      }}
    >
      <CardMedia component="img" height="150" image={getImageLink(imageId)} />
      <Box p={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Инвестиции: {currencyFormater.format(investment)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Инвесторов: {peopleFormater.format(investors)}
        </Typography>
        <>
          {coinvester?.image ? (
            <Box py={'4px'}>
              <Divider orientation={'horizontal'} />
              <Box
                display={'flex'}
                justifyContent={'start'}
                pt={'4px'}
                gap={4}
                alignItems={'center'}
              >
                <img src={coinvester.image} height={'40px'} width={'40px'} />
                <Typography variant="body2" color="text.secondary">
                  co - investor
                </Typography>
              </Box>
            </Box>
          ) : null}
        </>
      </Box>
    </Card>
  );
};
