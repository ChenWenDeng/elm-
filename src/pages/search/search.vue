<template>
    <div class="search-page">
        <headerTop title="搜索">
            <section class="header_search" slot="left">
                <i class="iconfont icon-right2"></i>
            </section>
            <section class="header_login" slot="right">
            </section>
        </headerTop>
        <form class="search-form">
            <input type="search" class="search-input" placeholder="请输入商家或美食名称">
            <input type="submit" class="search-submit">
        </form>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
export default {
    name: 'search',
    components:{
        headerTop
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';

    .search-page{
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
                outline: none;
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
                outline: none;
            }
        }
    }
</style>


