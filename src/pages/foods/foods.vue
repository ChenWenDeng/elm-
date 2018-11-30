<template>
   <div>
        <headerTop title="甜品饮品">
            <router-link class="header_search" slot="left" to="/msite">
                <i class="iconfont icon-right2"></i>
            </router-link>
            <router-link class="header_login" slot="right" to="/msite">
            </router-link>
        </headerTop>   
        <section class="sort-container">
            <div class="sort-item" :class="{choose_type:sortBy == 'food'}" @click="chooseType('food')">
               甜品饮品
            </div>
            <div class="sort-item" :class="{choose_type:sortBy == 'sort'}" @click="chooseType('sort')">
                <div class="item-border">
                    排序
                </div>
            </div>
            <div class="sort-item" :class="{choose_type:sortBy == 'activity'}" @click="chooseType('activity')">
                筛选
            </div>
        </section>
        <transition name="showlist" v-show="category">
            <div class="category_container" v-show="sortBy == 'food'">   
                <div class="category_left" ref="wrapper">
                    <ul class="category_left_ul">
                        <li ref="categoryLi" class="category_left_li" v-for="(category, index) in categorys" :key="index" :class="{categoryLiBg:categoryLi==index}" @click="getCategory(index)">{{category}}</li>
                    </ul>
                </div>
                <div class="category_right" ref="wrapper1">
                    <ul class="category_right_ul">
                        <li class="category_right_li" v-for="(categoryShop, index) in categoryShops" :key="index">
                            {{categoryShop.title}}
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="showlist">
            <div class="sort-box" v-show="sortBy == 'sort'">
                <ul class="sort-ul">
                    <li class="sort-li">智能排序</li>
                    <li class="sort-li">距离最近</li>
                    <li class="sort-li">销量最高</li>
                    <li class="sort-li">起送价最低</li>
                    <li class="sort-li">配送速度最快</li>
                    <li class="sort-li">评分最高</li>
                </ul>
            </div>
        </transition>
        <transition name="showlist">
            <div class="activity-box" v-show="sortBy == 'activity'">
                <section class="activity-container">
                    <div class="filter_header_style">配送方式</div>
                    <ul>
                        <li :class="{filterBg:delivery_mode == Delivery.id}" v-for="(Delivery, index) in Deliverys" :key="index" @click="selectDeliveryMode(Delivery.id)">
                            {{Delivery.title}}
                        </li>
                    </ul>
                </section>
                <section class="activity-container">
                    <div class="filter_header_style">商家属性（可以多选）</div>
                    <ul>
                        <li :class="{filterBg:delivery_mode == sort.id}" v-for="(sort, index) in sorts" :key="index" @click="selectSupportIds(index,sort.id)" >
                            {{sort.title}}
                        </li>
                    </ul>
                </section>
                <section class="confirm_filter">
                    <div class="clear_all filter_button_style">清空</div>
                    <div class="confirm_select filter_button_style">
                        确定
                        <span v-show="filterNum">{{filterNum}}</span>
                    </div>
                </section>
            </div>
        </transition>
        <transition name="showcover">
    		<div class="back_cover" v-show="sortBy"></div>
    	</transition>     
        <shopList class="shopList"/>
    </div> 
</template>

