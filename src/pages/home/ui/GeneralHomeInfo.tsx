import { Box, Button, Divider, styled, Typography } from '@mui/material';

const GradientTypography = styled(Typography)`
  display: inline-block;
  font-size: 36px;
  padding-right: 12px;
  font-weight: bold;
  line-height: 1.2;
`;

const FoundersTypography = styled(GradientTypography)`
  background: linear-gradient(to right, #8e44ad, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BuldingTypography = styled(GradientTypography)`
  background: linear-gradient(to right, #e74c3c, #f1c40f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TheTypography = styled(GradientTypography)`
  background: linear-gradient(to right, #2ecc71, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FutureTypography = styled(GradientTypography)`
  background: linear-gradient(to right, #ff6b6b, #ffe66d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GeneralHomeInfo = () => {
  return (
    <div className={'w-[590px]'}>
      <GradientTypography>Инвестируйте в </GradientTypography>
      <FoundersTypography>проекты</FoundersTypography>
      <br />
      <BuldingTypography> создадим </BuldingTypography>
      <TheTypography> будущее </TheTypography>
      <FutureTypography> вместе </FutureTypography>

      <Typography sx={{ marginTop: '12px' }}>
        Получите акции и места в первом ряду для стартапов и малого бизнеса,
        которые вам нравятся, всего за 1000 ₽.
      </Typography>
      <Box display={'flex'} gap={1} sx={{ marginTop: '14px' }}>
        <Button variant="contained">Инвестировать</Button>
        <Divider orientation={'horizontal'}></Divider>
        <Button color="secondary" variant="outlined">
          Открыть стартап
        </Button>
      </Box>
    </div>
  );
};
