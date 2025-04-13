<script setup>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script>
export default {
  name:"Tabbar"
}
</script>

<template>
  <div class="tabbar">
    <div class="tabbar_left">
     <Breadcrumb />
   </div>
   <div class="tabbar_right">
     <Setting />
   </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
 
  .tabbar_right{
    display: flex;
    align-items: center;
  }
  

}
</style>


