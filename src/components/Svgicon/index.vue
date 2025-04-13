<script setup lang="ts">
//接收父组件传递过来的参数
defineProps({
   //xlink:href属性值前缀
  prefix:{
     type:String,
     default:'#icon-'
  },
  //提供使用的图标名字
  name:String,
  //接收父组件传递的颜色
  color:{
    type:String,
    default:''
  },
  //接收父组件传递过来图标的宽度
  width:{
    type:String,
    default:'16px'
  },
   height:{
    type:String,
    default:'16px'
  }


})

</script>

<template>
    <div>
        <svg style="{width,height}">
            <use :xlink:href="prefix+name" :fill="color" ></use>
        </svg>
    </div>
</template>

<style scoped>
    
</style>



function defineProps(arg0: {
  //xlink:href属性值前缀
  prefix: { type: StringConstructor; default: string; };
  //提供使用的图标名字
  name: StringConstructor;
  //接收父组件传递的颜色
  color: { type: StringConstructor; default: string; };
  //接收父组件传递过来图标的宽度
  width: { ...; }; height: { ...; };
}) {
  throw new Error("Function not implemented.");
}
