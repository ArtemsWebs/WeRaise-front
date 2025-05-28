import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Navigation } from '~/widgets/navigation';
import { Box, Button } from '@mui/material';
import { useRef } from 'react';

export const Route = createFileRoute('/_pathlessLayout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div className="navbarLayout sticky z-40 flex h-[75px] items-center justify-center gap-4 border-b border-zinc-200 bg-zinc-50 align-middle">
        <img
          src="src/icons/WeRiseResize-Photoroom.png"
          className={'h-[50px]'}
        />
        <Navigation />
        <div className={'flex items-center gap-2'}>
          <Button variant="text">Sign in</Button>
          <Box className={'h-[20px] w-[1px] bg-neutral-200'} />
          <Button variant="text">Log in</Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
