import {useTokenStore} from "~/stores/user.js";
const {public: { apiBase }} = useRuntimeConfig();

const addAuth = (status, options) => {
  if(!!status) {
    const tokenStore = useTokenStore();
    const {tokenValue} = storeToRefs(tokenStore);
    options.headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${tokenValue.value}`
    }
  }
}

export const fetchGet = async (url, params = {},  { auth } = {}) => {
  try {
    const options = {
      method: 'GET',
      params,
    }
    addAuth(auth, options);
    const response = await $fetch(`${apiBase}${url}?_t=${Date.now()}`, options);
    if (response.code !== 200) {
      // ElMessage({
      //   message: response.msg || '请求失败',
      //   type: "error",
      //   plain: true,
      // });
      throw new Error(`请求失败，响应码：${response.code}`);
    }
    return response;
  } catch (error) {
    console.error('GET请求失败:', error);
    throw error;
  }
};

export const fetchPost = async (url, data,  { auth } = {}) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    addAuth(auth, options);
    const response = await $fetch(`${apiBase}${url}?_t=${Date.now()}`, options);
    if (response.code !== 200) {
      ElMessage({
        message: response.msg || '请求失败',
        type: "error",
        plain: true,
      });
      throw new Error(`请求失败，响应码：${response.code}`);
    }
    return response;
  } catch (error) {
    console.error('POST请求失败:', error);
    throw error;
  }
};

export default {
  get: fetchGet,
  post: fetchPost,
}
