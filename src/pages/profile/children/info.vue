<template>
    <div class="rating_page">
        <headerTop title="账户信息">
            <router-link class="header_search" slot="left" to="/profile">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <section class="header_login" slot="right"> 
            </section>
        </headerTop>
        <section class="profile-info">
            <section class="headportrait">
                <h2>头像</h2>
                <div class="headportrait-div">
                    <img src="http://img3.imgtn.bdimg.com/it/u=3438244871,2717690534&fm=26&gp=0.jpg" alt="">
                    <i class="iconfont icon-right"></i>
                </div>
            </section>
            <router-link tag="section" to="/profile/info/setusername" class="headportrait">
                <h2>用户名</h2>
                <div class="headportrait-div">
                    <p></p>
                    <i class="iconfont icon-right"></i>
                </div>
            </router-link>
            <section class="headportrait">

                <h2>收货地址</h2>
                <div class="headportrait-div">
                    <p></p>
                    <i class="iconfont icon-right"></i>
                </div>
            </section>
        </section>
        <section class="profile-info">
            <p class="title-p">收货地址</p>
            <section class="headportrait">
                <span>
                    <i class="iconfont icon-shouji"></i>
                    手机
                </span>
                <div class="headportrait-div">
                    <p></p>
                    <i class="iconfont icon-right"></i>
                </div>
            </section>
        </section>
        <section class="profile-info">
            <p class="title-p">安全设置</p>
            <section class="headportrait">
                <span>
                    登录密码
                </span>
                <div class="headportrait-div">
                    <p>修改</p>
                    <i class="iconfont icon-right"></i>
                </div>
            </section>
        </section>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import headerTop from '../../../components/headerTop/headerTop'
export default {
    components:{
        headerTop
    }
}
</script>

<style lang="scss" scoped>
@import '.~styles/mixin.scss';
.rating_page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 202;
    padding-top: 2.5rem;
    .profile-info{
        width: 100%;
        padding: 0.625rem 0;
        .headportrait{
            justify-content: space-between;
            display: flex;
            padding: 0.9375rem 0.5rem;
            border-bottom: 0.0625rem solid #ccc;
            background: #fff;
            text-align: left;
            h2{
                @include sc(0.9375rem,#333);
                font-weight:500;
                display:flex;
                align-items:center;
            }
            .headportrait-div{
                width: 70%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                img{
                    width: 3rem; 
                    border-radius: 50%;
                }
                .iconfont{
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    font-size: 1rem;
                    color: #ccc;
                    margin-left: 0.625rem;
                }
                p{
                    color: #999;
                    font-size: 0.9375rem;
                }
            }
        }
        .title-p{
            padding: 0 0 0.4rem 0.5rem;
            color: #999;
            font-size: 0.8125rem;
        }
        span{
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            color: #999;
            .iconfont{
                display: inline-block;
                width: 1rem;
                height: 1rem;
                font-size: 1.3rem;
                color: #ccc;
                margin-bottom: 0.2rem;
                margin-right: 0.3rem;
            }
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
}
</style>
