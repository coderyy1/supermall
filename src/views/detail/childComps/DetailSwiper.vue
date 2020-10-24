<template>
  <!-- <swiper>
      <swiper-item class="detail-swiper" v-for="(item, index) of banners" :key="index">
        <img :src="item" alt="" @load="detailSwiperLoad">
      </swiper-item>
    </swiper> -->
  <div class="detail-wrapper">
    <div class="detail-swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="(item, index) of banners" :key="index">
            <img class="detail-swiper-img" :src="item" alt="" @load="detailSwiperLoad">
        </swiper-slide>
      <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
    name: 'DetailSwiper',
    components: {
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        detailSwiperLoad() {
            this.$bus.$emit('detailSwiperL')
        }
    },
    data () {
        return {
            swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplayDisableOnInteraction : false
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
    .detail-swiper-img {
        height: 400px;
        width: 100%;

    }
</style>