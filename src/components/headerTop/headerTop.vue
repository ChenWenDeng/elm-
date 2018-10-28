<template>
    <header class="head_top">
        <slot name="left"></slot>
        <section class="header_text">
            <span class="ellipsis">{{title}}</span>
        </section>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    name:'headerTop',
    props:{
        title: String
    }
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
            >span{
                width: 12.5rem;
                margin: 0 auto;
                padding: 0 0.3125rem;
                text-align: center;
            }
        }
        .header_login{
            @include wh(5rem,2.5rem);
            @include sc(1rem, #fff);
            display: flex;
            //justify-content: center;
            justify-content: flex-end;
            align-items: center;
            padding-right: 0.625rem;
        }
    }
</style>

