<template>
  <div class="container p-8 m-auto">
    <div class="flex gap-8 md:flex-row flex-col" v-if="detailInfo">
      <div class="md:w-2/5 w-full  text-gray-600 shrink-0">
        <img class="w-full h-60 object-cover object-center rounded" :src="getStaticPath(detailInfo.thumbnail)"
          alt="thumbnail">
        <div class="py-6 px-3">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{
            detailInfo.project.projectName }}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ detailInfo.name }}</h1>
          <p class="leading-relaxed mb-3 line-clamp-10 text-ellipsis text-justify">{{ detailInfo.content }}</p>
          <div class="flex items-center flex-wrap ">
            <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" @click="handleJumpTo">查看详情
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span
              class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
              {{ detailInfo.project.isWorks }}
            </span>
          </div>
        </div>
      </div>
      <div class="grow space-y-6">
        <div class="text-gray-900 space-y-2 text-base border rounded p-3 shadow-lg ring ring-red-200 bg-red-100">
          <div>项目名称：{{ detailInfo.project.projectName }}</div>
          <div>大赛名称：{{ detailInfo.name }}</div>
          <div>比赛城市：{{ getCityIdToName(detailInfo.cityId) }}</div>
          <div>比赛时间：{{ detailInfo.createTime }} 至 {{ detailInfo.endTime }}</div>
        </div>
        <UDivider label="请填写报名信息" :ui="{ label: 'text-red-500' }" />
        <el-form ref="ruleFormRef" label-position="top" :model="ruleForm" :rules="rules" label-width="auto" size="large"
          status-icon :scroll-to-error="true">
          <div class="flex gap-5 flex-col md:flex-row">
            <el-form-item class="grow" label="姓名" prop="nickName">
              <el-input v-model="ruleForm.nickName" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item class="grow" label="手机号" prop="phoneNumber">
              <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号"></el-input>
            </el-form-item>
          </div>
          <div class="flex gap-5 flex-col md:flex-row flex-wrap">

            <el-form-item class="grow shrink-0 w-[100px]" label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>

            <el-form-item class="flex-none" label="年龄" prop="age">
              <el-input-number class="!w-full" v-model.number="ruleForm.age" :min="18" :max="100" :step="1"
                step-strictly controls-position="right"><template #decrease-icon>
                  <el-icon>
                    <Minus />
                  </el-icon>
                </template>
                <template #increase-icon>
                  <el-icon>
                    <Plus />
                  </el-icon>
                </template>
              </el-input-number>
            </el-form-item>

            <el-form-item class="flex-none" label="类型" prop="teamType">
              <el-segmented v-model="ruleForm.teamType" :options="typeOptions" />
            </el-form-item>

            <el-form-item class="flex-none" label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio :value="1">男</el-radio>
                <el-radio :value="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item label="个人介绍" prop="introduce">
            <el-input v-model="ruleForm.introduce" maxlength="100" placeholder="请输入内容" show-word-limit
              type="textarea" />
          </el-form-item>
          <el-form-item label="比赛经验" prop="experience">
            <el-input v-model="ruleForm.experience" maxlength="100" placeholder="请输入内容" show-word-limit
              type="textarea" />
          </el-form-item>
          <el-form-item label="目标/期望" prop="expectation">
            <el-input v-model="ruleForm.expectation" maxlength="100" placeholder="请输入内容" show-word-limit
              type="textarea" />
          </el-form-item>
          <el-form-item label="补充说明" prop="other">
            <el-input v-model="ruleForm.other" maxlength="100" placeholder="请输入内容" show-word-limit type="textarea" />
          </el-form-item>
          <template v-if="detailInfo.project.isWorks === 'Y'">
            <el-form-item label="上传图片作品">
              <div class="flex flex-wrap gap-3">
                <img class="size-[100px] object-container bg-gray-200" v-for="(pic, index) in ruleForm.imgList"
                  :key="index" :src="pic" alt="">
              </div>
              <div class="block w-full mt-3"></div>
              <div class="relative">
                <UInput type="file" size="sm" icon="i-heroicons-folder" />
                <input class="cursor-pointer bg-red-600 w-full h-full opacity-0 absolute top-0 left-0" type="file"
                  accept="image/*" @change="handleFileChange($event, 'img')">
              </div>
            </el-form-item>
            <el-form-item label="上传视频作品">
              <div class="relative">
                <UInput type="file" size="sm" icon="i-heroicons-folder" />
                <input class="cursor-pointer bg-red-600 w-full h-full opacity-0 absolute top-0 left-0" type="file"
                  accept="video/*" @change="handleFileChange($event, 'video')">
              </div>
            </el-form-item>
          </template>
        </el-form>

        <div class="grid grid-cols-2 gap-4">
          <UButton size="md" block color="rose" @click="submitForm(ruleFormRef)" label="报名" />
          <UButton size="md" block color="gray" @click="resetForm(ruleFormRef)" label="重置" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Minus, Plus } from "@element-plus/icons-vue";

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);
await userInfoStore.getUserInfo().then(res => {
  if(res.code !== 200) {
    navigateTo("/login");
  }
});

