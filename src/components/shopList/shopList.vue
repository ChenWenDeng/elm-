<template>
    <div class="shop-list-container">
        <ul v-if="shops.length">
            <li class="shop-li" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
                <section>
                    <img class="shop-img" :src="shop.image_path">
                </section>
                <section class="shop-right" >
                    <header class="shop-detail-header">
                        <h4 class="shop-title ellipsis">{{shop.name}}</h4>
                        <ul class="shop-detail-ul">
                            <li class="supports" v-for="(support, index) in shop.supports" :key="index">
                                {{support.icon_name}}
                            </li>
                        </ul>
                    </header>
                    <h5 class="rating-order-num">
                        <section class="rating-order-num-left">
                            <section class="rating-section">
                                <star :score="shop.rating" :size="24"></star>
                                <span class="rating-num">{{shop.rating}}</span>
                            </section>
                            <section class="order-section">
                                月售{{shop.recent_order_num}}单
                            </section>
                        </section>
                        <section class="rating-order-num-right">
                            <span class="delivery-style delivery-left">{{shop.delivery_mode.text}}</span>
                            <span class="delivery-style delivery-right">
                                {{shop.supports[1].name}}
                            </span>
                        </section>
                    </h5>
                    <h5 class="fee-distance">
                        <p class="fee">
                            <span class="fee-left">￥{{shop.float_minimum_order_amount}}起送</span>
                            /
                            <span class="fee-right">配送费约￥{{shop.float_delivery_fee}}</span>
                        </p>
                        <p class="distance_time">
                            <span class="distance_time-left">{{shop.distance}}公里</span>
                            /
                            <span class="distance_time-right">{{shop.order_lead_time}}</span>
                        </p>
                    </h5>
                </section>
            </li>
        </ul>
        <ul v-else>
            <li v-for="(item,index) in 6" :key="index">
                <img src="./images/shop_back.svg" alt="back">
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import star from '../star/star'
export default {
    name:'shopList',
    components:{
        star
    },
    data(){
        return {
            //baseImgUrl: 'http://cangdu.org:8001/img/'
        }
    },
    computed:{
        ...mapState(['shops'])
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .shop-list-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin-bottom: 2.5rem;
        .shop-li{
            //background: pink;
            display: flex;
            border-bottom: 0.025rem solid #f1f1f1;
            padding: 1rem 0.625rem;
            .shop-img{
                @include wh(4rem, 4rem);
            }
            .shop-right{
                flex: auto;
                padding-left: 0.625rem;
                .shop-detail-header{
                   @include fj;
                   //align-items: center;
                   .shop-title{
                       width: 12.5rem;
                       color: #333;
                       padding-top: 0.125rem;
                       @include font(1rem,1rem,'PingFangSC-Regular');
                        font-weight: 700;
                        &::before{
                            content: '品牌';
                            display: inline-block;
                            font-size: 0.75rem;
                            line-height: 1rem;
                            color: #333;
                            background-color:#ffd930;
                            padding: 0 0.1875rem;
                            border-radius: .1rem;
                            margin-right: .2rem;
                        }
                   }
                   .shop-detail-ul{
                        display: flex;
                        transform: scale(.8);
                        margin-right: -0.3rem;
                        //margin-top: 0.1875rem;
                        .supports{
                            @include wh(0.75rem,0.75rem);
                            @include sc(0.5rem, #999);
                            border: 0.025rem solid #ccc;
                            padding: 0 0.04rem;
                            border-radius: 0.08rem;
                            margin-left: 0.05rem;
                        }    
                    }
                }
                .rating-order-num{
                    @include fj(space-between);
                    height: 0.875rem;
                    //margin-top: 0.3125rem;
                    margin: 0.625rem 0;
                    .rating-order-num-left{
                        @include fj(flex-start);
                        .rating-section{
                            display: flex;
                            // .iconfont{
                            //     font-size: 0.625rem;
                            //     color: $yellow;
                            // }
                            .rating-num{
                                @include sc(0.4rem, #ff6000);
                                margin: 0 0.3125rem;
                            }
                        }
                        .order-section{
                            transform: scale(0.8);
                            margin-left: -0.3125rem;
                            @include sc(0.625rem, #666);
                        }
                    }
                    .rating-order-num-right{
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        transform: scale(.7);
                        min-width: 5rem;
                        margin-right: -0.625rem;
                        .delivery-style{
                            font-size: 0.625rem;
                            padding: 0.125rem 0.125rem ;
                            border-radius: 0.125rem;
                            margin-left: 0.125rem;
                            border: 0.0625rem solid $yellow;
                        }
                        .delivery-left{
                            color: #fff;
                            background-color: $yellow;
                        }
                        .delivery-right{
                            color: $yellow;
                        }
                    }
                }
                .fee-distance{
                    display: flex;
                    justify-content: space-between;
                    //padding:0 0.3125rem;
                    .fee,.distance_time{
                        display: flex;
                        justify-content: space-between;
                        font-size: 0.625rem;
                        .fee-left,.distance_time-left{
                            margin-right: 0.3125rem;
                        }
                        .fee-right,.distance_time-right{
                            margin-left: 0.3125rem;
                        }
                        .distance_time-left{
                            color: #999;
                        }
                        .distance_time-right{
                            color: $yellow
                        }
                    }
                }
            }
        }
    }

</style>
