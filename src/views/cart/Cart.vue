<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

// Vuex的mapGetters辅助函数
import {mapGetters} from 'vuex'

export default {
    name: 'Cart',
    components: {
      NavBar, CartList, Scroll, CartBottomBar
    },
    
    computed: {
      ...mapGetters({
        length: 'cartLength'
      })
    },
    activated () {
      this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: white;
    z-index: 100;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
</style>