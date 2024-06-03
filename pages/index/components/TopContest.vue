<template>
  <div class="w-full md:flex-1 shadow rounded-lg ring-1 ring-gray-200 hover:shadow-2xl">
    <div class="aspect-[2/1] relative">
      <img class="w-full h-full object-cover object-center rounded-t-lg" alt="hero" :src="currentData.thumbnail" />
      <div class="absolute top-3 right-0 text-white bg-red-500 rounded-l-full text-xs p-1 px-2 shadow">{{getCityIdToName(currentData.cityId)}}</div>
    </div>
    <div class="p-2.5">
      <h1 class="pt-0.5 pb-1 font-medium text-red-600 truncate">{{currentData.name}}</h1>
      <p class="leading-normal line-clamp-2 text-ellipsis text-justify">{{replaceHtml(currentData.content)}}</p>
      <div class="pt-3 flex gap-2 items-center">
        <UButton class="mr-auto" size="md" @click="navigateTo(`/apply/${currentData.contestId}`)">立即报名</UButton>
        <UBadge size="xs" color="red" variant="soft">开始时间</UBadge>
        <div class="text-xs">{{currentData.beginTime}}</div>
        <UBadge size="xs" color="red" variant="soft">结束时间</UBadge>
        <div class="text-xs">{{currentData.endTime}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const { contestList } = storeToRefs(appStoreInfo);
const {getContestList} = appStoreInfo;
await getContestList();

const currentData = computed(() => {
  return (contestList.value || []).find(item => item.recommend === 'Y') || {}
})
</script>

<style lang="scss" scoped>
</style>