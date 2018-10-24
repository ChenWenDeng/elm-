<template>
    <div>
        <header class="head_top">
            <section class="header_search">
                <i class="iconfont icon-right2"></i>
            </section>
            <section class="header_text">
                <span>搜索</span>
            </section>
            <section class="header_login"> 
            </section>
        </header>
        <form class="search-form">
            <input type="search" class="search-input" placeholder="请输入商家或美食名称">
            <input type="submit" class="search-submit">
        </form>
    </div>
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
    .search-form{
        margin-top: 2.5rem;
        background: #fff;
        padding: 0.625rem;
        display: flex;
        input{
            height: 2.1875rem;
        }
        .search-input{
            flex: 4;
            border: 0.0625rem solid $line;
            @include sc(0.875rem, #333);
            border-radius: 0.3125rem;
            background-color: #f2f2f2;
            font-weight: bold;
            padding: 0 0.625rem;
        }
        .search-submit{
            flex: 1;
            border: 0.0625rem solid $line;
            margin-left: 0.3125rem;
            @include sc(0.875rem, #fff);
            border-radius: 0.3125rem;
            background-color: $yellow;
            font-weight: bold;
            padding:0 0.3125rem;

        }
    }
</style>


