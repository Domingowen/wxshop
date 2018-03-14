<template>
  <div class="tab">
    <ul class="tab_list">
      <router-link tag="li" to="/home">
        <span class="img"></span>
        <span class="text">首页</span>
      </router-link>
      <router-link tag="li" to="/shopcart">
        <span class="img"></span>
        <span class="text">购物车</span>
      </router-link>
      <router-link tag="li" to="/personcenter">
        <span class="img"></span>
        <span class="text">我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tag-change'
}
</script>
<style scoped lang="scss">
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    border-top: 1px solid #f4f4f4;
    .tab_list {
      padding: 0.1rem 1.2933rem .1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text{
          padding-top: .1rem;
          font-size: 0.32rem;
        }
      }
      li:nth-child(1) .img{
        background: url("../../assets/img/home/homepagesNoSelect.png") no-repeat center center;
        width: .666rem;
        height: .666rem;
        background-size: 100% 100%;
      }
      li:nth-child(2) .img{
        background: url("../../assets/img/home/shopCartNoSelect.png") no-repeat center center;
        width: 0.666rem;
        height: 0.666rem;
        background-size: 100% 100%;

      }
      li:nth-child(3) .img{
        background: url("../../assets/img/home/mineNoSelect.png") no-repeat center center;
        width: 0.666rem;
        height: 0.666rem;
        background-size: 100% 100%;

      }
      .router-link-active span{
        color: red;
      }
      .router-link-active:nth-child(1) .img{
        background: url("../../assets/img/home/homepagesSelect.png") no-repeat center center;
        width: 0.666rem;
        height: 0.666rem;
        background-size: 100% 100%;

      }
      .router-link-active:nth-child(2) .img{
        background: url("../../assets/img/home/shopCartSelect.png") no-repeat center center;
        width: 0.666rem;
        height: 0.666rem;
        background-size: 100% 100%;

      }
      .router-link-active:nth-child(3) .img{
        background: url("../../assets/img/home/mineSelect.png") no-repeat center center;
        width: 0.6666rem;
        height: 0.6666rem;
        background-size: 100% 100%;

      }
    }
  }
</style>
