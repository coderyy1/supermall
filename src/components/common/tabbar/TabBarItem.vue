<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    computed: {
      isActive() {
        // $route指向当前活跃的路由，通过他的路径和当前组件的link属性来匹配可以知道当前组件是否处于路由活跃状态
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        // 如果当前组件处于路由活跃状态，则取activeColor的值给activeStyle，否则置空(重置样式)
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    props: {
      link: String,
      activeColor: {
        type: String,
        default: "red"
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 4px;
  }

  .active {
      color: #e92322;
  }
</style>