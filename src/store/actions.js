/*
通过mutations间接更新state的多个方法的对象
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategory,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopGoods,
    reqShopRatings,
    reqSearchShop
} from '../api'
import keywords from 'ajv-keywords'

export default{
    //异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash=state.latitude+','+state.longitude
        const result=await reqAddress(geohash)
        //提交一个mutation
        if(result.code===0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取食品分类
    async getCategory({commit}){
        //发送异步ajax请求
        const result=await reqFoodCategory()
        //提交一个mutation
        if(result.code===0){
            const category=result.data
            commit(RECEIVE_CATEGORY,{category})
        }
    },
    //异步获取商家列表    
    async getShops({commit,state}){
        //发送异步ajax请求
        const {longitude,latitude}=state
        const result=await reqShops(longitude,latitude)
        //提交一个mutation
        if(result.code===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    //同步获取用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    // 异步获取用户信息
    async getUserInfo({commit}){
        const result=await reqUserInfo()
        if(result.code===0){
            const userInfo=result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    //异步登出
    async logout({commit}){
        const result=await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    async getShopInfo({commit}){
        const result=await reqShopInfo()
        if(result.code===0){
            const info=result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    async getShopGoods({commit},callback){
        const result=await reqShopGoods()
        if(result.code===0){
            const goods=result.data
            commit(RECEIVE_GOODS,{goods})
            //数据更新了，通知一下组件
            callback && callback()
        }
    },
    async getShopRatings({commit},callback){
        const result=await reqShopRatings()
        if(result.code===0){
            const ratings=result.data
            commit(RECEIVE_RATINGS,{ratings})
            callback && callback()
        }
    },
    //同步跟新food中的count
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },

    async searchShops({commit,state},keyword){
        //发送异步ajax请求
        const geohash=state.latitude+','+state.longitude
        const result=await reqSearchShop(geohash,keyword)
        //提交一个mutation
        if(result.code===0){
            const searchShops=result.data
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
        }
    },
}