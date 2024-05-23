<template>
  <div class="flex flex-col md:flex-row gap-6">
    <Sidebar class="md:w-1/4 shrink-0" v-model="projectId" title="历届赛事" :list="projectListData"></Sidebar>
    <div v-if="!!broadcastList.length" class="grow divide-y divide-gray-200 divide-dashed">
      <div class="p-2 py-5 flex gap-4 items-center cursor-pointer hover:bg-gray-50 group"
           v-for="(item, index) in broadcastList" :key="index" @click="goDetail(item)">
        <div class="grow w-0 group-hover:text-red-600 cursor-pointer truncate">
          {{ item.broadcastName }}
        </div>
        <p class="shrink-0 text-sm text-gray-500">{{ item.createTime }}</p>
      </div>
    </div>
    <div v-else class="grow flex h-96 justify-center items-center">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const {projectList} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectList();

const projectListData = computed(() => {
  return (projectList.value || []).map(item => {
    return {
      value: item.projectId,
      label: item.projectName,
      ...item
    }
  })
})

const projectId = ref('');
watch(projectList, (list) => {
  projectId.value = list?.[0]?.projectId;
})
watch(projectId, (id) => {
  id && getBroadcastList(id);
})

const broadcastList = ref([]);

const getBroadcastList = async (projectId) => {
  appStoreInfo.getBroadcastList({projectId}).then(rows => {
    broadcastList.value = rows;
  })
}

const goDetail = (item) => {
  appStoreInfo.jumpPath(`/history/${item.broadcastId}`)
}
</script>

<style lang="scss" scoped></style>
