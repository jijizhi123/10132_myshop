/*
包含多个接口请求函数的模块
函数返回值：Promise对象
*/
import ajax from "./ajax";

//1.根据经纬度获取地理位置
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
//2.获取食物分类列表
export const reqFoodTypes=()=>ajax('/index_category')
//3.根据经纬度获取商家列表
export const reqShops=(longitude,latitude)=>ajax('/shops',{longitude,latitude})