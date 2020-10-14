<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <p class="info-title">{{goods.title}}</p>
      <div class="info-price">
          <span class="info-now-price" :style="{color: goods.color}">¥{{goods.realPrice}}</span>
          <span class="info-old-price">{{goods.oldPrice}}</span>
          <span class="info-logo" v-if="goods.discount" :style="{backgroundColor: goods.color}">{{goods.discount}}</span>
      </div>
      <div class="info-fav">
          <span class="info-fav-left">{{goods.columns[0]}}</span>
          <span class="info-fav-center">{{goods.columns[1]}}</span>
          <span class="info-fav-right">{{goods.service[goods.service.length - 1].name}}</span>
      </div>
      <div class="info-tips">
          <span class="info-tips-item" v-for="index of goods.service.length - 1">
              <img :src="goods.service[index - 1].icon" alt="">
              <span>{{goods.service[index - 1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .base-info {
        margin-top: 12px;
        padding: 0 8px;
    }

    .info-title {
        color: #000;
        font-size: 20px;
        margin-bottom: 18px;
        position: relative;

    }

    .info-price {
        margin-bottom: 18px;
    }

    .info-now-price {
        font-size: 25px;
    }

    .info-old-price {
        font-size: 14px;
        text-decoration: line-through;
    }

    .info-logo {
        color: #fff;
        border-radius: 6px;
        position: relative;
        top: -8px;
        padding: 4px;
    }

    .info-fav {
        display: flex;
        color: #999;
        text-align: center;
        justify-content: space-between;
        margin-bottom: 14px;
        padding-bottom: 4px;
        border-bottom: 1px solid #999;
    }

    .info-tips {
        display: flex;
        justify-content: space-between;
    }


    .info-tips-item img {
        width: 14px;
        height: 14px;
    }

    .info-tips-item span {
        color: #000;
    }
</style>