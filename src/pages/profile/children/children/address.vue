<template>
    <div class="rating_page">
        <headerTop title="编辑地址">
            <router-link class="header_search" slot="left" to="/profile/info">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <section class="header_login" slot="right"> 
                <span>编辑</span> 
            </section>
        </headerTop>
        <section class="address-container">
            <router-link tag="section" to="/profile/info/address/add" class="headportrait">
                <h2>新增地址</h2>
                <div class="headportrait-div">
                    <p></p>
                    <i class="iconfont icon-right"></i>
                </div>
             </router-link>
        </section>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import headerTop from '../../../../components/headerTop/headerTop'
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
    .address-container{
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
