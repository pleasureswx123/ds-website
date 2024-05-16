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
              v-for="(item, index) in projectList" :key="index" @click="handleClick(item)">{{ item.projectName }}</div>
          </div>
        </CardArea>
      </template>
    </ContentWrapper>
    <div class="flex flex-wrap">
      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in contestList" :key="index">
        <el-image :src="baseApi + item.thumbnail" fit="cover" class="cursor-pointer h-64 w-full"
          @click="goDetail(item)">
          <template #error>
            <div class="h-64 flex items-center justify-center bg-gray-200" @click="goDetail(item)">
              <el-icon :size="80" color="#fff">
                <Picture />
              </el-icon>
            </div>
          </template>
        </el-image>
        <div class="absolute right-1 top-1 bg-red-500 text-white rounded p-1 text-sm">{{ city.city_list[item.cityId] }}
        </div>
        <div class="p-2">
          <p class="font-bold truncate cursor-pointer" @click="goDetail(item)">{{ item.name }}</p>
          <p class="mt-2 text-sm text-gray-500">起至时间：{{ item.beginTime }}至{{ item.endTime }}</p>
        </div>
        <div class="mt-1 mb-3 flex items-center justify-center cursor-pointer" @click="goSignUp(item)"><el-button
            type="danger" round>我要报名</el-button></div>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center" v-if="contestList.length === 0">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>

  </div>
</template>

<script setup>
import { Picture } from "@element-plus/icons-vue";
import city from '@/utils/city.js';

const { baseApi } = useAppConfig();

const projectList = ref([]);
const handleProList = async (params) => {
  const result = await $fetch(`${baseApi}/system/project/list?pageNum=1&pageSize=10`);
  const { code, rows } = result;
  if (code === 200) {
    projectList.value = rows;
    handleClick(rows[0])
  }
}

handleProList()

const contestList = ref([]);
const handleClick = async (item) => {
  const result = await $fetch(`${baseApi}/system/contest/list?pageNum=1&pageSize=10&projectId=${item.projectId}`);
  const { code, rows } = result;
  if (code === 200) {
    contestList.value = rows;
  }
}

const router = useRouter();
const goDetail = (item) => {
  router.push('/join/' + item.contestId);
}

const goSignUp = (item) => {
  router.push(`/apply/${item.contestId}`);
}
</script>

<style lang="scss" scoped></style>
