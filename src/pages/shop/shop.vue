<template>
    <div>
        <shopHeader></shopHeader>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/shop/goods" replace>点餐</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/ratings" replace>评价</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/info" replace>商家</router-link>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import shopHeader from '../../components/shopHeader/shopHeader'
export default {
    components:{
        shopHeader
    },
    mounted(){
        this.$store.dispatch('getShopInfo')
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .tab{
        @include wh(100%, 2.5rem);
        line-height: 2.5rem;
        background: #fff;
        border-bottom: 0.0625rem solid #eee;
        .tab-item{
            float: left;
            width: 33.3333%;
            text-align: center;
            font-size: 0.875rem;
            color: rgb(77, 85, 93);
            a{
                display: block;
                position: relative;
                &.router-link-active{
                    color: $yellow;
                    &::after{
                        content: '';
                        position: absolute;
                        left: 50%;
                        bottom: 1px;
                        width:35px;
                        height: 2px;
                        transform:translateX(-50%);
                        background: $yellow;
                    }
                }
            }
        }
    }
</style>
