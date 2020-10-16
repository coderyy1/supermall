<template>
  <div class="my-resources">
      <div class="res res-border">
          <div>
              <span class="red">22.22</span>
              <span>元</span>
          </div>
          <div>我的余额</div>
      </div>
      <div class="res res-border">
          <div>
              <span class="red">22</span>
              <span>个</span>
          </div>
          <div>我的优惠</div>
      </div>
      <div class="res">
          <div>
              <span class="red">2222</span>
              <span>分</span>
          </div>
          <div>我的积分</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MyResources'
}
</script>

<style scoped>
    .my-resources {
        display: flex;
        /* height: 89px; */
        justify-content: space-around;
        align-items: center;
        
    }

    .res {
        padding: 22px 0;
        flex: 1;
        text-align: center;
    }

    .res-border {
        
        border-right: 1px solid #eaeaea;
    }
    .red {
        font-size: 22px;
        color: #e92322;
    }
</style>