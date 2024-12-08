/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'appConstants':path.resolve(__dirname, 'src/appConstants'),
      'services':path.resolve(__dirname, 'src/services'),
      'assets':path.resolve(__dirname, 'src/assets'),
      'components':path.resolve(__dirname, 'src/components'),
      'hooks':path.resolve(__dirname, 'src/hooks'),
      'utils':path.resolve(__dirname, 'src/utils'),
      'pages':path.resolve(__dirname, 'src/pages'),
      'appRedux':path.resolve(__dirname, 'src/appRedux'),
      'appRouter':path.resolve(__dirname, 'src/appRouter'),
      'constants':path.resolve(__dirname, 'src/constants'),
      'lib':path.resolve(__dirname, 'src/lib'),
      'providers':path.resolve(__dirname, 'src/providers'),
    },
  },
})
