import {request} from './request'


export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

// 数据类
// base-info
export class Goods{
    constructor(itemInfo, columns, service){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.color = itemInfo.discountBgColor
        this.columns = columns
        this.service = service
        this.realPrice = itemInfo.lowNowPrice
    }
}

// 参数
export class GoodsParam {
    constructor(info, rule) {
        this.image = info.image ? info.image[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}

// shop-info
export class Shop{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}