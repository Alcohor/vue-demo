<template>
<div class="app-home">
    <app-header></app-header>
    <div class="rest-wrap">
        <ul class="wrap" v-if = "results">
            <rest-item
            v-for= "result in results"
            :key = "result.id"
            :info = "result"
            ></rest-item>
        </ul>
    </div>
    <app-nav></app-nav>
</div>
</template>

<script>
import AppNav from '@c/layout/AppNav'
import AppHeader from '@c/layout/AppHeader'
import RestItem from '@c/common/RestItem'
    export default{
        name:"app-home",
        data(){
            return {
                results:null
            }
        },
        components:{
            RestItem,
            AppHeader,
            AppNav
        },
     async created() {
         let _result = await this.$http({
             url:'/maoyan/ajax/movieOnInfoList?token='
         })
         this.results = _result.data.movieList;
     }   
    }
</script>
    
<style>

</style>
