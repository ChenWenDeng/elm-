<template>
    <header class="head_top">
        <section class="header_search">
            <i class="iconfont icon-sousuo"></i>
        </section>
        <section class="header_text">
            <span>八卦岭宿舍区7栋</span>
        </section>
        <section class="header_login">
           <span>登录</span>|
           <span>注册</span>
        </section>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
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
            justify-content: center;
            @include wh(3.125rem,2.5rem);
            @include sc(1rem, #fff);
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
</style>