const route = useRoute();
const toast = useToast();
const {public: {apiBase}} = useRuntimeConfig();

const appStoreInfo = useAppStoreInfo();
const {detailInfo} = storeToRefs(appStoreInfo);
const {getContestDetail} = appStoreInfo;

const contestId = route.params.id;
await getContestDetail({id: contestId });

const ruleFormRef = ref();
const ruleForm = reactive({
  nickName: "",
  phoneNumber: "",
  email: "",
  sex: "",
  teamType: "",
  introduce: "",
  experience: "",
  expectation: "",
  other: "",
  imgList: [],
  videoList: [],
});
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "change" }],
  phoneNumber: [
    { required: true, message: "请输入手机号", trigger: "change" },
    { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确", trigger: "change" },
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "change" },
    { type: "email", message: "邮箱格式不正确", trigger: ["blur", "change"] },
  ],
  sex: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change",
    },
  ],
  teamType: [
    {
      required: true,
      message: "请选择类型",
      trigger: "change",
    },
  ],
  introduce: [{ required: true, message: "请输入内容", trigger: "change" }],
  experience: [{ required: true, message: "请输入内容", trigger: "change" }],
  expectation: [{ required: true, message: "请输入内容", trigger: "change" }],
  other: [{ required: true, message: "请输入内容", trigger: "change" }],
};
const typeOptions = [
  { label: "个人性质", value: 0 },
  { label: "单位性质", value: 1 },
];

const paramsInfo = computed(() => {
  const userId = userInfo?.value?.userId
  const { projectId, contestId, cityId, beginTime, endTime } = detailInfo.value || {};
  const { imgList, videoList, ...formInfo } = ruleForm;
  return {
    userId,
    ...formInfo,
    worksPic: imgList.join(','),
    worksVideo: videoList.join(','),
    ...{ projectId, contestId, cityId, beginTime, endTime },
    // ...{
    //   phonenumber: '',
    //   signupId: null,
    //   createBy: null,
    //   createTime: null,
    //   updateBy: null,
    //   updateTime: null,
    // }
  }
});

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

const handleFileChange = async (e, type) => {
  const token = useCookie("token");
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  const result = await $fetch(`${apiBase}/common/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    body: formData,
  }).catch((err) => err.data);
  const { code, url } = result;
  if (code === 200) {
    if (type === 'img') {
      ruleForm.imgList = [...ruleForm.imgList, url];
    }
    if (type === 'video') {
      ruleForm.videoList = [...ruleForm.videoList, url];
    }
  }
}

const submitForm = async formEl => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const token = useCookie("token");
      const result = await $fetch(`${apiBase}/system/signup`, {
        method: "POST",
        body: paramsInfo.value,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      const { code } = result || {};
      if (code === 200) {
        toast.add({
          timeout: 0,
          color: "lime",
          // icon: "i-heroicons-check-circle",
          title: '提示',
          description: '您已经报名成功了！',
          actions: [
            {
              variant: 'solid', color: 'red', label: '知道了',
              click: () => {
                navigateTo('/join');
              }
            },
            // {
            //   variant: 'outline', color: 'red', label: '取消',
            //   click: () => { }
            // }
          ],
          callback: () => {
            console.log(999)
          }
        });
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

const handleJumpTo = () => {
  navigateTo(`/join/${contestId}`);
}
</script>

<style lang="scss" scoped></style>
