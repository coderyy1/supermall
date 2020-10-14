<template>
  <div class="cart-list-item">
    <div class="item-select">
        <check-button 
        :is-checked="cartItem.checked"
        @click.native="itemSelected"/>
    </div>
    <div class="item-img">
        <img :src="cartItem.image" alt="图片">
    </div>
    <div class="item-info">
        <div class="info-title">
            {{cartItem.title}}
        </div>
        <div class="info-desc">
            {{cartItem.desc}}
        </div>
        <div class="info-bottom">
            <div class="info-bottom-price left">￥{{cartItem.price}}</div>
            <div class="info-bottom-count right">×{{cartItem.count}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name: 'CartListItem',
    components: {
        CheckButton
    },
    props: {
        cartItem: {
            type: Object,
            default: {}
        }
    },
    methods: {
        itemSelected() {
            if(this.cartItem.checked) {
                this.cartItem.checked = false
            }else {
                this.cartItem.checked = true
            }
        }
    }
}
</script>

<style scoped>
    .cart-list-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
    }

    .item-select {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-img {
        padding: 5px;
    }

    img {
        width: 80px;
        height: 100px;
        border-radius: 5px;
        display: block;
    }

    .item-info {
        overflow: hidden;
        position: relative;
    }

    .info-title, .info-desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .info-title {
        font-size: 18px;
        color: #000;
        margin-left: 8px;
        margin-top: 3px;
    }

    .info-desc {
        font-size: 15px;
        margin-left: 10px;
        margin-top: 18px;
    }

    .info-bottom {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        font-size: 20px;
    }

    .info-bottom-price {
        color: #e92322;
    }
</style>