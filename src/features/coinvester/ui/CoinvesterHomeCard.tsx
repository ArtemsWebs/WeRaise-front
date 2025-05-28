import { CoinvesterShort } from '~/features/coinvester/api/coinvesterData';
import { Card, Typography } from '@mui/material';
import { getImageLink } from '~/features/images/api/imagesApi';
import { Show } from '~/shared/ui/Show';

interface CoinvesterHomeCardProps extends CoinvesterShort {
  title?: string;
}

export const CoinvesterHomeCard = ({
  imageId,
  title,
  name,
}: CoinvesterHomeCardProps) => {
  return (
    <Card
      className={
        'holographic-card flex max-h-[90px] cursor-pointer items-center gap-4 rounded-lg border-zinc-200 bg-white p-4 text-center'
      }
    >
      <Show when={!!imageId}>
        <img
          src={getImageLink(imageId ?? 0)}
          className={'h-[50px] w-[50px] rounded object-cover'}
        />
      </Show>
      <Show when={!!title}>
        <Typography fontWeight={700}>+{title}</Typography>
      </Show>
      <Typography>{name}</Typography>
    </Card>
  );
};
