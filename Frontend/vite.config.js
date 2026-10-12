import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isPreview }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    // En ligne, le site est servi depuis https://db-developpement.github.io/WhiskyV2/
    // En dev (npm start), il reste à la racine : http://localhost:5173/
    // (npm run preview teste le build tel qu'il sera en ligne, donc avec /WhiskyV2/)
    base: command === 'build' || isPreview ? '/WhiskyV2/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
