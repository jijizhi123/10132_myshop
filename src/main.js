import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from "./router"
import store from "./store"
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'

//注册全局组件标签
Vue.component(Button.name,Button)
Vue.use(VueLazyload,{//内部自定义了一个指令lazy
    loading
})

new Vue({
    el:'#app',
    render:h=>h(App),
    router,
    store,
})