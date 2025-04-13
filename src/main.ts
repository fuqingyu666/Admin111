// import './assets/main.css'
import App from '@/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'; // 全局引入 Element Plus 样式  
//引入模板的全局样式
import '@/styles/index.scss'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())

//注册模板路由
app.use(router)

//安装自定义插件
app.use(gloalComponent);

//引入路由鉴权文件
import './permisstion'

//引入自定义指令文件
import { isHasButton } from './directive/has';
isHasButton(app);

//安装仓库
app.use(pinia)

app.mount('#app')











