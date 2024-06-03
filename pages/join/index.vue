<template>
  <div class="flex flex-col md:flex-row gap-4">
    <Sidebar class="md:w-1/4 shrink-0" v-model="projectId" title="赛事项目" :list="projectListData"></Sidebar>
    <div class="grow">
      <div v-if="!!list.length" class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div class="shadow ring-1 ring-gray-100 hover:shadow-lg rounded-lg relative pb-3" v-for="(item, index) in list" :key="index" @click="goDetail(item)">
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
import { Picture } from "@element-plus/icons-vue";
const appStoreInfo = useAppStoreInfo();
const {projectList, pageTotal, currentPage, pageSize} = storeToRefs(appStoreInfo);
const {getProjectList, getContestList, jumpPath, initPageParams} = appStoreInfo;

initPageParams();

await getProjectList();
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
  getContestList({projectId, pageNum: currentPage.value, pageSize: pageSize.value}).then(rows => {
    list.value = rows || [];
  })
}

const goDetail = (item) => {
  jumpPath(`/join/${item.contestId}`)
}
</script>

<style lang="scss" scoped></style>
