import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import federation from '@originjs/vite-plugin-federation'
import { APP_NAME } from './src/common/config'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? `/${APP_NAME}/` : '/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    federation({
      remotes: {
        'system-app': 'http://localhost:3001/system/assets/remoteEntry.js'
      },
      shared: ['@arco-design/web-vue', 'pinia', 'vue-router']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8001,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'esnext'
  }
})
