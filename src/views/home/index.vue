<script setup lang="ts">
//引入用户相关仓库，获取当前用户头像、昵称
import useUserStore from '@/store/modules/user';
//获取存储用户信息的仓库对象
let userStore=useUserStore();
import {getTime} from '@/utils/time'
</script>

<template>
    <el-card >
     <div class="box">
         <img :src="userStore.avatar" alt="" class="avatar">
       <div class="bottom">
        <h3 class="title">{{getTime()}}好呀{{ userStore.username }}</h3>
        <p class="subtitle">Seeped 驿站</p>
       </div>
       </div>
    </el-card>
       <div class=“bottoms”>
         <img src="@/assets/images//background111.jpg" alt="" width="700px" height="550px">
       </div>
</template>

<style scoped lang="scss">
    .box{
       display: flex;
   
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .bottom{
        margin-left: 20px;
      .title{
       font-size:30px;
       font-weight:900;
       margin-bottom:30px;
      }
      .subtitle{
        font-style:italic;
        color: gray;
      }

    }
}
.bottoms{
    margin-top:10px ;
    display: flex;
    justify-content: center;
}
</style>
