import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
    addToCartList(content, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = null
            for(let item of content.state.cartList) {
                if(item.iid === payload.iid) {
                    oldProduct = item
                }
            }
            if(oldProduct) {
                content.commit(ADD_COUNTER, oldProduct)
                resolve('商品数量+1')
            }else {
                payload.count = 1
                content.commit(ADD_TO_CART, payload)
                resolve('购物车中添加了新的商品')
            }
        })
        
    }
}