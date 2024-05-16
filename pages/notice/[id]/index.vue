<template>
  <div v-if="content">
    <div class="text-center text-2xl font-bold mt-10">{{ content.notificationName }}</div>
    <div class="text-center text-sm text-gray-500 mt-3">日期：{{ content.createTime }}</div>
    <div class="mt-5 pl-10 pr-10 " v-html="content.content"></div>
  </div>
</template>
<script setup>
const route = useRoute();
const appStoreInfo = useAppStoreInfo();
const {detailInfo: content} = storeToRefs(appStoreInfo);
appStoreInfo.getNotificationDetail({id: route.params.id});
</script>

