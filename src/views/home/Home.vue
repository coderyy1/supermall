<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll" 
     :probe-type="3" 
     @scroll="contentScroll"
     :pull-up-load="true"
     @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control id="tab-control" :titles="['流行', '新款', '精选']" @controlClick="controlClick"/>
      <goods-list :goods="goods[type].list"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>


  </div>
</template> 

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'


import {getHomeMultidata, getHomeGoods} from 'network/home'



export default {
    name: 'Home',
    components: {
      HomeSwiper, RecommendView, FeatureView, NavBar, TabControl, GoodsList, Scroll, BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        type: 'pop',
        isShowBackTop: false
      }
      
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      
    },
    mounted () {
      // 监听图片加载完成
        const refresh = this.debounce(this.$refs.scroll.refresh, 200);
        this.$bus.$on('itemImageLoad', () => {
        refresh()
      });
    },
    methods: {
      /**
       * 防抖和节流
       * 
       */
      debounce(func, delay) {
        let timer = null;
        return function (...args) {
          if (timer) {clearTimeout(timer);}
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay); 
        }
      },


      /**
       * 网络请求相关
       * 
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
        });
      },

      /**
       * 上拉加载更多
       * 
       */
      loadMore() {
        this.getHomeGoods(this.type);
        // console.log('11111');
        this.$refs.scroll.finishPullUp();
        setTimeout(() => {
          this.$refs.scroll.refresh();
        }, 200);
      },

      /**
       * 事件点击相关
       * 
       */
      // control-bar
      controlClick(index) {
        if(index === 0) {
          this.type = 'pop'
        }else if(index === 1) {
          this.type = 'new'
        }else {
          this.type = 'sell'
        }
      },
      // 回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      // 监听滚动
      contentScroll(position) {
        if (Math.abs(position.y) >= 1000) {
          this.isShowBackTop = true
        }else {
          this.isShowBackTop = false
        }
      }
    }
}


</script>

<style scoped>
  #home {
    padding-top: 44px;
    /* vh:相对于视口 */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--color-tint);
    color: white;
    z-index: 100;
  }

  #tab-control {
    margin-top: 8px;
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 100;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>