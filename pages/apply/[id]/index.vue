<template>
  <div class="container p-8 m-auto">
    <div class="flex gap-8 md:flex-row flex-col" v-if="detailInfo">
      <div class="md:w-2/5 w-full  text-gray-600 body-font shrink-0">
        <img class="w-full h-60 object-cover object-center rounded" :src="baseApi + detailInfo.thumbnail"
          alt="thumbnail">
        <div class="py-6 px-3">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{
            detailInfo.project.projectName }}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ detailInfo.name }}</h1>
          <p class="leading-relaxed mb-3 line-clamp-10 text-ellipsis text-justify">{{ detailInfo.content }}</p>
          <div class="flex items-center flex-wrap ">
            <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">查看详情
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
      <div class="grow">
        <div class="body-font text-gray-900 font-medium text-2xl">
          <div>项目名称：{{ detailInfo.project.projectName }}</div>
          <div>大赛名称：{{ detailInfo.name }}</div>
          <div>比赛城市：{{ detailInfo.cityId }}</div>
          <div>比赛时间：{{ detailInfo.createTime }} - {{ detailInfo.endTime }}</div>
        </div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="demo-ruleForm"
          :size="formSize" status-icon :scroll-to-error="true">
          <el-form-item label="姓名" prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入姓名" />
          </el-form-item>

          <el-form-item label="年龄" prop="age">
            <el-input-number v-model.number="ruleForm.age" :min="18" :max="100" :step="1" step-strictly
              controls-position="right"><template #decrease-icon>
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

          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="ruleForm.gender">
              <el-radio value="1">男</el-radio>
              <el-radio value="2">女</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>

          <el-form-item label="类型" prop="type">
            <el-segmented v-model="ruleForm.type" :options="typeOptions" />
          </el-form-item>
          <el-form-item label="个人介绍" prop="desc1">
            <el-input v-model="ruleForm.desc1" maxlength="100" placeholder="请输入内容" show-word-limit type="textarea" />
          </el-form-item>
          <el-form-item label="比赛经验" prop="desc2">
            <el-input v-model="ruleForm.desc2" maxlength="100" placeholder="请输入内容" show-word-limit type="textarea" />
          </el-form-item>
          <el-form-item label="目标/期望" prop="desc3">
            <el-input v-model="ruleForm.desc3" maxlength="100" placeholder="请输入内容" show-word-limit type="textarea" />
          </el-form-item>
          <el-form-item label="补充说明" prop="desc4">
            <el-input v-model="ruleForm.desc4" maxlength="100" placeholder="请输入内容" show-word-limit type="textarea" />
          </el-form-item>

          <!-- <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item> -->
        </el-form>

        <el-button type="primary" @click="submitForm(ruleFormRef)">
          报名
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Minus, Plus } from "@element-plus/icons-vue";
const ruleFormRef = ref();
const formSize = ref("default");
const ruleForm = reactive({
  username: "",
  phoneNumber: "",
  email: "",
  delivery: false,
  gender: "",
  type: "",
  desc1: "",
  desc2: "",
  desc3: "",
  desc4: "",
});
const paramsInfo = computed(() => {
  const { projectId, projectName, contestId, name, cityId, createTime, endTime } = detailInfo || {};
  return { ...resetForm, ...{ projectId, projectName, contestId, name, cityId, createTime, endTime } }
})
const typeOptions = [
  { label: "个人性质", value: 1 },
  { label: "单位性质", value: 2 },
];
const rules = reactive({
  username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  phoneNumber: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确", trigger: "blur" },
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "邮箱格式不正确", trigger: ["blur", "change"] },
  ],
  gender: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change",
    },
  ],
  type: [
    {
      required: true,
      message: "请选择类型",
      trigger: "change",
    },
  ],
  desc1: [{ required: true, message: "请输入内容", trigger: "blur" }],
});
const submitForm = async formEl => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};


const route = useRoute();
const { baseApi } = useAppConfig();

const token = useCookie("token");
const curToken = computed(() => {
  return token.value;
});
const detailInfo = ref(null);


const contestId = route.params.id;
const projectId = ref();


const getDetail = async (id) => {
  const result = await $fetch(
    `${baseApi}/system/contest/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${curToken.value}`,
      },
    },
  );
  const { code, data } = result || {};
  if (code === 200) {
    detailInfo.value = data;
    projectId.value = data.projectId;
  }
}

getDetail(contestId);



</script>

<style lang="scss" scoped></style>
