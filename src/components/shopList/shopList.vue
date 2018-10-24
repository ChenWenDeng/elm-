<template>
    <div class="shop-list-container">
        <ul>
            <li class="shop-li" v-for="(item, index) in shuru" :key="index">
                <section>
                    <img class="shop-img" src="//fuss10.elemecdn.com/3/b1/65f6a454672513b72fbbf43df2236png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85" alt="">
                </section>
                <section class="shop-right" >
                    <header class="shop-detail-header">
                        <h4 class="shop-title ellipsis">探鱼</h4>
                        <ul class="shop-detail-ul">
                            <li class="supports">保</li>
                            <li class="supports">准</li>
                            <li class="supports">票</li>
                        </ul>
                    </header>
                    <h5 class="rating-order-num">
                        <section class="rating-order-num-left">
                            <section class="rating-section">
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <span class="rating-num">4.7</span>
                            </section>
                            <section class="order-section">
                                月售58单
                            </section>
                        </section>
                        <section class="rating-order-num-right">
                            <span class="delivery-style delivery-left">蜂鸟配送</span>
                            <span class="delivery-style delivery-right">准时送</span>
                        </section>
                    </h5>
                    <h5 class="fee-distance">
                        <p class="fee">
                            <span class="fee-left">￥15起送</span>
                            /
                            <span class="fee-right">配送费约5</span>
                        </p>
                        <p class="distance_time">
                            <span class="distance_time-left">126.3公里</span>
                            /
                            <span class="distance_time-right">1小时23分钟</span>
                        </p>
                    </h5>
                </section>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'shopList',
    data(){
        return {
            shuru:['1','2','3','4','5','6','7','8','9','10','11','12']
        }
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
                            .iconfont{
                                font-size: 0.625rem;
                                color: $yellow;
                            }
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
