<template>
    <div class="rating-page">
        <headerTop title="选择发票">
           <router-link class="header_search" slot="left" to="/confirmOrder">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <div class="header_login" slot="right" to="/msite">
            </div>
        </headerTop>
        <section class="choose_invoice">
            <span>不需要开发票</span>
            <i class="iconfont icon-duigou"></i>
        </section>
        <div class="determine">确定</div>
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
.rating-page{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    padding: 0.625rem 0;
    background: #f3f3f3;
    .choose_invoice{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin:40px 0 10px 0;
        padding:25px 15px;
        background: #fff;
        .icon-duigou{
            font-size: 20px;
        }
    }
    .determine{
        background-color: #00b43c;
        @include sc(1rem, #fff);
        text-align: center;
        margin: 0 .7rem;
        line-height: 2.3rem;
        border-radius: 0.2rem;
    }
}
</style>
