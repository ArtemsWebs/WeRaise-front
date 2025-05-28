import { Box } from '@mui/material';
import { GeneralHomeInfo } from '~/pages/home/ui/GeneralHomeInfo';
import { ProjectCarousel } from '~/features/projects/ui/ProjectCarousel';
import { FooterHomeInfo } from '~/pages/home/ui/FooterHomeInfo';
import { HomeSection } from '~/pages/home/ui/Home.styles';
import { CoinvesterHomeInfo } from '~/pages/home/ui/CoinvesterHomeInfo';
import { SectionWrapper } from '~/pages/home/ui/SectionWrapper';

export const Home = () => {
  return (
    <Box>
      <SectionWrapper>
        <HomeSection>
          <GeneralHomeInfo />
          <ProjectCarousel />
        </HomeSection>
        <FooterHomeInfo />
      </SectionWrapper>
      <SectionWrapper>
        <CoinvesterHomeInfo />
      </SectionWrapper>
      <SectionWrapper>
        <CoinvesterHomeInfo />
      </SectionWrapper>
    </Box>
  );
};
