<template>
  <div>赛事项目首页</div>
  <div>11-{{ sidebarMenuList }}</div>
</template>

<script setup>
definePageMeta({
  layout: 'race'
})

const sidebarMenuList = useSidebarMenuList();
</script>

<style lang="scss" scoped></style>
