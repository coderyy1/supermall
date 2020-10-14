<template>
  <div class="sub-category">
      <sub-cate-item v-for="(item, index) of subCategory" 
      :subCateItem="item" :key="index"/>
  </div>
</template>

<script>
import SubCateItem from './SubCateItem'

export default {
    name: 'SubCategory',
    components: {
        SubCateItem
    },
    props: {
        subCategory: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .sub-category {
        display: flex;
        flex-wrap: wrap;
    }
</style>