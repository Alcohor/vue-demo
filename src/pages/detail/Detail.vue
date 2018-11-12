<template>
    <div v-if="results" class="detail">
        <common-header :isBackShow= "isBackShow"  :title= "results.nm"></common-header>
        <div class="rest-intro-wrap">
            <img :src="results.img|getImgUrl" alt="" class="rest-img">
            <div class="words-intro">
                <h1 class="rest-main-title">{{results.nm}}</h1>
                <div class="rest-sale-info">
                    <span class="gread">顾客评分：<mark>8.9</mark> </span>
                    <span class="sale-vol">月售：<span>{{results.wish}}</span>单</span>
                </div>
            </div>
        </div>
        <div class="rest-content">
           <router-link :to= "{name:'foods-list'}" tag="div" class="rest-menu-btn">点餐</router-link>
           <router-link :to= "{name:'comment-list'}" tag="div" class="rest-menu-btn">评论</router-link>
           <router-link :to= "{name:'rest-introduce'}" tag="div" class="rest-menu-btn">商家</router-link>
        </div>
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
        
    </div>
</template>

<script>
    import CommonHeader from '@c/common/CommonHeader'
    // import FoodsItem from '@c/common/FoodsItem'
    import FoodsList from '@c/layout/FoodsList'
    export default{
        components:{
            CommonHeader,
            FoodsList
        },
        props: ['id'],
        data(){
            return{
                results:null,
                isBackShow:true
            }
        },
        async created(){
            let _result = await this.$http({
             url:`/maoyan/ajax/detailmovie?movieId=${this.id}`
         })
         this.results = _result.data.detailMovie;
            
        },
        
    }
</script>

<style lang = "scss">
@import "../../stylesheets/particles/_variable.scss";
    .detail{
        width: 100%;
        .rest-intro-wrap{
            padding: .2rem .266667rem;
            .rest-img{
                width: 2rem;
                height: 2rem;
                display: inline-block;
            }
            .words-intro{
                margin-top: .4rem;
                padding-bottom: .2rem;
                border-bottom: 1px solid $base-them-color;
                h1.rest-main-title{
                    font-size: .546667rem;
                    font-weight: 700;
                }
            }
        }
        .rest-content{
            padding: 0 .2rem;
            width: 100%;
            height: 1.066667rem;
            line-height: 1.066667rem;
            display: flex;
            .rest-menu-btn{
                flex-grow: 1;
            }
            

        }
    }
</style>
