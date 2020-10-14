<template>
  <div class="check-button" 
    :class="{check: isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    }
    
}
</script>

<style scoped>
    .check-button {
        border: 1px solid #aaa;
        border-radius: 50%;
    }


    .check {
        background-color: #e92322;
        border-color: #e92322;
    }
</style>