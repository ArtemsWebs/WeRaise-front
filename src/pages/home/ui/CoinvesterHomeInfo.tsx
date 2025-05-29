import { getShortCoinvester } from '~/features/coinvester/api/coinvesterData';
import { Box, Button, Typography } from '@mui/material';
import { CoinvesterHomeWrapper } from '~/pages/home/ui/Home.styles';
import { CoinvesterHomeCard } from '~/features/coinvester/ui/CoinvesterHomeCard';

export const CoinvesterHomeInfo = () => {
  const coinvester = getShortCoinvester();
  return (
    <CoinvesterHomeWrapper className={'border-b-2 border-dashed'}>
      <Box textAlign="center">
        <Typography variant="h4" maxWidth="625px">
          Соинвестируйте вместе с венчурными капиталистами и бизнес-ангелами.
        </Typography>
        <Typography>
          На тех же условиях, с использованием тех же инструментов.
        </Typography>
      </Box>
      <Box
        width="1152px"
        height="500px"
        className={'relative flex justify-center pt-10'}
      >
        <img
          src={'src/icons/angelWing.png'}
          className={'absolute right-[670px] opacity-70'}
        />
        <img
          src={'src/icons/angelWing.png'}
          className={'absolute left-[670px] scale-x-[-1] transform opacity-70'}
        />
        <div
          className={
            'flex w-[500px] flex-col gap-4 rounded-xl bg-zinc-50/60 p-4'
          }
        >
          {coinvester.map((investor) => {
            return <CoinvesterHomeCard {...investor} key={investor.id} />;
          })}
          <CoinvesterHomeCard
            title={coinvester.length.toString()}
            name={'Активных инвесторов'}
          />
          <Button variant="outlined" color="secondary">
            Инвесторы
          </Button>
        </div>
      </Box>
    </CoinvesterHomeWrapper>
  );
};
