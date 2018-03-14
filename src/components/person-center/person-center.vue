<template>
  <div class="personcenter">
    <div class="header">
      <img src="../../assets/img/personcenter/avatar.jpg" alt="">
    </div>
    <div class="allorder">
      <span>我的订单</span>
      <span class="icon">查看全部订单</span>
    </div>
    <ul class="orderlist">
      <li>
        <img src="../../assets/img/personcenter/pending-payment.png" alt="待付款">
        <span>待付款</span>
        <span class="tip"></span>
      </li>
      <li>
        <img src="../../assets/img/personcenter/waniting-for-delivery.png" alt="待发货">
        <span>待发货</span>
        <span class="tip"></span>
      </li>
      <li>
        <img src="../../assets/img/personcenter/receipt-of-goods.png" alt="待收货">
        <span>待收货</span>
        <span class="tip"></span>
      </li>
      <li>
        <img src="../../assets/img/personcenter/to-be-evaluated.png" alt="待评价">
        <span>待评价</span>
        <span class="tip"></span>
      </li>
      <li>
        <img src="../../assets/img/personcenter/all-orders.png" alt="退货/退款">
        <span>退货/退款</span>
        <span class="tip"></span>
      </li>
    </ul>
    <ul class="otherlist">
      <li>
        <span class="discount">优惠券列表</span>
      </li>
      <li>
        <span class="stores">附近门店</span>
      </li>
      <li>
        <span class="addr">地址管理</span>
      </li>
      <li>
        <span class="feedback">反馈意见</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'person-center',
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['SET_POP'])
  },
  computed: {
    ...mapState(['userInfo'])
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  mounted () {
    if (!this.userInfo) {
      this.SET_POP(true)
    }
  }
}
</script>

<style scoped lang="scss">
  .personcenter {
    position: relative;
    height: 100%;
    background-color: #f9f9f9;
    .header {
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f4f4f4;
      background-color: #f9f9f9;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }
    .allorder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem 0.4rem;
      font-size: 0.26666rem;
      border-bottom: 1px solid #f4f4f4;
      background-color: #fff;
    }
    .orderlist {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 0.3rem;
      padding-bottom: .2rem;
      border-bottom: 8px solid #f9f9f9;
      background-color: #fff;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: #fff;
        img {
          height: 0.5333rem;
          /*width: 100%;*/
          margin-bottom: 0.4rem;
        }
        span {
          font-size: 0.3466rem;
        }
        .tip {
          position: absolute;
          left: 0;
          top: -5px;
          width: 10px;
          height: 10px;
          background-color: #e75297;
          border-radius: 50%;
        }
      }
    }
    .otherlist {
      background-color: #fff;
      li {
        height: 1.1333rem;
        display: flex;
        align-items: center;
        font-size: .32rem;
        border-bottom: 1px solid #f1f1f1;
        .discount {
          background: url("../../assets/img/personcenter/coupon.png") no-repeat;
          background-size: .58rem .38rem;
          background-position: 0.2666rem center;
          width: 100%;
          padding-left: 1.12rem;
          height: 100%;
          line-height: 1.2rem;
        }
        .stores {
          background: url("../../assets/img/personcenter/store.png") no-repeat;
          background-size: .5066rem .44rem;
          background-position: 0.2666rem center;
          width: 100%;
          padding-left: 1.12rem;
          height: 100%;
          line-height: 1.2rem;
        }
        .addr {
          background: url("../../assets/img/personcenter/address.png") no-repeat;
          background-size: .4933rem .4933rem;
          background-position: 0.2666rem center;
          width: 100%;
          padding-left: 1.12rem;
          height: 100%;
          line-height: 1.2rem;
        }
        .feedback {
          background: url("../../assets/img/personcenter/feedback.png") no-repeat;
          background-size: .42666rem .42666rem;
          background-position: 0.2666rem center;
          width: 100%;
          padding-left: 1.12rem;
          height: 100%;
          line-height: 1.2rem;
        }
      }
    }
  }
</style>
