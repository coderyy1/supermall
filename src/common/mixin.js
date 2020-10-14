// 混入
import {debounce} from './utils'
import BackTop from 'components/content/backtop/BackTop'


// 监听img加载的混入
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted () {
        // 监听图片加载完成
        const refresh = debounce(this.$refs.scroll.refresh, 200);
        this.itemImgListener = () => {
            refresh()
      }
        this.$bus.$on('itemImageLoad', this.itemImgListener);
    }
}

// 回到顶部的功能的混入
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
      // 回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
    }
}