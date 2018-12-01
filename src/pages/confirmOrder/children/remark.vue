<template>
    <div class="rating-page">
        <headerTop title="订单备注">
           <router-link class="header_search" slot="left" to="/confirmOrder">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <div class="header_login" slot="right" to="/msite">
            </div>
        </headerTop>
        <section class="quick_remark">
            <header>快速备注</header>
            <ul>
                <li>
                    <span>不要辣</span>
                    <span>少点辣</span>
                    <span>多点辣</span>
                </li>
                <li>
                    <span>不要洋葱</span>
                    <span>多点醋</span>
                    <span>多点葱</span>
                </li>
                <li>
                    <span>去冰</span>
                    <span>少冰</span>
                </li>
            </ul>
        </section>
        <section class="input_remark">
            <header>其他备注</header>
            <textarea class="input_text" placeholder="请输入备注内容(可不填)"></textarea>    
        </section>
        <div class="determine" >确定</div>
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
        .quick_remark{
            margin-top: 2.5rem;
            width: 100%;
            padding: 1.25rem 0;
            background: #fff;
            header{
                width: 100%;
                padding: 0.625rem 0.9375rem;
            }
            ul{
                width: 100%;
                li{
                    width: 100%;
                    padding: 0.625rem 0.3125rem;
                    margin: 0.625rem;
                    span{
                        padding: 0.3125rem 10px;
                        border: 0.0625rem solid #ccc;
                        border-radius: 0.3125rem;
                    }
                }
            }
        }
        .input_remark{
            margin-top: 0.625rem;
            width: 100%;
            padding: 1.25rem 1.25rem;
            background: #fff;
            header{
                width: 100%;
                padding: 0.625rem 0;
            }
            .input_text{
                width: 90%;
                min-height: 4.5rem;
                background-color: #f9f9f9;
                border: 0.025rem solid #eee;
                resize: none;
                margin: 0 auto;
                border-radius: .2rem;
                @include sc(1rem, #666);
                padding: .7rem;
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
