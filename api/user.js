export default {
  getCaptchaImage: () =>
    useFetch("http://www.zgwtds.cn/app/v1/captchaImage"),
};
