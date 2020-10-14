<template>
  <div class="cart-bottom-bar">
      <div class="select-all">
          <check-button :is-checked="isCheckedAll" class="check-button"
          @click.native="checkAllClick"/>
      </div>
      <div class="tips">
          <span>全选</span>
          <div class="sum-price">合计：</div>
          <div class="sum-price data">￥{{totalPrice}}</div>
      </div>
      <div class="pay">
          <span>去结算({{selectedCount}})</span>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
    name: 'CartBottomBar',
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters([
        'cartList'
        ]),
        totalPrice() {
            return this.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        selectedCount() {
            return this.cartList.filter(item => {
                return item.checked
            }).length
        },
        isCheckedAll() {
            if(this.cartList.length === 0) {
                return false
            }
            return !this.cartList.find(item => !item.checked)
        }
    },
    methods: {
        checkAllClick() {
            let oldFlag = !this.isCheckedAll
            this.cartList.forEach(item => item.checked = oldFlag)
        }
    }
}
</script>

<style scoped>
    .cart-bottom-bar {
        position: relative;
        height: 40px;
        background-color: #eee;
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;
        text-align: center;
        display: flex;
        align-items: center;
    }

    .select-all {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin: 0 5px 0 10px;
    }

    .check-button {
        width: 22px;
        height: 22px;
    }

    .tips span {
        font-size: 14px;
        position: relative;
        bottom: -5px;
    }

    .sum-price {
        display: inline-block;
        position: relative;
        bottom: -5px;
        left: 8px;
    }

    .data {
        left: 0;
        font-size: 22px;
        bottom: -2px;
        color: #e92322;
    }

    .pay {
        position: absolute;
        right: 0;
        height: 100%;
        line-height: 40px;
        background-color: #f52b00;
    }

    .pay span {
        padding: 5px 20px;
        color: #fff;
    }
</style>