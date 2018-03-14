<template>
  <div class="bottom">
    <div class="left">
      <span class="select_all" :class="isSelectAll?'select_icon_active':'select_icon_noactive'" @click="selectAll"></span>
      <span class="text">全选</span>
      <span class="text">合计：</span>
      <span class="price">￥{{totalPrice}}</span>
    </div>
    <div class="right">
      <div class="btn">
        结算({{this.selectNumber.length}})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom-account',
  data () {
    return {
      select: this.isSelectAll
    }
  },
  props: {
    isSelectAll: {
    },
    selectNumber: {
    },
    totalPrice: {
    }
  },
  methods: {
    selectAll () {
      // this.selectAll = !this.selectAll
      this.$emit('selectAll')
    }
  }
}
</script>

<style scoped lang="scss">
  .bottom{
    height: 1.3066rem;
    position: fixed;
    bottom: 1.3rem;
    left: 0;
    right: 0;
    width: 100%;
    z-index:10;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    .left{
      height: 100%;
      display: flex;
      align-items: center;
      .select_all{
        margin-left: .3rem;
      }
      .select_icon_noactive {
        width: .544rem;
        height: .5444rem;
        background: url("../../../assets/img/shop-cart/select.png") no-repeat;
        background-position: 0 0;
      }
      .select_icon_active {
        width: .544rem;
        height: .5444rem;
        background: url("../../../assets/img/shop-cart/select.png") no-repeat;
        background-position: -25px 0;
      }
      .text{
        font-size: 0.4rem;
        padding-left: .4rem;
      }
      .price{
        font-size: .4rem;
        color: #f56f82;
      }
    }
    .right{
      height: 100%;
      .btn{
        width:2.1333rem;
        height: 100%;
        background-color: #e75297;
        color: #fff;
        font-size: 0.4rem;
        line-height: 1.3066rem;
        text-align: center;
      }
    }
  }
</style>
