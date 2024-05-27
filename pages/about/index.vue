<template>
  <div class="flex flex-wrap select-none">
    <template v-if="!!projectList.length">
      <div class="p-4 md:w-1/3 hover:cursor-pointer" v-for="item in projectList" :key="item.projectId"  @click="goDetail(item)">
        <div class="shadow-md ring-1 ring-inset ring-gray-200 rounded-lg overflow-hidden transition duration-150 ease-out hover:ease-in hover:shadow-2xl">
          <div class="w-full aspect-[2/1] overflow-hidden">
            <img class="w-full h-full object-cover object-center transition duration-150 ease-out hover:ease-in hover:scale-110" :src="getStaticPath(item.thumbnail)" alt="image" />
          </div>
          <div class="p-5">
            <h2 class="tracking-widest text-xs font-medium text-gray-400 mb-1">{{item.createTime}}&nbsp;</h2>
            <h1 class="text-lg font-medium text-gray-900 mb-3 text-red-600 text-justify">{{item.projectName}}</h1>
            <p class="leading-relaxed mb-3 line-clamp-5 text-ellipsis text-justify" v-html="item.content"></p>
            <div>
              <UButton label="查看详情">
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </template>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="grow flex h-96 justify-center items-center">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>
  </div>
</template>

<script setup>
// import {Picture} from "@element-plus/icons-vue";
const appStoreInfo = useAppStoreInfo();
const {projectList} = storeToRefs(appStoreInfo);
appStoreInfo.getProjectList();

const goDetail = (item) => {
  appStoreInfo.jumpPath(`/about/${item.projectId}`)
}
</script>

<style lang="scss" scoped></style>
