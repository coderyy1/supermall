import {request} from './request'

export function getCategoryData() {
    return request({
        url: '/category'
    })
    
}

export function  getSubcategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })

}


