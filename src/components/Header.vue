<template>
    <header class="header">
        <div class="header-content w1170 clearfix">
            <router-link to="/">云笔记</router-link>
                <el-button class="write-btn" >
                    写笔记
                </el-button>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header {
    height: 50px;
    background: #409eff;

}
.header .header-content {
    display: flex;
    justify-content: space-between;
}
a{
    margin-top: 5px;
    color: #fff;
    font-weight:400;
    text-decoration: none;
    font-size: 30px;
}
.header .header-title{
    font-size: 30px;
    color: #fff;
    font-weight: 400;
}
.write-btn {
      margin-top: 5px;
    }
</style>