<template>
  <div id="app">
		<router-view></router-view>
		<footerGuide v-show="$route.meta.showFooter"></footerGuide>
	</div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    mounted () {
      //this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo'])
    },

    components: {
      FooterGuide
    }
  }
</script>

<style>

</style>
