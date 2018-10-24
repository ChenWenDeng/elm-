<template>
    <div class="order--page">
        <header class="head_top">
            <section class="header_search">
                <i class="iconfont icon-right2"></i>
            </section>
            <section class="header_text">
                <span>订单列表</span>
            </section>
            <section class="header_login"> 
            </section>
        </header>
        <section class="order-no-login">
            <img src="http://img5.imgtn.bdimg.com/it/u=488869050,2484180533&fm=26&gp=0.jpg" alt="">
            <h3>登录后查看外卖订单</h3>
            <button>立即登录</button>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .order--page{
        .head_top{
            background-color: $yellow;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            @include wh(100%, 2.5rem);
            .header_search{
                display: flex;
                align-items: center;
                //justify-content: center;
                @include wh(5rem,2.5rem);
                @include sc(1rem, #fff);
                padding-left: 0.625rem;
            }
            .header_text{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                @include sc(1rem, #fff);
            }
            .header_login{
                @include wh(5rem,2.5rem);
                display: flex;
                justify-content: center;
                align-items: center;
                @include sc(1rem, #fff);
            }
        }
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


