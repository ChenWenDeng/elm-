<template>
	<section class="footer_guide">
		<section class="guide_item" :class="{on: '/msite'=== $route.path}" @click="goTo('/msite')">
			<span class="icon_style">
				<i class="iconfont icon-waimaidan"></i>
			</span>
			<span>外卖</span>
		</section>
		<section class="guide_item" :class="{on: '/search'=== $route.path}" @click="goTo('/search')">
			<span class="icon_style">
				<i class="iconfont icon-dingdanguanli-"></i>
			</span>
			<span>搜索</span>
		</section>
		<section class="guide_item" :class="{on: '/order'=== $route.path}" @click="goTo('/order')">
			<span class="icon_style">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span>订单</span>
		</section>
		<section class="guide_item" :class="{on: '/profile'=== $route.path}" @click="goTo('/profile')">
			<span class="icon_style">
				<i class="iconfont icon-geren"></i>
			</span>
			<span>个人</span>
		</section>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			goTo (path){
				this.$router.replace(path);
				
			},
			on:function(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	 @import '.~styles/mixin.scss';
	.footer_guide{
		background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 2.5rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
		.guide_item{
			flex: 1;
			display: flex;
			text-align: center;
			flex-direction: column;
			align-items: center;
			&.on{
				color: $yellow;
			}
			span{
				font-size: 0.75rem;
				margin-top: 0.25rem;
				//margin-bottom: 2px;
			}
		}
	}
</style>