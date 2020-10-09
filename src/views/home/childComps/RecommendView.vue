<template>
  <div class="recommend">
      <div v-for="item of recommends" class="recommendItem">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px 0;
        border-bottom: 10px solid #eaeaea;
    }

    .recommendItem {
        flex: 1;
    }

    .recommendItem img {
        height: 71px;
        width: 71px;
        margin-bottom: 8px;
    }

</style>