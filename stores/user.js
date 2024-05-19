import { useLocalStorage } from "@vueuse/core";

const {
  public: { apiBase },
} = useRuntimeConfig();

export const useUserInfoStore = defineStore("userInfo", () => {
  const userData = useLocalStorage("user", "");
  const state = reactive({
    user: userData.value ? JSON.parse(userData.value) : "",
  });
  const user = computed(() => state.user);
  function setUserInfo(user = "") {
    userData.value = user ? JSON.stringify(user) : "";
    state.user = user;
  }

  const captchaImageInfo = reactive({
    img: '', uuid: ''
  });
  const captchaImageSrc = computed(() => captchaImageInfo.img)
  const uuid = computed(() => captchaImageInfo.uuid)
  const token = useCookie('token');
  token.value = token.value || '';
  const userInfo = ref(null);
  const getCaptchaImageInfo = async () => {
    const result = await $fetch(`${apiBase}/captchaImage`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      const {img, uuid} = result || {};
      captchaImageInfo.img = `data:image/gif;base64,${img}`;
      captchaImageInfo.uuid = uuid;
      return result;
    }
  }
  const logoutAction = async () => {
    const result = await $fetch(`${apiBase}/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).catch(err => {
      console.log(err)
    });
    if(result.code === 200) {
      token.value = '';
      userInfo.value = null;
      navigateTo("/");
    }
  }
  const loginAction = async (params) => {
    debugger
    const result = await $fetch(`${apiBase}/login`, {
      method: 'POST', body: params || {}
    }).catch((err) => {
      console.log(err);
    });
    const { code, msg, token: newToken } = result;
    if (code === 200) {
      token.value = newToken;
      debugger
      // refreshCookie("token");
      await getLoginUserInfo();
      ElMessage({
        message: msg,
        type: "success",
        plain: true,
      });
      navigateTo("/");
      return result;
    } else {
      ElMessage({
        message: msg,
        type: "error",
        plain: true,
      });
      getCaptchaImageInfo();
    }
  }

  const getUserInfo = async () => {
    const result = await $fetch(`${apiBase}/getInfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).catch((err) => {
      console.log(err);
    });
    if(result.code === 200) {
      userInfo.value = result?.user || {};
    } else {
      userInfo.value = null;
    }
    return result;
  }

  const getLoginUserInfo = async () => {
    debugger
    const result = await getUserInfo();
    debugger
    if(result.code === 200) {
      // 排除 admin sww
      if(['admin', 'sww'].includes(result?.user?.username) || result?.user?.admin) {
        return
      }
      await setUserRoles({...(result.user || {}), "roleIds": [100]});
    }
  }

  const setUserRoles = async (params) => {
    debugger
    const result = await $fetch(`${apiBase}/system/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: params
    }).catch((err) => {
      console.log(err);
    });
    if(result.code === 200) {
      getUserInfo();
    }
  }

  const registerAction = async (params) => {
    const result = await $fetch(`${apiBase}/register`, {
      method: "POST", body: params
    });
    const { code, msg } = result;
    if (code === 200) {
      ElMessageBox.confirm("恭喜注册成功！", "提示", {
        confirmButtonText: "去登录",
        center: true,
        closeOnClickModal: false,
        showClose: false,
        showCancelButton: false,
      }).then(() => {
        navigateTo("/login");
      }).catch(() => {
      });
    } else {
      ElMessage({
        message: msg,
        type: "error",
        plain: true,
      });
      getCaptchaImageInfo();
    }
  };

  return {
    user,
    setUserInfo,
    apiBase, captchaImageInfo, captchaImageSrc, uuid, userInfo,
    getCaptchaImageInfo, loginAction, logoutAction, getUserInfo, setUserRoles, registerAction,
  };
});

export const useAppStoreInfo = defineStore("appStoreInfo", () => {
  const projectList = ref([]);
  const contestList = ref([]);
  const detailInfo = ref(null);
  const router = useRouter();
  const getProjectList = async ({ pageNum = 1, pageSize = 10 } = {}) => {
    const result = await $fetch(`${apiBase}/system/project/list?pageNum=${pageNum}&pageSize=${pageSize}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      projectList.value = result?.rows;
      return result?.rows;
    }
  }
  const getProjectDetail = async ({ id } = {}) => {
    const result = await $fetch(`${apiBase}/system/project/${id}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getContestList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${apiBase}/system/contest/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      const resData = result?.rows || [];
      contestList.value = resData;
      return resData;
    }
  }
  const getContestDetail = async ({ id } = {}) => {
    const result = await $fetch(`${apiBase}/system/contest/${id}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getNotificationList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${apiBase}/system/notification/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getNotificationDetail = async ({ id } = {}) => {
    const result = await $fetch(`${apiBase}/system/notification/${id}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getBroadcastList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${apiBase}/system/broadcast/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getBroadcastDetail = async ({ id } = {}) => {
    const result = await $fetch(`${apiBase}/system/broadcast/${id}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const jumpPath = (path) => {
    path && router.push(path);
  }
  return {
    jumpPath, apiBase, projectList, contestList, detailInfo,
    getProjectList, getContestList, getNotificationList, getBroadcastList,
    getProjectDetail, getContestDetail, getNotificationDetail, getBroadcastDetail,
  }
})
