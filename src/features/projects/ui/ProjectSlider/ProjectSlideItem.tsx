import { ProjectSliderItem } from '~/features/projects/ui/ProjectSlider/index';
import { Box } from '@mui/material';

interface ProjectSlideProps {
  item: ProjectSliderItem;
}

export const ProjectSlideItem = ({ item }: ProjectSlideProps) => {
  return (
    <Box width={360}>
      <Box>
        <img src={}></img>
      </Box>
      <Box></Box>
    </Box>
  );
};
