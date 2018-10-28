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
                <form @submit.prevent="login">
                    <div :class="{on: loginWay}">
                        <section class="login-message">
                            <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
                            <button :disabled="!rightPhone" class="get-verification" 
                                :class="{right_phone: rightPhone}" @click.prevent="getCode">
                                {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                            </button>
                        </section>
                        <section class="login-verification">
                            <input type="text" maxlength="8" placeholder="验证码" v-model="code">
                        </section>
                        <section class="login-hint">
                            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="">《用户服务协议》</a>
                        </section>
                    </div>
                    <div :class="{on: !loginWay}" >
                        <section>
                            <section class="login-message">
                                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                            </section>
                            <section class="login-verification">
                                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                                <div class="switch-button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                                    <div class="switch-circle" :class="{right : showPwd}"></div>
                                    <span class="switch-text">{{showPwd ? 'abc' : ''}}</span>
                                </div>
                            </section>
                            <section class="login-message">
                                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                                <img class="get-verification" src="http://localhost:4000/captcha" alt=""
                                    @click="getCaptcha" ref="captcha">
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
        <alertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></alertTip>
    </section>
</template>

<script>
import alertTip from '../../components/alertTip/alertTip'
import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'
export default {
    name:'login',
    components:{
        alertTip
    },
    data(){
        return {
            loginWay: true,//true代表短信登录，flase代表密码登录
            computeTime: 0, //计时时间
            showPwd: false, //是否显示密码
            phone: '', //手机号
            code: '', //短信验证码
            name: '', //用户名
            pwd: '', //密码
            captcha: '', //图形验证码
            alertText: '', //提示文本
            alertShow: false, //是否显示警告框
        }
    },
    computed:{
        rightPhone(){
            return /^1\d{10}$/.test(this.phone)
        }
    },
    methods:{
        async getCode(){
            //如果当前没有计时
            if(!this.computeTime){
                //启动倒计时
                this.computeTime = 30
                this.intervalId = setInterval(()=>{
                    this.computeTime--
                    if(this.computeTime<=0){
                        //停止计时
                        clearInterval(this.intervalId)
                    }
                },1000)
                //发送ajax请求手机验证码
                const result = await reqSendCode(this.phone)
                if(result.code === 1){
                    //显示提示
                    this.showAlert(result.msg)
                    //停止计时
                    if(this.computeTime){
                        this.computeTime = 0
                        clearInterval(this.intervalId)
                        this.intervalId = undefined
                    }
                }
            }
        },
        showAlert(alertText){
            this.alertShow = true
            this.alertText = alertText
        },
        //异步登录
        async login(){
            let result
            //前台表单验证
            if(this.loginWay){//短信登录
                const {rightPhone,phone,code} = this
                if(!this.rightPhone){
                    //手机号不正确
                    this.showAlert('手机号不正确')
                    return
                }else if(!/^\d{6}$/.test(code)){
                    //验证码必须市6位数字
                    this.showAlert('验证码必须市6位数字')
                    return
                }

                //发送ajax请求短信登录
                result = await reqSmsLogin(phone, code)

            }else{  //密码登录
                const {name, pwd, captcha} = this
                if(!this.name) {
                    // 用户名必须指定
                    this.showAlert('用户名必须指定')
                    return
                } else if(!this.pwd) {
                    // 密码必须指定
                    this.showAlert('密码必须指定')
                    return
                } else if(!this.captcha) {
                    // 验证码必须指定
                    this.showAlert('验证码必须指定')
                    return
                }

                //发送ajax请求密码登录
                result = await reqPwdLogin({name, pwd, captcha})
            }

            //停止计时
            if(this.computeTime){
                this.computeTime = 0
                clearInterval(this.intervalId)
                this.intervalId = undefined
            }
            //根据结果数据处理
            if(result.code === 0){
                const user = result.data
                // 将user 保存到vuex的state
                // 去个人中心界面
                this.$router.replace('/profile')
            }else {
                //显示新图片验证码
                this.getCaptcha()
                //显示警告提示
                const msg = result.msg
                this.showAlert(msg)
            }
        },
        //关闭警告框
        closeTip(){
             this.alertShow = false
            this.alertText = ''
        },
        //获取新的图片验证码
        getCaptcha(){
            this.$refs.captcha.src = 'http://localhost:4000/captcha?tiem='+Date.now()
        }
    }
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
                                outline: none;
                                &.right_phone{
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
                                width: 2.1875rem;
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
                                        transform: translateX(1.25rem)
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
