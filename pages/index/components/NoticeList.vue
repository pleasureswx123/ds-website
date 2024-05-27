<template>
  <div class="h-full shadow-md ring-1 ring-inset ring-gray-200 rounded-lg overflow-hidden transition duration-150 ease-out hover:ease-in hover:shadow-2xl">
    <h1 class="text-lg p-4 border-b border-gray-300 font-medium text-gray-600 text-justify bg-red-600 text-white">通知公告</h1>
    <div class="p-4 divide-y divide-y divide-dashed divide-gray-200">
      <div class="p-2 rounded cursor-pointer from-red-100 to-white hover:bg-gradient-to-b" v-for="item in listData" :key="item.notificationId" @click="jumpTo(item.notificationId)">
<!--        <img class="aspect-[3/1] object-cover rounded-md mb-2" :src="getStaticPath(item.thumbnail)" alt="">-->
        <h2 class="mb-1 font-medium text-red-600 truncate">{{item.notificationName}}</h2>
        <div class="leading-relaxed text-sm line-clamp-2 text-ellipsis text-justify mb-1">{{replaceHtml(item.content)}}</div>
        <div class="text-right text-sm text-gray-300">{{item.createTime}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const {getNotificationList}  = appStoreInfo;
const listData = ref([]);
const result = await getNotificationList();
listData.value = result;
const jumpTo = id => {
  navigateTo(`/notice/${id}`)
}
</script>

<style lang="scss" scoped>
</style>