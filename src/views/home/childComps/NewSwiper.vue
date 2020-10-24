<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="(item, index) of banners" :key="index">
          <a :href="item.link">
            <img class="swiper-img" :src="item.image" alt="" @load="imgLoad">
          </a>
        </swiper-slide>
      <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSwiper',
  data () {
    return {
      swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction : false
          },
          isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
    methods: {
      imgLoad () {
        if (!this.isLoad) {
          this.$emit("swiperLoad")
          this.isLoad = true
        }
        
      }
    },
    computed: {
      showSwiper () {
        return this.banners.length
      }
    }
}
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #fff;
}
    
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 52%;
    background-color: #eee;
  }
    
  .swiper-img{
    width: 100%
  }
      
</style>