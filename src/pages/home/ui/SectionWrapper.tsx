import { HTMLAttributes, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

interface SectionWrapperProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const SectionWrapper = ({ children, ...rest }: SectionWrapperProps) => {
  return (
    <section {...rest}>
      <Box maxWidth={'1200px'} className={'mx-auto'}>
        {children}
      </Box>
    </section>
  );
};
