<template>
  <nav-bar class="detail-nav">
    <div 
    class="nav-left" 
    slot="left" 
    @click="detailBackClick">
        <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="center" slot="center">
        <span 
        v-for="(item, index) of titles"
        :class="{active: currentIndex === index}"
        @click="navClick(index)">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    props: {
        currentIndex: 0
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            
        }
    },
    methods: {
        detailBackClick() {
            this.$router.back()
        },
        navClick(index) {
            // this.currentIndex = index
            this.$emit('navClick', index)
        }
    }
}
</script>

<style scoped>
    .detail-nav {
    background-color: #fff;
    z-index: 100;
  }
  
    .nav-left img {
        vertical-align: middle;
    }

    .center {
        display: flex;
        font-size: 15px;
    }
    .center span {
        flex: 1;
    }
    
    .active {
        color: #e92322;
    }
</style>