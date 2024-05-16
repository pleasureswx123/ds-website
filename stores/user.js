import { useLocalStorage } from "@vueuse/core";

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
  return {
    user,
    setUserInfo,
  };
});

export const useAppStoreInfo = defineStore("appStoreInfo", () => {
  const { baseApi } = useAppConfig();
  const projectList = ref([]);
  const router = useRouter();
  const getProjectList = async ({ pageNum = 1, pageSize = 10 } = {}) => {
    const result = await $fetch(`${baseApi}/system/project/list?pageNum=${pageNum}&pageSize=${pageSize}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return projectList.value = result?.rows;
    }
  }
  const getContestList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${baseApi}/system/contest/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getNotificationList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${baseApi}/system/notification/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const getBroadcastList = async ({ pageNum = 1, pageSize = 10, projectId = '' } = {}) => {
    const result = await $fetch(`${baseApi}/system/broadcast/list?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`).catch((err) => {
      console.log(err);
    });
    if (result.code === 200) {
      return result?.rows;
    }
  }
  const jumpPath = (path) => {
    path && router.push(path);
  }
  return {jumpPath, baseApi, projectList, getProjectList, getContestList, getNotificationList, getBroadcastList}
})
