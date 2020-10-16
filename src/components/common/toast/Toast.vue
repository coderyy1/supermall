<template>
  <div class="toast" v-show="isShow">
      <div class="msg">{{message}}</div>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message='默认文本', delay=2000) {
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            }, delay)
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 8px;
        border-radius: 8px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        background-color: rgba(0, 0, 0, .72);
        z-index: 10000;
    }

    .msg {
        white-space: nowrap;
    }
</style>