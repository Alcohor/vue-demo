<template>
    <div class="order">
        <common-header :isBackShow= "isBackShow"  :title= "headerTitle"></common-header>
        <div class="order-type">
            <span
                v-for = "item in types"
                :key = "item.id"
                @click = "type = item.type"
                :class = "{choosing: item.type === type}"
                class="type-switch-btn"
            >{{item.title}}</span>
        </div>
        <order-list :type = "type" ></order-list>
        <app-nav></app-nav>
    </div>
</template>

<script>
import CommonHeader from "@c/common/CommonHeader";
import AppNav from "@c/layout/AppNav";
import OrderList from "@c/layout/OrderList";
export default {
  components: {
    CommonHeader,
    OrderList,
    AppNav
  },

  data() {
    return {
      isBackShow: false,
      headerTitle: "订单",
      type:"order-underway",
      types: [
        { id: 1, title: "进行中", type: "order-underway" },
        { id: 2, title: "已完成", type: "order-complete" }
      ]
    };
  }
};
</script>

<style lang = "scss">
@import "../../stylesheets/particles/_variable.scss";
.order {
  width: 100%;
  .order-type {
    width: 100%;
    height: 1.066667rem;
    display: flex;
    .type-switch-btn {
      flex-grow: 1;
      width: 50%;
      line-height: 1.066667rem;
      font-size: 0.453333rem;
      font-weight: 500;
    }
    .choosing{
        color: $base-them-color;
        font-weight: 700;
        border-bottom: 2px solid $base-them-color;
    }
  }
}
</style>
