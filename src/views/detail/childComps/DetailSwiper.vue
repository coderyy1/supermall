<template>
  <swiper>
      <swiper-item class="detail-swiper" v-for="(item, index) of banners" :key="index">
        <img :src="item" alt="" @load="detailSwiperLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name: 'DetailSwiper',
    components: {
         Swiper, SwiperItem
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
    }
}
</script>

<style scoped>
    .detail-swiper {
        height: 400px;
        
    }
</style>