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
