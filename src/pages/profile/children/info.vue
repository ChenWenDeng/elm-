<template>
    <div class="rating_page">
        <headerTop title="账户信息">
            <router-link class="header_search" slot="left" to="/profile">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <section class="header_login" slot="right"> 
            </section>
        </headerTop>
        <section class="profile-info">
            <section class="profileinfopanel-upload">
                <h2>头像</h2>
                <div class="headportrait-div"></div>
            </section>
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
    .profile-info{
        @include wh(100%,3.1rem);
    }
}
</style>
