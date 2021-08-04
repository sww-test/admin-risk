import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import viteSvgIcons from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [
      vue(),
      // 组件自动导入
      ViteComponents({
        customComponentResolvers: [
          // 自动导入饿了么组件
          ElementPlusResolver({
            importStyle: true
          })
        ]
      }),
      // 自动导入svg图标
      viteSvgIcons({
        iconDirs: [resolve(process.cwd(), 'src/vab/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    build: {
      outDir: `dist/${env.VITE_MODE_NAME}`,
      // 生产环境移除console
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    server: {
      host: 'localhost',
      port: 8096, // 端口
      open: true, // 是否自动打开浏览器
      proxy: {
        '/xz-risk': {
          target: 'https://www.baidu.com',
          changeOrigin: true
        }
      } // 代理
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        '*': resolve('')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 注册全局变量 引入多组 '@import "@/assets/styles/variables";\n@import "@/assets/styles/base'
          additionalData: '@use "./src/vab/styles/variables.scss" as *;'
        }
      }
    }
  }
})
