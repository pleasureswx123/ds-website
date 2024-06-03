<template>
  <div class="text-gray-600 flex flex-wrap select-none -mx-2.5 !-mb-5">
    <div class="px-2.5 mb-5 md:w-1/3" v-for="item in listData" :key="item.projectId">
      <div class="shadow-md ring-1 ring-inset ring-gray-200 rounded-lg overflow-hidden transition duration-150 ease-out hover:ease-in hover:shadow-2xl">
        <div class="w-full aspect-[2/1] overflow-hidden">
          <img class="w-full h-full object-cover object-center transition duration-150 ease-out hover:ease-in hover:scale-110" :src="item.thumbnail" alt="image" />
        </div>
        <div class="p-5">
          <h2 class="tracking-widest text-xs font-medium text-gray-400 mb-1">{{item.createTime}}&nbsp;</h2>
          <h1 class="text-lg font-medium text-gray-900 mb-3 text-red-600 text-justify">{{item.projectName}}</h1>
          <p class="leading-relaxed mb-3 line-clamp-5 text-ellipsis text-justify">{{replaceHtml(item.content)}}</p>
          <div>
            <UButton label="查看详情" @click="jumpTo(item.projectId)">
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
const { projectList } = storeToRefs(appStoreInfo);
const {getProjectList} = appStoreInfo;
await getProjectList();

const listData = computed(() => {
  return (projectList.value || []).slice(0, 6);
})

const jumpTo = id => {
  navigateTo(`/about/${id}`)
}
</script>

<style lang="scss" scoped>
</style>