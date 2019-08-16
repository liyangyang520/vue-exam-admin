<template>
    <div class="demo-split">
        <Split v-model="split2" mode="vertical">
            <div slot="top" class="demo-split-pane">
                <span class="title">北京科技大学机械工程学院</span>
                <p class="f-title">机械制图教学辅助系统后台管理创建流程</p>
               <Timeline>
                    <TimelineItem color="green"><Button size="large" type="info" long>选择试题</Button></TimelineItem>
                    <TimelineItem color="green"><Button size="large" type="success" long>进行组卷</Button></TimelineItem>
                    <TimelineItem color="red"><Button  size="large" type="warning" long>选择班级</Button></TimelineItem>
                    <TimelineItem color="blue"><Button size="large" type="error" long>发布试卷</Button></TimelineItem>
                </Timeline>
            </div>
        </Split>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                split2: 1
            }
        },
    }
</script>
<style>
    .demo-split{
        height: 550px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 80px 400px;
        align-items: center;
    }
    .title{
        font-size: 35px;
        font-weight: bold;
        padding:10px 10px;
    }
    .f-title{
        font-size: 20px;
        padding:25px 40px;
    }
        


</style>