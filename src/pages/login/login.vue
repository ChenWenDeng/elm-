<template>
    <section class="login-container">
        <div class="login-inner">
            <div class="login-header">
                <h2 class="login-logo">饿了吗</h2>
                <div class="login-header-title">
                    <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
                    <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
                </div>
            </div>
            <div class="login-content">
                <form action="">
                    <div :class="{on: loginWay}">
                        <section class="login-message">
                            <input type="text" maxlength="11" placeholder="手机号">
                            <button disabled="disabled" class="get-verification">
                                获取验证码
                            </button>
                        </section>
                        <section class="login-verification">
                            <input type="text" maxlength="8" placeholder="验证码">
                        </section>
                        <section class="login-hint">
                            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="">《用户服务协议》</a>
                        </section>
                    </div>
                    <div :class="{on: !loginWay}" >
                        <section>
                            <section class="login-message">
                                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
                            </section>
                            <section class="login-verification">
                                <input type="text" maxlength="8" placeholder="密码">
                                <div class="switch-button">
                                    <div class="switch-circle"></div>
                                    <span class="switch-text"></span>
                                </div>
                            </section>
                            <section class="login-message">
                                <input type="text" maxlength="11" placeholder="验证码">
                                <img class="get-verification" src="./images/captcha.svg" alt="">
                            </section>
                        </section>
                    </div>
                    <button class="login-submit">登录</button>
                </form>
                <a href="" class="about-us">关于我们</a>
            </div>
            <a href="javascript:" class="go_back" @click="$router.back()">
                <i class="iconfont icon-right2"></i>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            loginWay: true,//true代表短信登录，flase代表密码登录
        }
    },
}
</script>

<style lang="scss" scoped>
@import '.~styles/mixin.scss';
    .login-container{
        width: 100%;
        height: 100%;
        background: #fff;
        .login-inner{
            padding-top: 3.75rem;
            width: 80%;
            margin: 0 auto;
            .login-header{
                .login-logo{
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: $yellow;
                    text-align: center;
                }
                .login-header-title{
                    padding-top: 2.5rem;
                    text-align: center;
                    >a{
                        color: #333;
                        font-size: 0.875rem;
                        padding-bottom: 0.25rem;
                        &:first-child{
                            margin-right: 40px;
                        }
                        &.on{
                            color: $yellow;
                            font-weight: 700;
                            border-bottom: 2px solid $yellow;
                        }
                    }
                }
            }
            .login-content{
                >form{
                    >div{
                        display: none;
                        &.on{
                            display: block;
                        }
                        input{
                            width: 100%;
                            height: 100%;
                            padding-left: 0.625rem;
                            border: 0.0625rem solid #ddd;
                            border-radius: 0.25rem;
                            outline: 0;
                            font: 400 0.875rem Arial;
                            &:focus{
                                border: 1px solid $yellow;
                            }
                        }
                        .login-message{
                            position: relative;
                            margin-top: 1rem;
                            height: 3rem;
                            font-size: 0.875rem;
                            background-color: #fff;
                            .get-verification{
                                position: absolute;
                                top: 50%;
                                right: 10px;
                                transform: translateY(-50%);
                                border: 0;
                                color: #ccc;
                                font-size: 0.875rem;
                                background-color: transparent;
                                &.right-phone{
                                    color: black;
                                }
                            }
                        }
                        .login-verification{
                            position: relative;
                            margin-top: 1rem;
                            height: 3rem;
                            font-size: 0.875rem;
                            background-color: #fff;
                            .switch-button{
                                font-size: 0.75rem;
                                border: 0.0625rem solid #ddd;
                                border-radius: 0.5rem;
                                transform: background-color .3s,border-color .3s;
                                padding: 0 0.375rem;
                                width: 1.875rem;
                                height: 1rem;
                                line-height: 1rem;
                                color: #fff;
                                position: absolute;
                                top: 50%;
                                right: 10px;
                                transform:  translateY(-50%);
                                &.off{
                                    background-color: #fff;
                                    .switch-text{
                                        float: right;
                                        color: #ddd;
                                    }
                                }
                                &.on{
                                    background-color: $yellow;
                                }
                                >.switch-circle{
                                    position: absolute;
                                    top: -1px;
                                    left: -1px;
                                    width: 16px;
                                    height: 16px;
                                    border: 1px solid #ddd;
                                    border-radius: 50%;
                                    background: #fff;
                                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
                                    transition: transform .3s;
                                    &.right{
                                        transform: translateX(30px);
                                    }
                                }
                            }
                        }
                        .login-hint{
                            margin-top: 0.75rem;
                            color: #999;
                            font-size: 0.875rem;
                            line-height: 1.25rem;
                            >a{
                                color: $yellow;
                            }
                        }
                    }
                    .login-submit{
                        display: block;
                        width: 100%;
                        height: 2.625rem;
                        margin-top: 1.875rem;
                        border-radius: 0.25rem;
                        background-color: $yellow;
                        color: #fff;
                        text-align: center;
                        font-size: 1rem;
                        line-height: 2.625rem;
                        border: none;
                    }
                }
                .about-us{
                    display: block;
                    font-size: 0.75rem;
                    margin-top: 1.25rem;
                    text-align: center;
                    color: #999;
                }
            }
            .go_back{
                position: absolute;
                top: 0.625rem;
                left: 0.625rem;
                width: 1.875rem;
                height: 1.875rem;
                >.iconfont{
                    font-size: 1rem;
                    color: #999;
                }
            }
        }
    }
</style>
