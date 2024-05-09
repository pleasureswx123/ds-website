<template>
  <el-card class="m-auto" style="max-width: 50%">
    <template #header>
      <div class="card-header">
        <span>添加比赛报名</span>
      </div>
    </template>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
      :scroll-to-error="true"
    >
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入项目名称" />
      </el-form-item>
      <el-form-item label="比赛城市" prop="city">
        <el-select v-model="ruleForm.city" placeholder="请选择比赛城市">
          <el-option label="上海" value="上海" />
          <el-option label="北京" value="北京" />
        </el-select>
      </el-form-item>
      <el-form-item prop="date" label="比赛时间">
        <el-date-picker
          v-model="ruleForm.date"
          type="datetimerange"
          format="YYYY-MM-DD HH:mm"
          value-format="YYYY-MM-DD HH:mm"
          range-separator="To"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          style="width: 100%"
        />
      </el-form-item>

      <el-form-item label="姓名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入姓名" />
      </el-form-item>

      <el-form-item label="年龄" prop="age">
        <el-input-number
          v-model="ruleForm.age"
          :min="18"
          :max="100"
          :step="1"
          step-strictly
          controls-position="right"
          ><template #decrease-icon>
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
        <el-input
          v-model="ruleForm.phoneNumber"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>

      <el-form-item label="类型" prop="type">
        <el-segmented v-model="ruleForm.type" :options="typeOptions" />
      </el-form-item>
      <el-form-item label="个人介绍" prop="desc1">
        <el-input
          v-model="ruleForm.desc1"
          maxlength="100"
          placeholder="请输入内容"
          show-word-limit
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="比赛经验" prop="desc2">
        <el-input
          v-model="ruleForm.desc2"
          maxlength="100"
          placeholder="请输入内容"
          show-word-limit
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="目标/期望" prop="desc3">
        <el-input
          v-model="ruleForm.desc3"
          maxlength="100"
          placeholder="请输入内容"
          show-word-limit
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="补充说明" prop="desc4">
        <el-input
          v-model="ruleForm.desc4"
          maxlength="100"
          placeholder="请输入内容"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <!-- <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item> -->
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        报名
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </template>
  </el-card>
</template>

<script setup>
import { Minus, Plus } from "@element-plus/icons-vue";
const ruleFormRef = ref();
const formSize = ref("default");
const ruleForm = reactive({
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  city: "",
  date: "",
  delivery: false,
  gender: "",
  type: "",
  desc1: "",
  desc2: "",
  desc3: "",
  desc4: "",
});
const typeOptions = [
  { label: "个人性质", value: 1 },
  { label: "单位性质", value: 2 },
];
const rules = reactive({
  name: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
    { min: 3, max: 35, message: "Length should be 3 to 35", trigger: "blur" },
  ],
  username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  city: [
    {
      required: true,
      message: "请选择比赛城市",
      trigger: "change",
    },
  ],
  date: [
    {
      type: "date",
      required: true,
      message: "请选择比赛时间",
      trigger: "change",
    },
  ],
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
const submitForm = async (formEl) => {
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
</script>

<style lang="scss" scoped></style>
