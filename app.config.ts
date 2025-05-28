import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },

  vite: {
    ssr: {
      noExternal: ['@mui/*'],
    },
    resolve: {
      alias: {
        '@': '/src', // Алиас для корня src
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
