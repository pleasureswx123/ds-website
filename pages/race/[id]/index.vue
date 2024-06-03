<template>
    <div>比赛赛事类型项目id: {{ $route.params.id }}</div>
</template>

<script setup>
definePageMeta({
    layout: 'feature'
});
</script>
<style lang="scss" scoped>
:deep() {
  p {
    @apply my-4;
    img {
      @apply my-4 block mx-auto;
    }
  }
}
</style>
