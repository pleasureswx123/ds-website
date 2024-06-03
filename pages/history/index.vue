<template>
  <div class="flex flex-col md:flex-row gap-6">
    <Sidebar class="md:w-1/4 shrink-0" v-model="projectId" title="历届赛事" :list="projectListData"></Sidebar>
    <div class="grow">
      <div v-if="!!list.length" class="divide-y divide-gray-200 divide-dashed">
        <div class="p-2 py-5 flex gap-4 items-center cursor-pointer hover:bg-gray-50 group"
             v-for="(item, index) in list" :key="index" @click="goDetail(item)">
          <div class="grow w-0 group-hover:text-red-600 cursor-pointer truncate">
            {{ item.broadcastName }}
          </div>
          <p class="shrink-0 text-sm text-gray-500">{{ item.createTime }}</p>
        </div>
      </div>
      <div v-else class="grow flex h-96 justify-center items-center">
        <el-empty :image-size="200" description="暂无数据~" />
      </div>
      <div class="flex items-center justify-center py-5">
        <el-pagination
            :hide-on-single-page="true" small layout="prev, pager, next"
            @current-change="handleCurrentChange"
            v-model:current-page="currentPage"
            :total="pageTotal" />
      </div>
    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const {projectList, pageTotal, currentPage, pageSize} = storeToRefs(appStoreInfo);
const {getProjectList, getBroadcastList, jumpPath, initPageParams} = appStoreInfo;

initPageParams();

getProjectList();
const list = ref([]);

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
  initPageParams();
  id && getList(id);
})

const handleCurrentChange = (page) => {
  currentPage.value = page;
  getList(projectId.value);
}

const getList = async (projectId) => {
  getBroadcastList({projectId, pageNum: currentPage.value, pageSize: pageSize.value}).then(rows => {
    list.value = rows || [];
  })
}

const goDetail = (item) => {
  jumpPath(`/history/${item.broadcastId}`)
}
</script>

<style lang="scss" scoped></style>
