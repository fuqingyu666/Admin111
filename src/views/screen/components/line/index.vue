<script setup lang="ts">
import * as echarts from 'echarts';
import {ref,onMounted} from 'vue';
//获取图形图标的节点
let line =ref();
onMounted(()=>{
    let mychart =echarts.init(line.value);
    //设置配置项
    mychart.setOption({
        //标题组件
        title:{
            text:'访问量'
        },
        //x|y轴
        xAxis:{
            type:'category',
            //两侧不留白
            boundaryGap:false,
            //不要分隔线
             splitLine:{
                show:false
             },
                  //轴线的设置
             axisLine:{
                show:true
             },
             //刻度
             axisTick:{
                show:true
             },
             data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
             splitLine:{
                show:false,
             },
             //轴线的设置
             axisLine:{
                show:true
             },
             //刻度
             axisTick:{
                show:true
             }
        },
        grid:{
            left:40,
            top:0,
            right:20,
            bottom:20
        },
        //系列
        series:[
            {
                type:'line',
                data:[120,763,223,66,234,879,1230],
                //平滑曲线的设置
                smooth:true,
                //区域填充样式
                areaStyle:{
                    color:'gray'
                }
            }
        ]
    })
})

</script>

<template>
    <div class="box5">
        <div class="title">
            <p>未来七天游客数量趋势图</p>
            <img src="../../images/dataScreen-title.png" alt="">
        </div>
        <div class="charts" ref='line'></div>
    </div>
</template>



<style scoped lang="scss">
.box5 {
    width: 100%;
    height: 100%;
    background: url(../../images/dataScreen-main-cb.png) no-repeat;
    background-size: 100% 100%;
    margin: 0px 20px;

    .title {
        margin-left: 10px;

        p {
            color: white;
            font-size: 20px;
        }
    }

    .charts {
        height: calc(100% - 40px);
    }

}
</style>