<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-jian" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-jia" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object
    },

    methods: {
      updateFoodCount (isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '.~styles/mixins.styl'
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 0.375rem
      line-height: 1.5rem
      font-size: 1.5rem
      color: rgb(0, 160, 220)

    .icon-jian
      display: inline-block
      padding 0.375rem
      line-height 1.5rem
      font-size 1.25rem
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 0.75rem
      padding-top: 0.375rem
      line-height: 1.5rem
      text-align: center
      font-size: 0.625rem
      color: rgb(147, 153, 159)
    .icon-jia
      display: inline-block
      padding: 0.375rem
      line-height: 1.5rem
      font-size: 1.25rem
      color $green
</style>
