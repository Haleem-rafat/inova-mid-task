import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@UI': path.resolve(__dirname, './src/shared/UI'),

      '@services': path.resolve(__dirname, './src/app/api/services'),
      '@servicesTypes': path.resolve(__dirname, './src/app/api/types'),
      '@constants': path.resolve(__dirname, './src/app/constants'),

      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),

      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    VitePWA({
      base: '/',
      injectRegister: null,
      selfDestroying: true,
      manifest: {
        theme_color: '#FFFFFF',
        background_color: '#FFFFFF',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'inova',
        description: 'inova-influence',
        name: 'inova-influence',
      },
      registerType: 'autoUpdate',

      strategies: 'generateSW',
      devOptions: {
        enabled: true,
        type: 'classic',
      },
    }),
  ],
});
