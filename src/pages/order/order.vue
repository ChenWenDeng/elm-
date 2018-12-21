<template>
    <div class="order--page">
        <headerTop title="订单列表">
            <router-link class="header_search" slot="left" to="/msite">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <section class="header_login" slot="right"> 
            </section>
        </headerTop>
        <section class="order-no-login">
            <img src="http://img5.imgtn.bdimg.com/it/u=488869050,2484180533&fm=26&gp=0.jpg" alt="">
            <h3>登录后查看外卖订单</h3>
            <router-link to="/profile" tag="button">
                立即登录
            </router-link>
        </section>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
export default {
    name: 'order',
    components:{
        headerTop
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .order--page{
        .order-no-login{
            padding-top: 8.75rem;
            width: 60%;
            margin: 0 auto;
            text-align: center;
            >img{
                display: block;
                width: 100%;
                height: 30%;
            }
            >h3{
                padding: 0.625rem 0;
                font-size: 1.0625rem;
                color: #6a6a6a;
            }
            >button{
                display: inline-block;
                background-color: $yellow;
                font-size: 0.875rem;
                color: #fff;
                border: 0;
                outline: none;
                border-radius: 0.3125rem;
                padding: 10px 1.25rem;
            }
        }
    }
</style>


