<template>
  <div class="flex">
    <div class="flex flex-wrap">
      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in projectList" :key="index"
           @click="goDetail(item)">
        <el-image :src="baseApi+item.thumbnail" fit="cover" class="cursor-pointer h-64 w-full">
          <template #error>
            <div class="h-64 flex items-center justify-center bg-gray-200">
              <el-icon :size="80" color="#fff">
                <Picture/>
              </el-icon>
            </div>
          </template>
        </el-image>
        <div class="p-2">
          <p class="font-bold truncate cursor-pointer text-center hover:text-red-500 hover:font-bold">
            {{ item.projectName }}</p>
        </div>
      </div>
    </div>
    
    <div class="flex flex-1 justify-center items-center" v-if="projectList.length === 0">
      <el-empty :image-size="200" description="暂无数据~"/>
    </div>
  
  </div>
</template>

<script setup>
import {Picture} from "@element-plus/icons-vue";

const appStoreInfo = useAppStoreInfo();
const baseApi = appStoreInfo.baseApi;
const {projectList} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectList();
const projectId = ref('');
watch(projectList, (list) => {
  projectId.value = list?.[0]?.projectId;
})

const goDetail = (item) => {
  appStoreInfo.jumpPath(`/about/${item.projectId}`)
}
</script>

<style lang="scss" scoped></style>
