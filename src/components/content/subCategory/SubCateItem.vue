<template>
  <div class="sub-cate-item">
      <a :href="subCateItem.link">
        <img :src="subCateItem.image" alt=""
        @load="cateImgLoad">
        <div class="sub-cate-info">
            <p>{{subCateItem.title}}</p>
        </div>
      </a>
  </div>
</template>

<script>
export default {
    name: 'SubCateItem',
    props: {
        subCateItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        cateImgLoad() {
            this.$bus.$emit('itemCateImageLoad')
        }
    }
}
</script>

<style scoped>
    .sub-cate-item {
        padding-bottom: 40px;
        text-align: center;
        position: relative;
        width: 33%;
    }

    .sub-cate-item img {
        width: 100%;
        border-radius: 5px;
    }

    .sub-cate-info {
        font-size: 16px;
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        overflow: hidden;
    }

    .sub-cate-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
</style>