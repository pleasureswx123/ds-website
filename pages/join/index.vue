<template>
  <div class="flex flex-col md:flex-row gap-4">
    <Sidebar class="md:w-1/4 shrink-0" v-model="projectId" title="赛事项目" :list="projectListData"></Sidebar>
    <div v-if="!!contestList.length" class="grow grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div class="shadow ring-1 ring-gray-100 hover:shadow-lg rounded-lg relative pb-3" v-for="(item, index) in contestList" :key="index" @click="goDetail(item)">
        <el-image :src="item.thumbnail" fit="cover" class="cursor-pointer w-full aspect-[4/3] rounded-t-lg">
          <template #error>
            <div class="w-full h-full flex items-center justify-center bg-gray-100">
              <el-icon :size="80" color="#fff">
                <Picture />
              </el-icon>
            </div>
          </template>
        </el-image>
        <div class="absolute shadow-lg right-0 top-2 bg-red-500 text-white rounded-l-full p-1 text-xs px-2 leading-normal">{{ getCityIdToName(item.cityId) }}</div>
        <div class="p-2 px-3 space-y-2">
          <p class="font-bold text-base truncate cursor-pointer text-gray-800">{{ item.name }}</p>
          <p class="text-sm text-gray-500 leading-normal">起至时间: {{ item.beginTime }}至{{ item.endTime }}</p>
        </div>
        <div class="mt-1 px-3 flex items-center justify-center cursor-pointer">
          <UButton block :ui="{ rounded: 'rounded-full' }" size="md" @click.stop="navigateTo(`/apply/${item.contestId}`)">我要报名</UButton>
        </div>
      </div>
    </div>
    <div v-else class="grow flex h-96 justify-center items-center">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>
  </div>
</template>

<script setup>
import { Picture } from "@element-plus/icons-vue";
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
  console.log(876, id)
  id && getContestList(id);
})

const contestList = ref([]);

const getContestList = async (projectId) => {
  appStoreInfo.getContestList({projectId}).then(rows => {
    contestList.value = rows;
  })
}

const goDetail = (item) => {
  appStoreInfo.jumpPath(`/join/${item.contestId}`)
}
</script>

<style lang="scss" scoped></style>
