<template>
    <ul class="foods-list"> 
        <foods-item></foods-item>
    </ul>
</template>

<script>
import FoodsItem from '@c/common/FoodsItem'
export default{
    name:"foods-list",
    components:{
        FoodsItem
    }
}
</script>

<style>

</style>

