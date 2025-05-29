import { Box } from '@mui/material';
import { GeneralHomeInfo } from '~/pages/home/ui/GeneralHomeInfo';
import { ProjectCarousel } from '~/features/projects/ui/ProjectCarousel';
import { FooterHomeInfo } from '~/pages/home/ui/FooterHomeInfo';
import { HomeSection } from '~/pages/home/ui/Home.styles';
import { CoinvesterHomeInfo } from '~/pages/home/ui/CoinvesterHomeInfo';
import { SectionWrapper } from '~/pages/home/ui/SectionWrapper';
import { ProjectSection } from '~/pages/home/ui/ProjectSection';

export const Home = () => {
  return (
    <Box>
      <SectionWrapper
        className={'bg-gradient-to-b from-zinc-100 via-white to-blue-50'}
      >
        <HomeSection>
          <GeneralHomeInfo />
          <ProjectCarousel />
        </HomeSection>
        <FooterHomeInfo />
      </SectionWrapper>
      <SectionWrapper
        className={'bg-gradient-to-b from-blue-50 via-white to-pink-50'}
      >
        <CoinvesterHomeInfo />
      </SectionWrapper>
      <SectionWrapper
        className={'bg-gradient-to-b from-pink-50 via-white to-zinc-50'}
      >
        <ProjectSection />
      </SectionWrapper>
    </Box>
  );
};
