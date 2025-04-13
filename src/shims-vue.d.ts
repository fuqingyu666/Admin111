// 若已存在其他声明，补充此部分即可
declare namespace NodeJS {
    interface ProcessEnv {
        // 其他环境变量...
        1
    }
}
declare module '@/*' {  // 声明 @ 别名相关模块
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<1>;
    export default component;
}