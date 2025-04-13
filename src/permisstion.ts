//路由鉴权
import router from '@/router';
import setting from './setting';
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
nprogress.configure({showSpinner: false})
//获取用户相关小仓库内部token，判断用户是否登录成功
import useUserStore from './store/modules/user';
import pinia from './store';
let userStore=useUserStore(pinia);

//全局守卫：项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to:any, from:any, next:any)=>{
     document.title=`${setting.title} -${to.meta.title}`
    //to,你要访问哪个路由
    //from，你从哪个路由而来
    //next：路由的放行函数  
    //访问某一个路由之前执行的钩子
     nprogress.start();

     //获取token，判断用户是否已登录
     let token =userStore.token;
     //获取用户名字
     let username =userStore.username;
     //用户登录判断
     if(token){
          //登录成功，访问login，不能访问，指向首页
         if(to.path==='/login'){ 
           next({path:'/'});
         }else{
          //登陆成功访问其余路由
           if(username){
               //有用户信息,放行
                 next();
           } else{
               //如果没有用户信息，在守卫这里发请求获取用户信息再放行
               try {
                    //获取用户信息
                    await userStore.userInfo();
                    //放行
                    //万一：刷新的时候是异步路由，有可能获取到用户信息、异步路由还没有加载完毕，出现空白的效果
                    next({...to});
               } catch (error) {
                    //token过期
                    //用户修改了token
                    //退出登录 ->用户相关的数据清除
                   await userStore.userLogout();
                    next({path:'/login',query:{redirect:to.path}})
               }
           }
          }
     }else{
          //用户未登录
          if(to.path==='/login'){
               next();
          }else{
               next({ path: '/login', query: { redirect: to.path } });
          }
     }
})
//全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
     nprogress.done();
})


