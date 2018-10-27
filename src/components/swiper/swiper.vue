<template>
   <div class="msite-nav">
       <div class="swiper-container" v-if="categorys.length">
           <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
                    <div class="link-to-food" v-for="(category, index) in categorys" :key="index">
                       <div class="food-container">
                           <img class="icon-img-content" :src="baseImageUrl+category.image_url" alt="">
                       </div>
                       <span class="icon-desc">{{category.title}}</span>
                    </div>
               </div>
           </div>
           <div class="swiper-pagination"></div>
       </div>
       <img src="./images/msite_back.svg" alt="back" v-else>
   </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
export default {
    name:'swiper',
    data(){
        return {
            baseImageUrl:'https://fuss10.elemecdn.com'
        }
    },
    // mounted(){
    //     this.$store.dispatch('getCategorys')
    // },
    watch:{
        categorys(value){
            //界面更新就立即创建Swiper对象
            this.$nextTick(() => {//一旦完成界面更新。立即调用
                //创建一个Sweiper对象,来实现轮播
                new Swiper ('.swiper-container', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        }
    },
    computed:{
        ...mapState(['categorys']),

        /* 
            根据categorys一维数组生成一个二维数组
            小数组中的元素个数最大是8
        */
       categorysArr () {
        const {categorys} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if(minArr.length===8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if(minArr.length===0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    }

}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
        .msite-nav{
            margin-top: 2.8125rem;
            height: 200px;
            background: #fff;
            border-bottom: 0.025rem solid $line;
            .swiper-container{
                width: 100%;
                height: 100%;
                .swiper-wrapper{
                    width: 100%;
                    height: 100%;
                    .swiper-slide{
                        display: flex;
                        // justify-content: center;
                        // align-items: center;
                        flex-wrap: wrap;
                        .link-to-food{
                            width: 25%;
                            .food-container{
                                display: block;
                                width: 100%;
                                text-align: center;
                                padding-bottom: 10px;
                                font-size: 0;
                                img{
                                    display: inline-block;
                                    width: 3.125rem;
                                    height: 3.125rem;
                                }
                            }
                            span{
                                display: block;
                                width: 100%;
                                text-align: center;
                                font-size: 0.8125rem;
                            }
                        }
                    }
                }
                .swiper-pagination{
                    >span.swiper-pagination-bullet-active{
                        background-color: red;
                    }
                }
            }
        }
</style>

