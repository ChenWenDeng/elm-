<template>
    <div class="confirmOrderContainer">
        <headerTop title="确认订单">
           <router-link class="header_search" slot="left" to="/msite">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <router-link class="header_login" slot="right" to="/msite">
            </router-link>
        </headerTop>
        <section class="address_container">  
            <div class="address_left">
                <i class="iconfont icon-weizhi"></i>
            </div>
            <div class="address_center">
                <p>陈先生</p>
                <p>深圳福田区</p>
            </div>
            <div class="address_right">
                <i class="iconfont icon-right1"></i>
            </div>
        </section>
        <section class="delivery-container">
            <div class="delivery-left">
                <p class="deliver_text">送达时间</p>
            </div>
            <div class="delivery-right">
                <p class="deliver_time">
                    尽快送达|预计|13:43
                </p>
                <p class="deliver_title">开饭快送</p>
            </div>
        </section>
        <section class="pay-container">
            <div class="pay-header">
                <span>支付方式</span>
                <span class="header-right">
                    在线支付
                    <i class="iconfont icon-right1"></i>
                </span>
            </div>
            <div class="pay-footer">
                <span>红包</span>
                <span>暂时只在饿了么 APP 中支持</span>
            </div>
        </section>
        <section class="food_list">
            <div class="foods-header">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1767866617,1644937357&fm=200&gp=0.jpg" alt="">
                <span>店名</span>
            </div>
            <ul class="food_list_ul">
                <li class="food_item_style">
                    <p class="food_name">肯德基</p>
                    <div class="num_price">
                        <span class="Number">x2</span>
                        <span>￥30</span>
                    </div>
                </li>
               <li class="food_item_style">
                    <p>麦当劳</p>
                    <div class="num_price">
                        <span class="Number">x2</span>
                        <span>￥30</span>
                    </div>
                </li>
            </ul>
            <div class="food_item_style">
                <p class="food_name ">餐盒</p>
                <div class="num_price">
                    <span class="price">￥4</span>
                </div>
            </div>
            <div class="food_item_style">
                <p class="food_name ">配送费</p>
                <div class="num_price">
                    <span class="price">￥2</span>
                </div>
            </div>
            <div class="food_item_style">
                <p class="food_name ">订单</p>
                <div class="num_price">
                    <span class="price price-color">待支付</span>
                    <span class="price  price-color">￥54</span>
                </div>
            </div>
        </section>
        <section class="food_list food_bottom">
            <div class="food_item_style">
                <p class="food_name ">订餐备注</p>
                <div class="num_price">
                    <span class="price demand">
                        口味、偏好等
                        <i class="iconfont icon-right1"></i>
                    </span>
                </div>
            </div>
            <div class="food_item_style">
                <p class="food_name ">发票抬头</p>
                <div class="num_price">
                    <span class="price demand">
                        不需要开发票
                        <i class="iconfont icon-right1"></i>
                    </span>
                </div>
            </div>
        </section>
        <section class="confrim_order">
            <div class="stay-payment">
                待支付
                <span>￥56</span>
            </div>
            <div class="confirm">确认下单</div>
        </section>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
export default {
    components:{
        headerTop,
    }
}
</script>

<style lang="scss" scoped>
@import '.~styles/mixin.scss';
.confirmOrderContainer{
    background: #f2f2f2;
    padding-bottom: 1.25rem;
    .address_container{
        display: flex;
        align-items: center;
        width:100%;
        padding: 1.875rem 1.25rem;
        margin-top: 2.5rem;
        background: #fff;
        .address_left{
            width:10%;
        }
        .address_center{
            width: 80%;
            p:nth-child(2){
                margin-top: 5px;
                font-size: 12px;
            }
        }
        .address_right{
            text-align: right;
            width:10%;
        }

    }
    .delivery-container{
        display: flex;
        align-items: center;
        width:100%;
        padding: 30px 1.25rem;
        background: #fff;
        margin-top: 0.625rem;
        border-left: 0.3125rem solid $yellow;
        .delivery-left{
            width:40%;
            display: flex;
            align-items: center;
            .deliver_text{
                font-size: 1.125rem;
                font-weight: bold;
            }
        }
        .delivery-right{
            width:60%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
            .deliver_time{
                font-size: 1.125rem;
                letter-spacing: 1px;
                color: $yellow;
                margin-bottom: 0.625rem;
            }
            .deliver_title{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60px;
                height:18px;
                background: $yellow;
                border-radius: 0.3125rem;
                font-size: 0.6875rem;
                color:#fff;
            }
        }
    }
    .pay-container{
        //display: flex;
        //align-items: center;
        width:100%;
        padding: 10px 1.25rem;
        background: #fff;
        margin-top: 0.625rem;
        .pay-header{
            width:100%;
            padding: 15px 0;
            display: flex;
            justify-content: space-between; 
            border-bottom: 1px solid #ccc;
            .header-right{
                font-size: 13px;
                color: #ccc;
                i{
                    font-size: 10px;
                }
            }
        }
        .pay-footer{
            display: flex;
            justify-content: space-between; 
            width:100%;
            padding: 15px 0;
            color:#ccc;
            font-size: 14px;
        }
    }
    .food_list{
        width:100%;
        padding: 0 20px;
        margin-top: 10px;
        background: #fff;
        .foods-header{
            display: flex;
            //justify-content: center;
            align-items: center;
            width:100%;
            padding: 15px 0; 
            img{
                width: 50px;
                height: 50px;
                margin-right: 5px;
            }
        }
        .food_list_ul{
            width:100%;
            .food_item_style{
                display: flex;
                justify-content: space-between;
                width:100%;
                padding:15px 0;
                .food_name{
                    width: 70%;
                }
                .num_price{
                    width: 30%;
                    text-align: right;
                    .Number{
                        color: red;
                    }
                }
            }
        }
        .food_item_style{
           display: flex;
            justify-content: space-between;
            width:100%;
            padding:15px 0;
            .food_name{
                width: 65%;
            }
            .num_price{
                width: 35%;
                text-align: right; 
                .price-color{
                    color: red;
                }
                .demand{
                    color: #ccc;
                    font-size: 14px;
                    i{
                        font-size: 12px;
                    }
                }
            }
        }
        &.food_bottom{
            margin-bottom: 50px;
        }
    }
    .confrim_order{
        position: fixed;
        left: 0;
        bottom: 0%;
        display: flex;
        align-items: center;
        width:100%;
        height: 50px;
        margin-top: 50px;
        background: black;
        color:#fff;
        .stay-payment{
            width:70%;
            padding-left: 20px;
            font-size: 18px;
        }
        .confirm{
            width: 30%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            text-align: right;
            background: #00b43c;
        }
    }
}
</style>
