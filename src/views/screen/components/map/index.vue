<script setup lang="ts">
import {ref,onMounted} from 'vue';
import * as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJSON from './china.json'
//获取DOM元素
let map =ref();
//注册中国地图
echarts.registerMap('china',chinaJSON as any)
onMounted(()=>{
   let mychart= echarts.init(map.value);
   //设置配置项
   mychart.setOption({
      //地图组件
      geo:{
        map:'china', //中国地图
        roam:true, //鼠标缩放效果
        label:{
            show:true,  //文字显示出来
            color:'white',
            fontSize:13
        },
         //每一个多边形的样式
        itemStyle:{
            color:'cyan',
            opacity:.8
      },
    //地图高亮的效果
     emphasis:{
        itemStyle:{
            color:'gray'
        },
        label:{
            fontSize:40
        }
     }
      },
      //布局位置
      grid:{
        left:0,
        top:0,
        right:0,
        bottom:0
      }
        
     
   })
})
</script>

<template>
    <div class="box4" ref="map">
        
    </div>
</template>

<style scoped lang="scss">
    
</style>