<template>
    <div class="rating_page">
        <headerTop title="修改用户名">
            <router-link class="header_search" slot="left" to="/profile/info">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <section class="header_login" slot="right"> 
            </section>
        </headerTop>
        <section class="setname-container">
            <div class="setname-top">
                <input type="text" placeholder="输入用户名" v-model="username">
                <p>用户名只能修改一次（5-24字符之间）</p>
            </div>
            <button class="modify-btn" :class="{btnBg:(username.length<5)||(username.length>24)}" :disabled="(username.length<5)||(username.length>24)">确认修改</button>
        </section>
    </div>
</template>

<script>
import headerTop from '../../../../components/headerTop/headerTop'
export default {
    components:{
        headerTop
    },
    data(){
        return{
            username:'',
        }
    }
}
</script>

<style lang="scss" scoped>
@import '.~styles/mixin.scss';
.rating_page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 202;
    padding-top: 2.5rem;
    .setname-container{
        width:100%;
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .setname-top{
            width:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            input{
                width: 100%;
                height: 2.5rem;
                border: 0.0625rem solid #ccc;
                text-align: center;
                outline: none;
            }
            p{
                margin-top: 0.625rem;
                color: #999;
                font-size: 0.775rem;
            }
        }
        .modify-btn{
            width: 100%;
            height: 2.5rem;
            margin-top: 1.25rem;
            background: $yellow;
            border: none;
            color: #fff;
        }
        .btnBg{
            background: #ccc;
        }
        
    }
}
</style>
