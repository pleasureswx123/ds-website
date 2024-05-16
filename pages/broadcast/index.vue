<template>
  <div class="flex">
    <ContentWrapper>
      <template #sidebar>
        <CardArea>
          <template #title>
            <div class="">赛事播报</div>
          </template>
          <div class="divide-y divide-red-400 divide-dashed text-center">
            <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold"
                 :aria-selected="projectId === item.projectId"
              v-for="(item, index) in projectList" :key="index" @click="projectId = item.projectId">{{ item.projectName }}</div>
          </div>
        </CardArea>
      </template>
    </ContentWrapper>
    <div class="flex-1 pl-10">

      <div class="p-5 flex border-b justify-between cursor-pointer" v-for="(item, index) in broadcastList" :key="index">
          <p class="truncate hover:text-red-500 cursor-pointer"  @click="goDetail(item)">{{ item.broadcastName }}</p>
          <p class="text-sm text-gray-500">{{ item.createTime }}</p>
        </div>

        <div class="flex justify-center items-center" v-if="broadcastList.length === 0">
          <el-empty :image-size="200" description="暂无数据~" />
        </div>


    </div>
  </div>
</template>

<script setup>
const appStoreInfo = useAppStoreInfo();
const {projectList} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectList();

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
  appStoreInfo.jumpPath(`/broadcast/${item.broadcastId}`)
}
</script>

<style lang="scss" scoped></style>
