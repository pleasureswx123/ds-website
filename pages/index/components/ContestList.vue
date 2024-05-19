<template>
  <div class="flex flex-wrap select-none">
    <div class="p-4 md:w-1/4" v-for="item in contestList" :key="item.projectId">
      <div class="shadow-md ring-1 ring-inset ring-gray-200 rounded-lg overflow-hidden transition duration-150 ease-out hover:ease-in hover:shadow-2xl">
        <div class="w-full aspect-[2/1] overflow-hidden relative">
          <img class="w-full h-full object-cover object-center transition duration-150 ease-out hover:ease-in hover:scale-110" :src="getStaticPath(item.thumbnail)" alt="blog" />
          <div class="absolute top-3 right-0 text-white bg-red-500 rounded-l-full text-xs p-1 px-2 shadow">{{getCityIdToName(item.cityId)}}</div>
        </div>
        <div class="p-4">
          <h2 class="tracking-widest text-xs font-medium text-gray-400 mb-1">{{item.project.projectName}}&nbsp;</h2>
          <h1 class="h-14 text-lg font-medium text-gray-900 mb-1 text-red-600 line-clamp-2 text-ellipsis  text-justify">{{item.name}}</h1>
          <div class="flex items-center mb-3 text-[10px]">
            <UBadge size="xs" color="red" variant="soft">开始时间</UBadge>
            <div class="mr-auto">{{item.beginTime}}</div>
            <UBadge size="xs" color="red" variant="soft">结束时间</UBadge>
            <div>{{item.endTime}}</div>
          </div>
          <p class="leading-relaxed mb-3 line-clamp-2 text-ellipsis text-justify" v-html="item.content"></p>
          <div>
            <UButton class="bg-gradient-to-r transition duration-3000 ease-out hover:from-red-500 hover:to-red-600 hover:text-white" color="gray" label="立即报名" @click="jumpTo(item.contestId)">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
              </template>
            </UButton>
          </div>
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
  navigateTo(`/apply/${id}`)
}
</script>

<style lang="scss" scoped>
</style>