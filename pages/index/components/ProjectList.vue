<template>
  <div class="flex flex-wrap">
    <div class="p-4 md:w-1/3" v-for="item in projectList" :key="item.projectId">
      <div class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-full aspect-[4/3] object-cover object-center" :src="getStaticPath(item.thumbnail)" alt="blog" />
        <div class="p-6">
          <h2 class="tracking-widest text-xs font-medium text-gray-400 mb-1">{{item.createTime}}&nbsp;</h2>
          <h1 class="text-lg font-medium text-gray-900 mb-3 text-red-600">{{item.projectName}}</h1>
          <p class="leading-relaxed mb-3 line-clamp-5 text-ellipsis">{{item.content}}</p>
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
const jumpTo = projectId => {
  navigateTo(`/about/${projectId}`)
}
</script>

<style lang="scss" scoped>
</style>