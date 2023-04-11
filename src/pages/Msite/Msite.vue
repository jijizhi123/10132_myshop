<template>
  <section class="msite">
    <!--首页头部-->
    <headerTop :title="address.name">
      <RouterLink class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </RouterLink>
      <RouterLink class="header_login" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-geren"></i>
        </span>
      </RouterLink>
    </headerTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="category.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories, index) in categoriesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categories" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl + category.image_url">
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shopList></shopList>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import headerTop from '../../components/headerTop/headerTop.vue';
import shopList from '../../components/shopList/shopList.vue';
import Swiper, { Pagination } from 'swiper'
import "swiper/swiper-bundle.min.css"
import { RouterLink } from 'vue-router';
Swiper.use(Pagination)
export default {
  data() {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted() {
    this.$store.dispatch('getCategory')
    this.$store.dispatch('getShops')
  },
  components: {
    headerTop,
    shopList,
    RouterLink
  },
  computed: {
    ...mapState(['address', 'category', 'userInfo']),
    //根据category一维数组生成一个二维数组categoriesArr，小数组中最大元素个数是8
    categoriesArr() {
      const { category } = this
      //准备空二维
      const arr = []
      let minArr = []
      category.forEach(element => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(element)
      });
      return arr
    }
  },
  watch: {
    category(value) {
      this.$nextTick(() => { //一旦界面更新，立即调用(此条语句写在数据更新之后)
        //创建一个swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          loop: true,//可以循环轮播
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
        overflow hidden
        width 100%
        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap
                        .link_to_food
                          width 25%
                          .food_container
                            display block
                            width 100%
                            text-align center
                            padding-bottom 10px
                            font-size 0
                            img
                              display inline-block
                              width 50px
                              height 50px
                          span
                            display block
                            width 100%
                            text-align center
                            font-size 13px
                            color #666
                .swiper-pagination
                  >span.swiper-pagination-bullet-active
                    background #02a774
        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
                padding 10px 10px 0
                .shop_icon
                    margin-left 5px
                    color #999
                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px
</style>