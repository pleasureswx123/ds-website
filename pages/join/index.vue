<template>
  <div class="flex">
    <ContentWrapper>
      <template #sidebar>
        <CardArea>
          <template #title>
            <div class="">赛事项目</div>
          </template>
          <div class="divide-y divide-red-400 divide-dashed text-center">
            <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold"
              :aria-selected="projectId === item.projectId" v-for="(item, index) in projectList" :key="index"
              @click="projectId = item.projectId">{{ item.projectName }}</div>
          </div>
        </CardArea>
      </template>
    </ContentWrapper>
    <div class="flex flex-wrap">
      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in contestList" :key="index">
        <el-image :src="getStaticPath(item.thumbnail)" fit="cover" class="cursor-pointer h-64 w-full"
          @click="goDetail(item)">
          <template #error>
            <div class="h-64 flex items-center justify-center bg-gray-200" @click="goDetail(item)">
              <el-icon :size="80" color="#fff">
                <Picture />
              </el-icon>
            </div>
          </template>
        </el-image>
        <div class="absolute right-1 top-1 bg-red-500 text-white rounded p-1 text-sm">{{ getCityIdToName(item.cityId) }}
        </div>
        <div class="p-2">
          <p class="font-bold truncate cursor-pointer" @click="goDetail(item)">{{ item.name }}</p>
          <p class="mt-2 text-sm text-gray-500">起至时间：{{ item.beginTime }}至{{ item.endTime }}</p>
        </div>
        <div class="mt-1 mb-3 flex items-center justify-center cursor-pointer"
          @click="appStoreInfo.jumpPath(`/apply/${item.contestId}`)"><el-button type="danger" round>我要报名</el-button>
        </div>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center" v-if="contestList.length === 0">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>

  </div>
</template>

<script setup>
import { Picture } from "@element-plus/icons-vue";
const appStoreInfo = useAppStoreInfo();
const {projectList} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectList();

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
