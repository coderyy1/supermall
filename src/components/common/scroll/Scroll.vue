<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted () {

    /**
     * 使用延迟解决Better-Scroll高度计算错误的问题
     * 
     */
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //    click: true,
    //    probeType: this.probeType,
    //    pullUpLoad: this.pullUpLoad
    //   });

    //   // 监听滚动
    //   this.scroll.on('scroll', (position) => {
    //     this.$emit('scroll', position)
    //   });

    //   // 监听上拉事件
    //   this.scroll.on('pullingUp', () => {
    //     this.$emit('pullingUp');
    //     // this.scroll.finished();
    //   });
    // },200);

    this.scroll = new BScroll(this.$refs.wrapper, {
       click: true,
       probeType: this.probeType,
       pullUpLoad: this.pullUpLoad
      });


      
      // 监听滚动
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
       });
      }

      // 监听上拉事件
      if (this.pullUpLoad === true) {
        this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
        // this.scroll.finished();
        });
      }

    
  },
  methods: {

    // 增加判断来确保调用方法时已经有实例对象
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log('refreshing~');
    }
  }
  
};
</script>

<style>
</style>