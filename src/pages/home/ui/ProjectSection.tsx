import { Box, Typography } from '@mui/material';
import { ProjectHomeWrapper } from '~/pages/home/ui/Home.styles';

export const ProjectSection = () => {
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
    </ProjectHomeWrapper>
  );
};
