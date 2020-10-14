<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @navClick="theNavClick"
      :current-index="currentIndex"/>
      <scroll class="content" ref="scroll"
      @scroll="contentScroll" :probe-type="3">
        <detail-swiper class="detail-swiper" :banners="topImages"/>
        <detail-base-info  :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="loadOver"/>
        <detail-param-info ref="params"  :param-info="paramInfo"/>
        <detail-comment-info ref="comments" :comment-info="commentInfo"/>
        <goods-list ref="recomments" :goods="recommends"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
      <detail-bottom-bar class="detail-bottom-bar" @addToCart="toCart"/>

    
  </div>
  
</template>

<script>
import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'


import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'

import {debounce, throttle} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'


import DetailNavBar from './detailnavbar/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'



export default {
    name: 'Detail',
    components: {
        DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo, GoodsList, DetailBottomBar
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            currentIndex: 0,
            commentInfo: {},
            recommends: [],
            themeTopYs: []
        }
    },
    mixins: [itemListenerMixin, backTopMixin],
    created () {
        this.iid = this.$route.params.id 
        this.getDetail()
        getRecommend().then((res) => {
            this.recommends = res.data.list

        })

        

        // setTimeout(() => {
        //     this.$refs.scroll.scroll.refresh()
        // }, 500)
        
    },
    
    destroyed () {
      this.$bus.$off('itemImageLoad', this.itemImgListener)  
    },
    methods: {
        /**
         * 网络请求相关
         * 
         */
        getDetail(){
            getDetail(this.iid).then(res => {
                // console.log(res);
                let data = res.result
                // 获取轮播图数据
                this.topImages = data.itemInfo.topImages
                // 获取商品描述信息数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // 获取商家信息
                this.shop = new Shop(data.shopInfo)
                // 获取详细信息
                this.detailInfo = data.detailInfo
                // 参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                // 评论信息
                if(data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            });
        },
        getTopYs() {
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recomments.$el.offsetTop);
            this.themeTopYs.push(Number.MAX_VALUE)
        },
        loadOver() {
            const refresh = debounce(this.$refs.scroll.refresh, 200);
            const getTopYs = debounce(this.getTopYs, 400);
            refresh()
            getTopYs()
            // console.log(this.themeTopYs)
        },
        theNavClick(index) {
            this.currentIndex = index
            // setTimeout(() => {
            //     this.$refs.scroll.refresh()
            // }, 200)
            // console.log(index);
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
        },
        contentScroll(position) {
            const positionY = -position.y

            if (-position.y >= 200) {
                this.isShowBackTop = true
            }else {
                this.isShowBackTop = false
            }


            let length = this.themeTopYs.length
            for(let i = 0; i < length - 1; i++) {
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
                    this.currentIndex = i
                }
            }
        },
        toCart() {
            // console.log(this.goods.title);
            // console.log(this.goods.desc);
            // console.log(this.topImages[0]);
            const product = {}
            product.iid = this.iid
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            // console.log(product);

            this.$store.dispatch('addToCartList', product).then(res => console.log(res))
        }
    }
}
</script>

<style scoped>
    #detail {
    /* vh:相对于视口 */
    height: 100vh;
    position: relative;
    z-index: 10000;
    background-color: #fff;
  }

  .detail-nav {
      background-color: #fff;
      position: relative;
      z-index: 1000;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .detail-bottom-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
  }

</style>