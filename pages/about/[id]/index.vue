<template>
  <div v-if="content">
    <div class="text-center text-2xl font-bold mt-10">{{ content.projectName }}</div>
    <div class="mt-5 pl-10 pr-10 " v-html="content.content"></div>
  </div>
</template>
<script setup>
const route = useRoute();
const appStoreInfo = useAppStoreInfo();
const {detailInfo: content} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectDetail({id: route.params.id});
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


