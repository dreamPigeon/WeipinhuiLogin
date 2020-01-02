/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

//发送短信验证码
export const  reqSendCode = (phone) => ajax.get('/sendcode', {
  params: {
    phone
  }
})

//用户名密码登录
export const reqPwdLogin = ({name, pwd}) => ajax.post('/login_pwd', {name, pwd})

//用手机号验证码登录
export const reqSmsLogin = ({phone, code}) => ajax.post('/login_sms', {phone, code})

//自动登陆
export const reqAutoLogin = () => ajax.get('/auto_login')