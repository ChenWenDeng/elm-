<template>
    <div class="msite">
        <headerTop :title="address.name">
            <router-link class="header_search" slot="left" to="/search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'">
                <span v-if="!userInfo._id">登录|注册</span>
                <span v-else>
                   <i class="iconfont icon-geren2"></i> 
                </span>
            </router-link>
        </headerTop>
        <swiper/>
        <div class="msite-shop-list">
            <div class="shop-header">
                <i class="iconfont icon-xuanxiang shop-icon"></i>
                <span class="shop-header-title">附近商家</span>
            </div>
            <shopList/>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import headerTop from '../../components/headerTop/headerTop'
import swiper from '../../components/swiper/swiper'
import shopList from '../../components/shopList/shopList'
export default {
    name: 'msite',
    components:{
        headerTop,
        swiper,
        shopList
    },
    computed:{
        ...mapState(['address','userInfo'])
    },
    mounted(){
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .msite{
        background-color: $bc;
        .msite-shop-list{
        margin-top: 0.625rem;
        background-color: $fc;
        border-top: 0.025rem solid $line;
        .shop-header{
            padding: 0.625rem 0.625rem ;
            .shop-icon{
                margin-left: 0.3125rem;
                color: #999;
                font-size: 0.875rem;
            }
            .shop-header-title{
                color: #999;
                font-size: 0.875rem;
                line-height: 0.875rem;
            }
        }
    }
    }

</style>


