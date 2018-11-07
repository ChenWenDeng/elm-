<template>
    <div class="profile-page">
        <headerTop title="我的">
            <section class="header_search" slot="left">
                <i class="iconfont icon-right2"></i>
            </section>
            <section class="header_login" slot="right"> 
            </section>
        </headerTop>
        <section class="profile-number">
            <router-link :to="userInfo._id?'/userinfo':'/login'" class="profile-link">
                <div class="profile-image">
                    <i class="iconfont icon-geren1"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name||'登录/注册'}}</p>
                    <p>
                        <span class="user-icon">
                            <i class="iconfont icon-shouji icon-mobile"></i>
                        </span>
                        <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
                    </p>
                </div>
                <span class="arrow">
                    <i class="iconfont icon-right1"></i>
                </span>
            </router-link>
        </section>
        <section class="profile-info-data">
            <ul class="info-data-list">
                <li class="info-data-link">
                    <span class="info-data-top"><span>0.00</span>元</span>
                    <span class="info-data-bottom">我的余额</span>
                </li>
                <li class="info-data-link">
                   <span class="info-data-top"><span>0</span>个</span>
              <span class="info-data-bottom">我的优惠</span>
                </li>
                <li class="info-data-link">
                    <span class="info-data-top"><span>0</span>分</span>
              <span class="info-data-bottom">我的积分</span>
                </li>
            </ul>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 我的订单 -->
          <a href='javascript:' class="my_order">
            <span>
                <i class="iconfont icon-dingdanguanli-"></i>
            </span>
            <div class="my_order_div">
                <span>我的订单</span>
                <span class="my_order_icon">
                    <i class="iconfont icon-right"></i>
                </span>
            </div>
          </a>
          <!-- 积分商城 -->
          <a href='javascript:' class="my_order">
            <span>
                <i class="iconfont icon-jifen"></i>
            </span>
            <div class="my_order_div">
                <span>积分商城</span>
                <span class="my_order_icon">
                    <i class="iconfont icon-right"></i>
                </span>
            </div>
          </a>
          <!-- 硅谷外卖会员卡 -->
          <a href="javascript:" class="my_order">
            <span>
                <i class="iconfont icon-huiyuan"></i>
            </span>
            <div class="my_order_div">
                <span>开饭啦外卖会员卡</span>
                <span class="my_order_icon">
                    <i class="iconfont icon-right"></i>
                </span>
            </div>
          </a>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 服务中心 -->
          <a href="javascript:" class="my_order">
            <span>
                <i class="iconfont icon-fuwuzhongxin"></i>
            </span>
            <div class="my_order_div">
                <span>服务中心</span>
                <span class="my_order_icon">
                    <i class="iconfont icon-right"></i>
                </span>
            </div>
          </a>
        </section>
        <section class="profile-my-order">
            <mt-button class="exit-button" type="danger" v-if="userInfo._id"
                @click="logout">
                退出登录
            </mt-button>
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {MessageBox, Toast} from 'mint-ui'
import headerTop from '../../components/headerTop/headerTop'
export default {
    name: 'profile',
    components:{
        headerTop
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        logout(){
            MessageBox.confirm('确定退出吗?').then(
                action => {
                    //请求推出
                    this.$store.dispatch('logout')
                    Toast('推出完成')
                },
                action => {
                    console.log('取消退出');
                }
            );
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';

    .profile-page{
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
            }
            .header_login{
                @include wh(5rem,2.5rem);
                display: flex;
                justify-content: center;
                align-items: center;
                @include sc(1rem, #fff);
            }
        }
        .profile-number{
            margin-top: 2.5rem;
            .profile-link{
                position: relative;
                border-top: 0.025rem solid $line;
                display: block;
                overflow: hidden;
                background-color: $yellow;
                padding: 1.25rem 0.625rem;
                .profile-image{
                    float: left;
                    width: 3.75rem;
                    height: 3.75rem;
                    border-radius: 50%;
                    overflow: hidden;
                    vertical-align: top;
                    .icon-geren1{
                        background-color: #e4e4e4;
                        font-size: 3.875rem;
                    }
                }
                .user-info{
                    float: left;
                    margin: 0.5rem 0 0 0.9375rem;
                    p{
                        font-weight: 700;
                        font-size: 1.125rem;
                        color: #fff;
                        &.user-info-top{
                            padding-bottom: 0.5rem;
                        }
                        .user-icon{
                            display: inline-block;
                            margin: 0 0.3125rem 0 -0.1875rem;
                            width: 1rem;
                            height: 1rem;
                            .icon-mobile{
                                font-size: 1rem;
                                //vertical-align: text-top;
                            }
                        }
                        .icon-mobile-number{
                            font-size: 0.875rem;
                            color: #fff;
                            margin-left: -0.625rem;
                        }
                    }
                }
                .arrow{
                    width: 0.75rem;
                    height: 0.75rem;
                    position: absolute;
                    right: 0.9375rem;
                    top: 40%;
                    .icon-right1{
                        color: #fff;
                        font-size: 0.625rem;
                    }
                }
            }
        }
        .profile-info-data{
            border-bottom: 0.0625rem solid $line;
            width: 100%;
            background: #fff;
            overflow: hidden;
            .info-data-list{
                overflow: hidden;
                .info-data-link{
                    float: left;
                    width: 33%;
                    text-align: center;
                    //border: 1px solid #f1f1f1;
                    .info-data-top{
                        display: block;
                        width: 100%;
                        font-size: 14px;
                        color: #333;
                        padding: 0.9375rem 0.3125rem 0.625rem;
                        span{
                            display: inline-block;
                            font-size: 1.875rem;
                            color: #f90;
                            font-size: 700;
                            line-height: 30px;
                        }
                    }
                    .info-data-bottom{
                        display: inline-block;
                        font-size: 14px;
                        color: #666;
                        font-weight: 400;
                        padding-bottom: 10px;
                    }
                }
                .info-data-link:nth-of-type(2){
                    border: 1px solid #f1f1f1;
                    .info-data-top{
                        span{
                            color: #ff5f3e;
                        }
                    }
                }
                .info-data-link:nth-of-type(3){
                    .info-data-top{
                        span{
                            color: #6ac20b;
                        }
                    }
                }
            }
        }
        .profile_my_order{
            //top-border-1px(#e4e4e4);
            margin-top: 10px;
            background: #fff;
            .my_order{
                display: flex;
                align-items: center;
                padding-left: 15px;
                >span{
                    display: flex;
                    align-items: center;
                    width: 20px;
                    height: 20px;
                    >.iconfont{
                        margin-left: -10px;
                        font-size: 1rem;
                    }
                    .icon-dingdanguanli-{
                        color: #02a774;
                    }
                    .icon-jifen{
                        color: #ff5f3e;
                    }
                    .icon-huiyuan{
                        color: #f90;
                    }
                    .icon-fuwuzhongxin{
                        color: rgb(94, 94, 247);
                    }
                }
            }
            .my_order_div{
                width: 100%;
                border-bottom: 1px solid #f1f1f1;
                padding: 18px 10px 18px 0;
                font-size: 16px;
                color: #333;
                display: flex;
                justify-content: space-between;
                span{
                    display: block;
                }
                .my_order_icon{
                    width: 10px;
                    height: 10px;
                }
                .icon-right{
                    color: #bbb;
                    font-size: 10px;
                }
              
            }
        }
        .profile-my-order{
            margin-top: 0.9375rem;
            .exit-button{
                width: 100%;
            }
        }
    }

</style>


