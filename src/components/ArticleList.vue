<template>
    <div class="article-list">
        <router-link class="item" :to="{name: '',params: {} }">
            <div class="item-top">
                <div class="img-wrap">
                    <img src="../../static/img/icon.jpg" >
                </div>
                <div class="item-msg">
                    <div class="row-one">
                        <span class="author-name">哈哈哈</span>
                        <span class="author-title">标题</span>
                    </div>
                    <div class="row-two">
                        <span class="row-item">浏览:</span>
                        <span class="row-item">回复:</span>
                        <span class="row-item">分类:</span>
                    </div>
                </div>
            </div>
            <div class="item-content">哈哈哈哈哈哈哈哈哈哈
                或或或或或或或或或或或或或或或或或或或或或或
                或或或或或或或或或或或或或或或或或或或或或或
                或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或
                或或或或或或或或或或或或或或或或或或或或或或
                或或或或或或或或或或或或或或或或或或或或或或
                或或或或或或或或</div>
        </router-link>

    </div>
</template>

<script>
    export default {
        props: {
          articles: Array
        },
        data () {
          return {
            currentArticles: []
          }
        },
    }
</script>

<style scoped>
    .article-list {
        box-sizing: border-box;
        margin-top: 30px;
        border-radius: 4px;
        padding: 2px 20px;
        background: #fff;
    }

    .item {
        text-decoration: none;
        color:#333;
        display: block;
        padding-bottom: 20px;
        margin-top: 20px;
    }
    .item-top {
        display: flex;
    }
    .item-top .img-wrap {
        margin-right: 15px;
        width: 80px;
        height: 80px;  
    }
    .item-top .img-wrap img {
        width: 100%;
        display: block;
        }
    .row-one {
        display: flex;
    }
    .row-one .author-name {
        color: #409eff;
        font-weight: 700;
        padding-right: 8px;
        border-right: 1px solid #000;
    }
    .row-one .author-title {
        font-weight: 700;
        padding-left: 8px;
    }

    .author-name h2 {
        font-size: 18px;
        font-weight: 700;
        margin-left: 15px;
    }

    .item-msg {
        width: 100%;                                                                                                                                                                              
    }
    .row-two {
        box-sizing: border-box;
        padding: 4px 8px;
        margin-top: 15px;
        border-radius: 4px;
        width: 100%;
        background: #bbb;
    }

    .row-two .row-item{
        font-size: 14px;
        color: #333;
        font-weight: 700;
        margin-right: 30px;
    }
</style>