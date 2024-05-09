<template>
  <section class="panel !h-[100px]">
    <div>广告位</div>
  </section>

  <section class="panel">
    <div>赛事播报</div>
  </section>

  <section class="panel !h-[100px]">
    <div>广告位</div>
  </section>

  <section class="panel">
    <div>历届赛事</div>
  </section>

  <section class="panel">
    <div>合作单位</div>
  </section>
</template>

<script setup>
definePageMeta({
  title: "首页",
});
</script>

<style lang="scss" scoped>
.panel {
  height: 50vh;
  @apply mb-3 text-stone-600;
}
</style>
