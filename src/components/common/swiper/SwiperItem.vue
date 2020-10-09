<template>
  <div class="slide">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Slide"
}
</script>

<style>
    .slide {
        width: 100%;
        /* 不收缩 */
        flex-shrink: 0;
    }

    .slide img {
        /* 撑开外层 */
        width: 100%;
    }
</style>