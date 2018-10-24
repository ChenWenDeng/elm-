<template>
   <div class="msite-nav">
       <div class="swiper-container">
           <div class="swiper-wrapper">
               <div class="swiper-slide">
                   <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
                    <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
               </div>
               <div class="swiper-slide">
                   <div class="link-to-food">
                       <div class="food-container">
                           <img class="icon-img-content" src="//fuss10.elemecdn.com/f/40/36b649e9be8ff3280f9e210c211b3jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85" alt="">
                       </div>
                       <span class="icon-desc">甜品饮品</span>
                   </div>
               </div>
           </div>
           <div class="swiper-pagination"></div>
       </div>
   </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    name:'swiper',
    mounted(){
        //创建一个Sweiper对象,来实现轮播
        new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    
    // .msite-nav{
    //     margin-top: 2.5rem;
    //     overflow: hidden;
    //     height: 0;
    //     padding-bottom: 50%;
    //     border-bottom: 0.025rem solid $bc;
    //     //background: green;
    //     // .swiper-wrapper{
    //     //      @include wh(100%,12.8rem);
    //     // }
    //     .link-to-food{
    //         position: relative;
    //         overflow: hidden;
    //         float: left;
    //         width: 25%;
    //         height: 0;
    //         padding-bottom: 25%;
    //         //background: pink;
    //         .food-container{
    //             position: absolute;
    //             top: 0;
    //             left: 0;
    //             right: 0;
    //             bottom: 1.375rem;
    //             box-sizing: border-box;
    //             padding: 0.3125rem;
    //             //background: red;
    //             .icon-img-content{
    //                 display: block;
    //                 margin: 0 auto;
    //                 height: 100%;
    //             }
    //         }
    //         .icon-desc{
    //             position: absolute;
    //             left: 0;
    //             right: 0;
    //             bottom: 0;
    //             height: 1.375rem;
    //             line-height: 1.375rem;
    //             text-align: center;
    //             color: $darkTextColor;
    //             font-size: 0.75rem;
    //         }
    //     }
    //     .swiper-pagination{
    //         margin-top: 1.25rem; 
    //     }
    // }

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
                        background: red;
                    }
                }
            }
        }
</style>

