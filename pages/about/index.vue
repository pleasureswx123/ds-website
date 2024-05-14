<template>
  <div class="flex">
    <div class="flex flex-wrap">
      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in projectList" :key="index" @click="goDetail(item)">
                <el-image :src="VITE_APP_BASE_API+item.thumbnail" fit="cover" class="cursor-pointer h-64 w-full"  >
                    <template #error>
                      <div class="h-64 flex items-center justify-center bg-gray-200">
                        <el-icon :size="80" color="#fff"><Picture  /></el-icon>
                      </div>
                    </template>
                </el-image>
                <div class="p-2">
                  <p class="font-bold truncate cursor-pointer text-center hover:text-red-500 hover:font-bold">{{ item.projectName }}</p>
                </div>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center" v-if="projectList.length === 0">
      <el-empty :image-size="200" description="暂无数据~" />
    </div>

  </div>
</template>

<script setup>
import {
  Picture
} from "@element-plus/icons-vue";
import  city  from '@/utils/city.js';
// definePageMeta({
//   layout: 'join'
// })

const VITE_APP_BASE_API = 'https://sports.d.yanlingxinrui.com/app/v1';
const breadcrumbData = useBreadcrumbList();


const token = useCookie("token");
const curToken = computed(() => {
  return token.value;
});

const projectList = ref([]);
const handleProList = async (params) => {
  const result = await $fetch(
    "https://sports.d.yanlingxinrui.com/app/v1/system/project/list?pageNum=1&pageSize=10",
    { method: "GET",
    headers: {
        Authorization: `Bearer ${curToken.value}`,
      },
    },
  );
  const { code, msg, token: newToken, rows } = result;
  if (code === 200) {
    projectList.value = rows;
  }
}

handleProList()

const router = useRouter();
const goDetail = (item) => {
  router.push('/about/'+item.projectId);
}


</script>

<style lang="scss" scoped></style>
