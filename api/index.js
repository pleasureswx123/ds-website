import fetchUtils from "./fetchUtils.js";

export default {
  getCaptchaImageInfo: () => fetchUtils.get('/captchaImage'),
  loginAction: (params = {}) => fetchUtils.post('/login', params),
  getUserInfo: () => fetchUtils.get('/getInfo', {}, {auth: true}),
  logoutAction: () => fetchUtils.post('/logout', {}, {auth: true}),
  registerAction: (params) => fetchUtils.post('/register', params),

  getProjectList: (params = {}) => fetchUtils.get('/system/project/list', {pageNum: 1, pageSize: 10, ...params}),
  getProjectDetail: (id) => fetchUtils.get(`/system/project/${id}`),
  getContestList: (params = {}) => fetchUtils.get('/system/contest/list', {pageNum: 1, pageSize: 10, ...params}),
  getContestDetail: (id) => fetchUtils.get(`/system/contest/${id}`),
  getNotificationList: (params = {}) => fetchUtils.get('/system/notification/list', {pageNum: 1, pageSize: 10, ...params}),
  getNotificationDetail: (id) => fetchUtils.get(`/system/notification/${id}`),
  getBroadcastList: (params = {}) => fetchUtils.get('/system/broadcast/list', {pageNum: 1, pageSize: 10, ...params}),
  getBroadcastDetail: (id) => fetchUtils.get(`/system/broadcast/${id}`),
}