<template>
  <div id="app">
		<router-view></router-view>
		<footerGuide></footerGuide>
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
