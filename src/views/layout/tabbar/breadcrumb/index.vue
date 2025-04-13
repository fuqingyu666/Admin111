<script setup lang='ts'>
import {ref} from 'vue';
import useLayOutSettingStore from '@/store/modules/setting';
import { useRoute } from 'vue-router';
//获取layout配置相关的仓库
let layOutSettingStore =useLayOutSettingStore();
//获取路由对象
let $route =useRoute();

//点击图标的方法
const changeIcon=()=>{
 //图标进行切换
  layOutSettingStore.fold=!layOutSettingStore.fold
}

const handler=()=>{
  console.log($route.matched);
}


</script>

<script lang="ts">
export default {
    name:"Breadcrumb"
}
</script>

<template>
       <!-- 顶部左侧静态 -->
      <el-icon style="margin-right: 10px" @click="changeIcon">
         <component :is="layOutSettingStore.fold?'Fold':'Expand'"></component>
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包动态展示路由名字与标题 -->
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <!-- 图标 -->
            <el-icon style="margin: 0px 2px">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑展示匹配路由的标题 -->
            <span>{{item.meta.title}}</span>
        </el-breadcrumb-item>
        <button @click="handler"></button>
      </el-breadcrumb>
</template>

<style lang="scss">
    
</style>