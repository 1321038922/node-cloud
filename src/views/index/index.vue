<template>
    <div>
        <div class="top-box w1170">
            <div class="left-box">
                <Banner></Banner>
                <ArticleList :articles="articleData"></ArticleList>
            </div>
            <UserBox></UserBox>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue'
    import UserBox from '@/components/UserBox.vue'
    import ArticleList from '@/components/ArticleList.vue'

    export default {
        components:{
            Banner,
            UserBox,
            ArticleList

        },
        data(){
            return {
                articleData: []
            }
        }
    }
</script>

<style scoped>
.left-box {
    width: 750px;
  }

  .top-box {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>