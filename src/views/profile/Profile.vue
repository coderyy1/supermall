<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
    <my-info class="my-info"/>
    <my-resources class="my-res"/>

    <div class="top-tips">
      <div class="top-tips-item">
        <img class="icon" src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="top-tips-item">
        <img class="icon" src="~assets/img/profile/pointer.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="top-tips-item">
        <img class="icon" src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>

    <div class="bottom-tips">
      <div class="bottom-tips-item" @click="toCart">
        <img class="icon" src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div class="bottom-tips-item last-item">
        <img class="icon" src="~assets/img/profile/shopping.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import MyInfo from './childComps/MyInfo'
import MyResources from './childComps/MyResources'

export default {
    name: 'Profile',
    components: {
      NavBar, MyInfo, MyResources
    },
    methods: {
      toCart() {
        this.$router.replace('/cart')
      }
    }
}
</script>

<style scoped>
  #profile {
    height: 100vh;
    position: relative;
  }

  .profile-nav {
    background-color: var(--color-tint);
    color: white;
    z-index: 100;
  }

  .my-info {
    background-color: #0099CC;
  }

  .my-res {
    background-color: #fff;
    border-bottom: 14px solid #eee;
  }

  .icon {
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  .top-tips-item {
    margin: 22px 0 0 0;
    padding-bottom: 12px;
    padding-left: 22px;
    border-bottom: 1px solid #ccc;
  }

  .top-tips {
    border-bottom: 14px solid #eee;
  }

  .bottom-tips-item {
    margin: 22px 0 0 0;
    padding-bottom: 12px;
    padding-left: 22px;
    border-bottom: 1px solid #ccc;
  }

  .last-item {
    border: none;
  }

  
</style>