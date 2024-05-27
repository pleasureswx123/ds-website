<template>
  <div class="px-5">
    <h1 class="text-lg p-4 mb-10 border-b border-gray-300 font-medium text-gray-600 text-justify bg-red-600 text-white rounded-lg">历届赛事</h1>
    <div class="item-box" v-for="item in contestList" :key="item.contestId" @click="jumpTo(item.contestId)">
      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        <div class="w-5 h-5 rounded-full bg-red-500 inline-flex items-center justify-center text-white absolute left-2.5 top-0 z-10" />
      </div>
      <div class="item-con">
        <div class="md:w-52 shrink-0">
          <div class="aspect-[2/1] mb-3 overflow-hidden relative">
            <img class="rounded w-full h-full object-fill object-center bg-gray-200" :src="item.thumbnail" alt="content" />
            <div class="absolute top-0 right-0 text-white bg-red-500 rounded-l-full text-xs p-1 px-2 shadow">{{getCityIdToName(item.cityId)}}</div>
          </div>
          <div class="font-semibold text-gray-700">{{item.project.projectName}}</div>
          <div class="mt-1 text-gray-500 text-sm">{{item.beginTime}}</div>
        </div>
        <div class="grow">
          <h2 class="text-2xl font-medium text-red-600 title-font mb-2">{{item.name}}</h2>
          <p class="leading-relaxed line-clamp-3 text-ellipsis">{{replaceHtml(item.content)}}</p>
          <a class="text-red-500 inline-flex items-center mt-4">查看详情
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const { contestList } = storeToRefs(appStoreInfo);
const {getContestList} = appStoreInfo;
await getContestList();
const jumpTo = id => {
  navigateTo(`/join/${id}`)
}
</script>

<style lang="scss" scoped>
.item-box {
  @apply relative pb-12 pl-14 last:pb-0;
  &:last-child > :first-child > :first-child {
    @apply hidden;
  }
  .item-con {
    @apply flex flex-col md:flex-row gap-3 md:gap-5 cursor-pointer;
  }
}
</style>