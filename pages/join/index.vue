<template>
  <div>
    我要参赛 {{ breadcrumbData }}
  </div>
</template>

<script setup>

const breadcrumbData = useBreadcrumbList();
</script>

<style lang="scss" scoped></style>