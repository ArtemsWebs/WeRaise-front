import { Box, Typography } from '@mui/material';
import { ProjectHomeWrapper } from '~/pages/home/ui/Home.styles';
import { ProjectSlider } from '~/features/projects/ui/ProjectSlider';
import { getProjects } from '~/features/projects/api/projectData';

export const ProjectSection = () => {
  const projectInfo = getProjects();
  return (
    <ProjectHomeWrapper>
      <Box textAlign="center">
        <Typography variant="h4" maxWidth="625px">
          Изучите стартапы, которые поднимают сейчас
        </Typography>
        <Typography>
          При поддержке ведущих венчурных капиталистов и известных ангелов
        </Typography>
      </Box>
      <Box className={'pt-10'}>
        <ProjectSlider items={projectInfo} />
      </Box>
    </ProjectHomeWrapper>
  );
};
