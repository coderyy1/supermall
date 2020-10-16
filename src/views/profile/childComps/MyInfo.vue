<template>
  <div class="my-info">
      <div class="left">
        <div class="my-info-left">
          <img src="~assets/img/profile/quin.jpg" alt="">
        </div>
      </div>
      <div class="center">
        <div class="my-info-name">
          <span>Quin33</span>
        </div>
        <div class="my-info-phone">
          <img class="phone" src="~assets/img/profile/phone.svg" alt="">
          <span>361433</span> 
        </div>
      </div>
      <div class="right">
        <div class="my-info-right">
          <img src="~assets/img/common/arrow-left.svg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'MyInfo'
}
</script>

<style scoped>
.my-info {
    
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }

  .left, .right {
        width: 60px;
    }

  .right img {
    width: 22px;
    height: 22px;
  }

  .center {
      color: #fff;
      margin-left: -120px;
    }
  .my-info-name {
    
    font-size: 22px;

  }

  .my-info-phone {
    margin-top: 8px;
  }

  .phone {
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  .my-info-phone span {
    font-size: 14px;
  }
  
  .my-info-left {
    margin-left: 20px;
  }

  .my-info-left img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    box-shadow: 0 0 25px rgba(100, 100, 100, .5);
  }
</style>