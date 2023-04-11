/*
包含多个接口请求函数的模块
函数返回值：Promise对象
*/
import ajax from "./ajax";
// const BASE_URL='http://localhost:4000'
const BASE_URL='/api'

//1.根据经纬度获取地理位置
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
//2.获取食物分类列表
export const reqFoodCategory=()=>ajax(BASE_URL+'/index_category')
//3.根据经纬度获取商家列表
export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})
//根据经纬度和关键字搜索商家列表
export const reqSearchShop=(geohash,keyword)=>ajax(BASE_URL+'/search_shops',{geohash,keyword})
//用户名密码登陆
export const reqPwdLogin=({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
//发送短信验证码
export const reqSendCode=(phone)=>ajax(BASE_URL+'/sendcode',{phone})
//手机号验证码登陆
export const reqSms=(phone,code)=>ajax(BASE_URL+'/login_sms',{phone,code},'POST')
//获取用户信息
export const reqUserInfo=()=>ajax(BASE_URL+'/userinfo')
//用户登出
export const reqLogout=()=>ajax(BASE_URL+'/logout')

/**
* 获取商家信息
*/
export const reqShopInfo = () => ajax('/info')
/**
* 获取商家评价数组
*/
export const reqShopRatings = () => ajax('/ratings')
/**
* 获取商家商品数组
*/
export const reqShopGoods = () => ajax('/goods')