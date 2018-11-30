<template>
    <div class="rating-page">
        <headerTop title="确认订单">
           <router-link class="header_search" slot="left" to="/confirmOrder">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <div class="header_login" slot="right" to="/msite">
            </div>
        </headerTop>
        <section class="list_cotainer">
            <ul class="deliverable_ul">
                <li class="deliverable_li">
                    <i class="icon iconfont icon-duigou"></i>
                    <div class="deliverable_box">
                        <div class="name-container">
                            <span class="name">陈</span>
                            <span>先生</span>
                            <span>17620445033</span>
                        </div>
                        <div class="home-container">
                            <span class="home-bg">家</span>
                            <span>303</span>
                        </div>
                    </div>
                </li>
                <li class="deliverable_li">
                    <i class="icon iconfont icon-duigou"></i>
                    <div class="deliverable_box">
                        <div class="name-container">
                            <span class="name">陈</span>
                            <span>先生</span>
                            <span>17620445033</span>
                        </div>
                        <div class="home-container">
                            <span class="home-bg">家</span>
                            <span>303</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <section class="add_icon_footer">
            <i class="iconfont icon-jia"></i>
            <span>新增收货地址</span>
        </section>
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
    .rating-page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        background-color: #fff;
        z-index: 202;
        .list_cotainer{
            width:100%;
            margin-top:40px;
            .deliverable_ul{
                width:100%;
                .deliverable_li{
                    width:100%;
                    height:100px;
                    display: flex;
                    align-items: center;
                    padding: 20px 20px ;
                    .icon{
                        display: block;
                        width:20px;
                        height:20px;
                        font-size: 20px;
                        color: #00b43c;
                    }
                    .deliverable_box{
                        width: 100%;
                        .name-container{
                            margin: 5px 0 10px 10px;
                            .name{
                                font-size: 18px;
                                font-weight: bold;
                            }
                        }
                        .home-container{
                            margin: 10px 0 5px 10px;
                            .home-bg{
                                //min-width:50px;
                                padding: 0 5px;
                                font-size: 12px;
                                color:#fff;
                                background: red;
                                border-radius: 3px;
                            }
                        }
                    }
                }
            }
        }
        .add_icon_footer{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 20px 0;
            .icon-jia{
                margin-right: 5px;
                font-size: 20px;
            }
        }
    }
</style>

