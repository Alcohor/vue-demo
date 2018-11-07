<template>
    <transition
    enter-active-class="slideInRight"
    leave-active-class="slideOutRight">
        <div class="app-header-locat animated" v-if="isShow" >
            <div class="header-main">
                <span class="back-wrap" @click="$emit('update:isShow', false)">
                    <i class = 'fa fa-angle-left back-btn'></i> 
                </span>
                <p>选择收货地址</p>
            </div>
            <div class="content">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  props: { isShow: Boolean }
};
</script>

<style lang = "scss">
@import "../../stylesheets/particles/_variable.scss";
.app-header-locat {
    z-index: 999;
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  .header-main {
    flex: 0, 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0.266667rem 0.373333rem 0 0.373333rem;
    height: 1.186667rem;
    background-color: $base-them-color;
    color: #ffffff;
    p {
      text-align: center;
      font-size: 0.453333rem;
      font-weight: 700;
    }
    .back-wrap{
            width: .933333rem;
            left: .373333rem;
          display: inline-block;
          position: absolute;
        .back-btn {
          font-size: .666667rem;
        }
    }
  }
  .content {
    width: 100%;
    height: 16.6rem;
    background-color: #fff;
  }
}
.animated {
  animation-duration: 0.5s;
}
</style>
