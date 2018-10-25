<template>
  <div id="app">
		<router-view></router-view>
		<footerGuide v-show="$route.meta.showFooter"></footerGuide>
	</div>
</template>

<script>
import footerGuide from './components/footerGuide/footerGuide'
export default {
  name: 'App',
	components: {
		footerGuide
	}
}
</script>

<style>

</style>
