<template>
  <div class="tab-control">
      <div v-for="(item, index) of titles" class="tab-control-item" :class="{active: index === currentIndex}"
      @click="handleClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: {
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
        handleClick(index) {
            this.currentIndex = index;
            this.$emit("controlClick", index);
        }
    }
}
</script>

<style>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }

    .tab-control-item {
        flex: 1;
    }

    .tab-control-item span  {
        padding: 0 4px 4px 4px;
        
    }

    .active span {
        border-bottom: 3px solid var(--color-tint);
        color: var(--color-tint);
    }
</style>