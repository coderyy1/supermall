<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control fixControl" :titles="['流行', '新款', '精选']" @controlClick="controlClick"
      ref="tabControl1"
      v-show="isFixed"/>

    <scroll class="content" ref="scroll" 
     :probe-type="3" 
     @scroll="contentScroll"
     :pull-up-load="true"
     @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperLoad="alreadyLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @controlClick="controlClick"
      ref="tabControl2"/>
      <goods-list :goods="goods[type].list"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>


  </div>
</template> 

<script>

import HomeSwiper from './childComps/NewSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {debounce, throttle} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'


import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import {getHomeMultidata, getHomeGoods} from 'network/home'



export default {
    name: 'Home',
    components: {
      HomeSwiper, RecommendView, FeatureView, NavBar, TabControl, GoodsList, Scroll
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
        isShowBackTop: false,
        tabOffsetTop: 0,
        isFixed: false,
        saveY: 0,
      }
      
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      
    },
    mixins: [itemListenerMixin, backTopMixin],
    // 进入时设置位置并刷新
    activated () {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
      
    },
    // 离开时记录位置并取消全局事件监听
    deactivated () {
      this.saveY = this.$refs.scroll.scroll.y
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      // /**
      //  * 防抖和节流
      //  * 
      //  */
      // debounce(func, delay) {
      //   let timer = null;
      //   return function (...args) {
      //     if (timer) {clearTimeout(timer);}
      //     timer = setTimeout(() => {
      //       func.apply(this, args)
      //     }, delay); 
      //   }
      // },


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
          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp();
          // 刷新Bscroll
          setTimeout(() => {
          this.$refs.scroll.refresh()
          }, 200)
        });
      },



      

      /**
       * 上拉加载更多
       * 
       */
      loadMore() {
        // 使用函数节流
        const getMore = throttle(this.getHomeGoods, 500);
        getMore(this.type)
        
        
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
        // 使两个tabControl统一
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        // 刷新Bscroll
          setTimeout(() => {
          this.$refs.scroll.refresh()
          }, 200)
      },
      // 监听滚动
      contentScroll(position) {
        // 判断backtop是否显示
        if (Math.abs(position.y) >= 1000) {
          this.isShowBackTop = true
        }else {
          this.isShowBackTop = false
        }

        // 判断tabcontrol是否吸顶
        if (-position.y >= this.tabOffsetTop) {
          this.isFixed = true
        }else {
          this.isFixed = false
        }
      },
      alreadyLoad() {
        // 获取tabControl2的offsetTop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    }
}


</script>

<style scoped>
  #home {
    /* vh:相对于视口 */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    z-index: 100;
  }

  .tab-control {
    background-color: #fff;

  }

  .fixControl {
    position: relative;
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