<script>
import BScroll from 'better-scroll'
import headerTop from '../../components/headerTop/headerTop'
import shopList from '../../components/shopList/shopList' 
export default {
    data(){
        return {
            sortBy: '',
            category: null,
            categoryLi: 0,
            delivery_mode:null,//选中配送的方式
            filterNum: 0, //所选中的所有样式的集合
            //support_ides:null,
            support_ids: [], // 选中的商铺活动列表
            //isfilterBg: false,
            categorys:['快餐便当','小吃夜宵','果蔬生鲜','特色菜系','商店超市','鲜花蛋糕','全部商家','甜品饮品','极品红酒','生鲜海鲜','好吃粗粮','日本料理','韩国烤肉'],
            categoryShops:[
                {
                    'id':223424,
                    'title':'简餐'
                },
                {
                    'id':223324,
                    'title':'盖浇饭'
                },
                {
                    'id':223454,
                    'title':'米粉面馆'
                },
                {
                    'id':223464,
                    'title':'包子粥店'
                },
                {
                    'id':223474,
                    'title':'香锅砂锅'
                },
                {
                    'id':223484,
                    'title':'麻辣烫'
                },
                {
                    'id':223492,
                    'title':'饺子馄饨'
                },
                {
                    'id':223454,
                    'title':'汉堡'
                },
                {
                    'id':223464,
                    'title':'生煎锅贴'
                },
                {
                    'id':223474,
                    'title':'黄焖鸡米饭'
                },
                {
                    'id':223484,
                    'title':'烧腊饭'
                },
                {
                    'id':223492,
                    'title':'煲仔饭'
                }
            ],
            Deliverys:[
                {
                    'id': 34543,
                    'title': '开饭配送'
                }
            ],
            sorts:[
                {
                    'id': 46346,
                    'title': '品牌商家'
                },
                {
                    'id': 54746,
                    'title': '外卖保'
                },
                 {
                    'id': 65757,
                    'title': '准时达'
                },
                {
                    'id': 68786,
                    'title': '新店'
                },
                 {
                    'id': 76556,
                    'title': '在线支付'
                },
                {
                    'id': 95466,
                    'title': '开发票'
                }
            ]
        }
    },
    components:{
        headerTop,
        shopList
    },
    created () {
    },
    methods:{
        chooseType(type){
            if(this.sortBy !== type){
                this.sortBy = type;
            }else{
                this.sortBy = ''
            }
            if(this.sortBy == type){
                this.$nextTick(() => {
                    this._initScroll();
                });
            }
        },
        _initScroll(){
            //var wrapper =document.getElementById('wrapper')
            this.shopBoxScroll = new BScroll(this.$refs.wrapper,{
                click: true
            });
            this.shopBoxScroll = new BScroll(this.$refs.wrapper1);
        },
        getCategory(index){            
            this.categoryLi = index;       
        },
        //筛选选项中的配送方式选择
        selectDeliveryMode(id){
            if(this.delivery_mode == null){
                this.filterNum++;
                this.delivery_mode = id;
                //alert(this.delivery_mode)
            }else if (this.delivery_mode == id) {
                this.filterNum--;
                this.delivery_mode = null;
                //delivery_mode已有值且不等于当前选择值，则赋值delivery_mode为当前所选id
            } else {
                this.delivery_mode = id;
            }
        },
         //点击商家活动，状态取反
        selectSupportIds(index, id) {
            if(this.support_ids.length==0){
                this.support_ids.push(index)
                console.log(this.support_ids)
            }
            for(var i=0; i<this.support_ids.length;i++){
                if(this.support_ids.indexOf(index)){
                    console.log(this.support_ids[i])
                    console.log(this.support_ids)
                    return 
                }else{
                    this.support_ids.push(index)
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '.~styles/mixin.scss';
    .sort-container{
        width: 100%;
        height: 35px;
        position: fixed;
        top: 40px;
        left: 0;
        display: flex;
        border-bottom: 1px solid #f3f3f3;
        background: #fff;
        z-index: 21;
        font-size: 13px;
        //justify-content: space-around;
        .sort-item{
            width: 33.3%;
            height: 2.1875rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &.choose_type{
                color: $yellow;
            }
            .item-border{
                width: 80%;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
            }
        }
        
    }
    .showlist-enter-active,
    .showlist-leave-active {
        transition: all 0.3s;
        transform: translateY(0);
    }
    .showlist-enter,
    .showlist-leave-active {
        opacity: 0;
        transform: translateY(-100%);
    }
    .category_container{
        position: fixed;
        top:75px;
        left: 0;
        width: 100%;
        height: 21.875rem;
        border-bottom: 1px solid #f3f3f3;
        overflow: hidden;
        display: flex;
        z-index: 11;
        font-size: 12px;
        .category_left{
            width: 50%;
            height: 21.875rem;
            background: #f3f3f3;
            .category_left_ul{
                //border-right: 1px solid #f3f3f3;
                .category_left_li{
                    width: 100%;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    padding: 0 0.625rem;
                    background: #f3f3f3;
                    &.categoryLiBg{
                        background: #fff
                    }
                }
            }
        }
        .category_right{
            width: 50%;
            height: 21.875rem;
            background: #fff;
            .category_right_ul{
                background: #fff;
            }
            .category_right_li{
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                padding: 0 0.625rem;
                background: #fff;
                border-bottom: 1px solid #f3f3f3;
                padding-left: 10px;
            }
        }
        
    }
    .sort-box,.activity-box{
        position: fixed;
        top:75px;
        left: 0;
        width: 100%;
        height: 350px;
        background: #ffff;
        overflow: hidden;
        z-index: 11;
        font-size: 12px;
        .sort-ul{
            width: 100%;
            .sort-li{
                width: 90%;
                height: 50px;
                display: flex;
                align-items: center;
                margin-left: 10px;
                padding-left: 20px;
                border-bottom: 1px solid #f3f3f3;
            }
        }
    }
    .activity-container{
        width: 100%;
        padding: 15px;
        font-size: 12px;
        .filter_header_style{
            width: 100%;
            height: 2.1875rem;
            display: flex;
            align-items: center;
        }
        ul{
            display: flex;
            flex-wrap:wrap;
            li{
                width: 30%;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 5px 5px;
                border: 1px solid #f1f1f1;
                border-radius: 0.3125rem;
            }
        }
    }
    .confirm_filter{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #f3f3f3;
        .filter_button_style{
            width:  175px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-radius: 5px;
            font-size: 16px;
            &.confirm_select{
                background: $yellow;
            }
        }
    }
    .showcover-enter-active,
    .showcover-leave-active {
        transition: opacity 0.3s;
    }
    .showcover-enter,
    .showcover-leave-active {
        opacity: 0;
    }
    .back_cover {
        position: fixed;
        @include wh(100%, 100%);
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .filterBg{
        background: $yellow;
    }
    .shopList{
        margin-top: 75px;
    }
</style>
