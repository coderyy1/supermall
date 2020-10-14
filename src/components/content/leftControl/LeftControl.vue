<template>
  <div class="left-control">
      <span class="left-control-item"
            v-for="(item, index) of category"
            :class="{active: index === currentIndex}"
            @click="lControlClick(index)">
          {{item.title}}
      </span>
  </div>
</template>

<script>
export default {
    name: 'LeftControl',
    props: {
        category: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        // 监听点击
        lControlClick(index) {
            this.currentIndex = index;
            this.$emit('lClick', index);
        }
    }
}
</script>

<style scoped>
    .left-control {
        display: flex;
        width: 80px;
        background-color: #eee;
        flex-direction: column;
        /* box-shadow: 1px 0 1px rgba(100, 100, 100, .2); */
        
    }

    .left-control-item {
        display: flex;
        flex: 1;
        border-right: 1px solid rgba(100, 100, 100, .2);
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        box-sizing: border-box;
    }

    .active {
        color: #e92322;
        border-bottom: 4px solid var(--color-tint);
        border-right: none;
        background-color: #fff;
    }

</style>