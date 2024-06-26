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
        <el-form-item prop="confirmPassword">
          <el-input v-model="params.confirmPassword" :type="confirmEyeStatus ? 'text' : 'password'" autocomplete="off"
            placeholder="确认密码">
            <template #prefix>
              <Icon name="fluent:lock-closed-20-filled" color="#a2a2a2" size="25" />
            </template>
            <template #suffix>
              <span class="cursor-pointer" @click="confirmEyeStatus = !confirmEyeStatus">
                <Icon v-if="!confirmEyeStatus" name="el:eye-close" color="#a2a2a2" size="20" />
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

      <UButton block @click="registerCb">注册</UButton>
    </el-card>
  </div>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core';
import {computed} from "vue";
const userInfoStore = useUserInfoStore();
const {captchaImageSrc, uuid} = storeToRefs(userInfoStore);
const {getCaptchaImageInfo, registerAction} = userInfoStore;

getCaptchaImageInfo()

definePageMeta({
  layout: 'login'
})

const ruleFormRef = ref();
const eyeStatus = ref(false);
const confirmEyeStatus = ref(false);
const params = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  code: ""
});

const registerParams = computed(() => {
  return {...params, uuid: uuid.value}
})

const validatePhone = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入手机号"));
  } else if (!/^1[3-9]\d{9}$/.test(value)) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
};
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (!/^[\w!@#$%\^&*\(\)-\/]{8,}$/.test(value)) {
    callback(new Error("密码长度最少8位"));
  } else {
    if (ruleFormRef.confirmPassword !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("confirmPassword", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== params.password) {
    callback(new Error("不一致, 请重新输入"));
  } else {
    callback();
  }
};
const rules = reactive({
  username: [{ required: true, validator: validatePhone, message: "请输入手机号", trigger: "blur" }],
  password: [{required: true, validator: validatePass, trigger: "blur"}],
  confirmPassword: [{required: true, validator: validatePass2, trigger: "blur"}],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

const submitForm = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      registerAction(registerParams.value);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const debouncedFn = useDebounceFn(() => {
  submitForm();
}, 1000);

const registerCb = () => {
  debouncedFn();
}

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
