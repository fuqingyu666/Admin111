import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入svg需要用到插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'


// https://vite.dev/config/
export default defineConfig(({command,mode})=>{
  //获取各种环境对应的变量
  let env=loadEnv(mode,process.cwd());
  return {
    plugins: [
      vue(),
      vueDevTools(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        enable: command === 'serve',//保证开发阶段可以使用mock接口
      })

    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      
      },

    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },
    //代理跨域
    server:{
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
    }
  }
}
})
