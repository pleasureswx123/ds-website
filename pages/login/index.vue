<template>
  <div class="login-container">
    <el-card class="m-auto" style="max-width: 500px">
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="params" label-position="top" :rules="rules"
        label-width="auto" class="demo-ruleForm" size="large" require-asterisk-position="left"
        :hide-required-asterisk="true" :scroll-to-error="true">
        <el-form-item prop="username">
          <el-input v-model="params.username" placeholder="手机号">
            <template #prefix>
              <Icon name="fluent:person-circle-20-filled" color="#a2a2a2" size="25" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="params.password" :type="eyeStatus ? 'text' : 'password'" autocomplete="off"
            placeholder="密码">
            <template #prefix>
              <Icon name="fluent:lock-closed-20-filled" color="#a2a2a2" size="25" />
            </template>
            <template #suffix>
              <span class="cursor-pointer" @click="eyeStatus = !eyeStatus">
                <Icon v-if="!eyeStatus" name="el:eye-close" color="#a2a2a2" size="20" />
                <Icon v-else name="el:eye-open" color="#a2a2a2" size="20" />
              </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input class="code-input-box" v-model="params.code" placeholder="验证码">
            <template #prefix>
              <Icon name="fluent:password-20-filled" color="a2a2a2" size="25" />
            </template>
            <template #append>
              <el-image @click="getCaptchaImageInfo" class="w-[100px] border cursor-pointer" :src="captchaImageSrc"
                fit="fill" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <UButton block @click="loginCb">登录</UButton>
    </el-card>
  </div>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core';
const userInfoStore = useUserInfoStore();
const {captchaImageSrc, uuid} = storeToRefs(userInfoStore);
const {getCaptchaImageInfo, loginAction} = userInfoStore;

definePageMeta({
  layout: 'login'
})

const eyeStatus = ref(false);

const ruleFormRef = ref();
const params = reactive({
  username: "",
  password: "",
  code: ""
});
const rules = reactive({
  username: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

const loginParams = computed(() => {
  return {...params, uuid: uuid.value}
})

const debouncedFn = useDebounceFn(() => {
  submitForm();
}, 1000);

const loginCb = () => {
  debouncedFn();
}

const submitForm = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      loginAction(loginParams.value);
    } else {
      console.log("error submit!", fields);
    }
  });
};

getCaptchaImageInfo();
</script>

<style lang="scss" scoped>
.login-container {
  background: url("~/assets/images/temp_login2.jpeg") no-repeat center center;
  background-size: cover;
  @apply min-h-full flex items-center justify-center py-4;
}

.login-box {
  @apply bg-white w-[500px] p-10 rounded-lg shadow-lg;
}

:deep(.code-input-box) {
  .el-input-group__append {
    padding: 0;
    border: none;
    outline: none;
    user-select: none;
  }
}
</style>
