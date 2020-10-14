<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>

    <left-control 
    class="left-control" 
    :category="category"
    @lClick="lClicked"/>

    <scroll class="content" ref="scroll" :probe-type="3"
      @scroll="contentScroll">
      <sub-category class="sub-category" :subCategory="subCategory[currentIndex]" ref="subcate" :key="cateKey"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
  
</template>

<script>
import {getCategoryData, getSubcategory} from 'network/category'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {debounce, throttle} from 'common/utils'

import LeftControl from 'components/content/leftControl/LeftControl'
import SubCategory from 'components/content/subCategory/SubCategory'
import {backTopMixin} from 'common/mixin'

export default {
    name: 'Category',
    components: {
      LeftControl, NavBar, SubCategory, Scroll
    },
    data() {
      return {
        category: [],
        subCategory: {},
        currentIndex: 0,
        cateKey: 0
      }
    },
    mixins: [backTopMixin],
    methods: {
      /**
       * 网络请求
       * 
       */
      getCategoryData() {
        getCategoryData().then((res) => {
          this.category = res.data.category.list
        });
      },
      getSubcategory(maitKey) {
        getSubcategory(maitKey).then((res) => {
          this.subCategory[this.currentIndex] = res.data.list
          this.cateKey ++
        });
      },

      /**
       * 事件
       * 
       */
      // 点击左侧bar
      lClicked(index) {
        this.currentIndex = index
        // console.log(this.currentIndex);
        // console.log(this.subCategory[this.currentIndex])
        if (!this.subCategory[this.currentIndex]) {
          this.getSubcategory(this.category[this.currentIndex].maitKey)
        }
        
      },
      
      // 监听滚动
      contentScroll(position) {
        if (-position.y >= 200) {
          this.isShowBackTop = true
        }else {
          this.isShowBackTop = false
        }
      }
    },
    created () {
      this.getSubcategory(3627)
      this.getCategoryData();
      
    },
    mounted () {
      const refresh = debounce(this.$refs.scroll.refresh, 200);
      this.$bus.$on('itemCateImageLoad', () => {
        refresh()
      });
    }

    

}
</script>

<style scoped>
    #category {
    height: 100vh;
    position: relative;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: white;
    z-index: 100;
  }

  .left-control {
    /* margin: 8px 0 8px 0; */
    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  /* .sub-category {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 80px;
    background-color: #f00;
  } */

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 92px;
    right: 0;
  }
</style>