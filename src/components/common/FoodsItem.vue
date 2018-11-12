<template>
    <li class="foods-item">
        <img class="foods-img" src = "//fuss10.elemecdn.com/0/8e/1f27b145da683ebdac357756ec09fpng.png?imageMogr/format/webp/thumbnail/150x/" alt="">
        <div class="foods-intro-wrap">
            <h2 class = "foods-name"></h2>
            <div class="price">
                <span>单价:</span>
                <mark>7.9</mark>
            </div>
        </div>
        <div class="addto-cart-btn">+</div>
    </li>
</template>

<script>
    export default{
        props:['info']
    }
</script>

<style lang="scss">
@import "../../stylesheets/particles/_variable.scss";
.foods-item {
    width: 100%;
    padding: 0.32rem 0.746667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaa;
  .foods-img {
    width: 2rem;
    height: 2rem;
  }
  .foods-intro-wrap {
    padding: 0 0.2rem;
    .foods-name {
      font-size: 0.453333rem;
      font-weight: 700;
      margin-bottom: 0.133333rem;
    }
  }
  .addto-cart-btn {
    width: 0.72rem;
    height: 0.72rem;
    background-color: $base-them-color;
    color: #ffffff;
    font-size:.666667rem;
    font-weight: 900;
    text-align: center;
    line-height: 0.72rem;
    border-radius: 50%;
  }
}
</style>
