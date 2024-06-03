import fetchApi from '~/api';
import { useLocalStorage } from "@vueuse/core";

const {public: { apiBase }} = useRuntimeConfig();

export const useTokenStore = defineStore("tokenStore", () => {
  const token = useCookie('ds_token', {
    maxAge: 7 * 24 * 60 * 60 // 一周的秒数
  });
  const tokenValue = ref(token.value);
  const setToken = (value) => {
    token.value = value;
    tokenValue.value = value;
  };
  return {
    tokenValue,
    setToken
  };
})

export const useUserInfoStore = defineStore("userInfo", () => {
  const tokenStore = useTokenStore();
  const {setToken} = tokenStore;
  const {tokenValue} = storeToRefs(tokenStore);

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
  const userInfo = ref(null);
  const getCaptchaImageInfo = async () => {
    const result = await fetchApi.getCaptchaImageInfo();
    if (result.code === 200) {
      const {img, uuid} = result || {};
      captchaImageInfo.img = `data:image/gif;base64,${img}`;
      captchaImageInfo.uuid = uuid;
      return result;
    }
  }
  const logoutAction = async () => {
    const result = await fetchApi.logoutAction()
    if(result.code === 200) {
      setToken('');
      userInfo.value = null;
      navigateTo("/");
    }
  }
  const loginAction = async (params) => {
    const result = await fetchApi.loginAction(params);
    const { code, msg, token } = result;
    if (code === 200) {
      setToken(token);
      // refreshCookie("ds_token");
      await getUserInfo();
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
    const result = await fetchApi.getUserInfo();
    if(result.code === 200) {
      userInfo.value = result?.user || {};
    } else {
      userInfo.value = null;
    }
    return result;
  }

  const registerAction = async (params) => {
    const result = await fetchApi.registerAction(params);
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
    getCaptchaImageInfo, loginAction, logoutAction, getUserInfo, registerAction,
  };
});

export const useAppStoreInfo = defineStore("appStoreInfo", () => {
  const projectList = ref([]);
  const contestList = ref([]);
  const detailInfo = ref(null);
  const router = useRouter();
  const getProjectList = async (params) => {
    const result = await fetchApi.getProjectList(params);
    if (result.code === 200) {
      projectList.value = result?.rows;
      return result?.rows;
    }
  }
  const getProjectDetail = async ({ id } = {}) => {
    const result = await fetchApi.getProjectDetail(id);
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getContestList = async (params) => {
    const result = await fetchApi.getContestList(params);
    if (result.code === 200) {
      const resData = result?.rows || [];
      contestList.value = resData;
      return resData;
    }
  }
  const getContestDetail = async ({ id } = {}) => {
    const result = await fetchApi.getContestDetail(id);
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getNotificationList = async (params) => {
    const result = await fetchApi.getNotificationList(params);
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getNotificationDetail = async ({ id } = {}) => {
    const result = await fetchApi.getNotificationDetail(id);
    if (result.code === 200) {
      detailInfo.value = result?.data;
      return result?.data;
    }
  }
  const getBroadcastList = async (params) => {
    const result = await fetchApi.getBroadcastList(params);
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getBroadcastDetail = async ({ id } = {}) => {
    const result = await fetchApi.getBroadcastDetail(id);
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
