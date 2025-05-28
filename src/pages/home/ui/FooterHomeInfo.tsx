import { Box, Typography } from '@mui/material';
import { currencyFormater, peopleFormater } from '~/shared/libs/utils';

export const FooterHomeInfo = () => {
  return (
    <Box
      className={
        'flex flex-col items-center justify-center gap-4 border-b-2 border-dashed pb-[70px]'
      }
    >
      <Typography variant="h5">БОЛЕЕ 1 МЛН ИНВЕСТОРОВ</Typography>
      <Box className={'mt-6 flex justify-center gap-3 text-center'}>
        <Box>
          <Typography variant="h4">{currencyFormater.format(1000)}</Typography>
          <Typography>средняя инвестиция</Typography>
        </Box>
        <Box>
          <Typography variant="h4">{peopleFormater.format(33453)}</Typography>
          <Typography>учредители финансируют</Typography>
        </Box>
        <Box>
          <Typography variant="h4">
            {currencyFormater.format(33453032)}
          </Typography>
          <Typography>Поднято на инвестициях</Typography>
        </Box>
        <Box>
          <Typography variant="h4">{peopleFormater.format(2000)}</Typography>
          <Typography>Создано стартапов</Typography>
        </Box>
      </Box>
    </Box>
  );
};
