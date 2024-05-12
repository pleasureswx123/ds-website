<template>
  <div class="login-container">
    <el-card class="m-auto" style="max-width: 500px">
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="params" label-position="top" :rules="rules"
        label-width="auto" class="demo-ruleForm" size="large" require-asterisk-position="left"
        :hide-required-asterisk="true" :scroll-to-error="true">
        <el-form-item prop="username">
          <el-input v-model="params.username" placeholder="账号">
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
              <el-image @click="getCaptchaImageSrc" class="w-[100px] border cursor-pointer" :src="captchaImageSrc"
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
  code: "",
  uuid: "",
});

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
  username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  password: [
    {
      required: true,
      validator: validatePass,
      trigger: ["blur", "change"],
    },
  ],
  confirmPassword: [
    {
      required: true,
      validator: validatePass2,
      trigger: ["blur"],
    },
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

const submitForm = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      handleRegister(toRaw(params));
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

const captchaImageSrc = ref();
const getCaptchaImageSrc = async () => {
  const { data: captchaImageInfo } = await useFetch(
    "https://sports.d.yanlingxinrui.com/app/v1/captchaImage"
  );
  const captcha = toRaw(captchaImageInfo.value);
  captchaImageSrc.value = `data:image/gif;base64,${captcha.img}`;
  params.uuid = captcha.uuid;
};
await getCaptchaImageSrc();

const handleRegister = async (params) => {
  const result = await $fetch(
    "https://sports.d.yanlingxinrui.com/app/v1/register",
    { method: "POST", body: params }
  );
  const { code, msg } = result;
  if (code === 200) {
    ElMessageBox.confirm("恭喜注册成功！", "提示", {
      confirmButtonText: "去登录",
      center: true,
      closeOnClickModal: false,
      showClose: false,
      showCancelButton: false,
    })
      .then(() => {
        navigateTo("/login");
      })
      .catch(() => { });
  } else {
    ElMessage({
      message: msg,
      type: "error",
      plain: true,
    });
    getCaptchaImageSrc();
  }
};
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
