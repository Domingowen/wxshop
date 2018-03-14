<template>
  <div class="product">
    <product-banner class="banner-box">
      <li><img src="http://yanxuan.nosdn.127.net/503940abfd0060869adc71285131368d.jpg?imageView&thumbnail=750x0&quality=75" alt=""></li>
      <li><img src="http://yanxuan.nosdn.127.net/69b63e4877b183e064aa61149f8d9d64.jpg?imageView&thumbnail=750x0&quality=75" alt=""></li>
      <li><img src="http://yanxuan.nosdn.127.net/5b710a84e9dca6316ce7def0d47b1149.jpg?imageView&thumbnail=750x0&quality=75" alt=""></li>
      <li><img src="http://yanxuan.nosdn.127.net/d574a422a7a727b9f9211bfa51a6c17b.jpg?imageView&thumbnail=750x0&quality=75" alt=""></li>
    </product-banner>
    <div class="product_text">
      <p class="title">好的生活</p>
      <p class="brief">忙碌的日子, 来一碗鸡汤暖暖胃</p>
      <p class="price">￥200</p>
    </div>
    <div class="product_select">
      <product-select :product-spec="spec" :product-speclist="specNum"></product-select>
    </div>
    <div class="product_number">
      <span>-</span>
      <span>1</span>
      <span>+</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapMutations} from 'vuex'
import ProductBanner from './children/product-banner'
import ProductSelect from './children/product-select'
export default {
  name: 'product-detail',

  data () {
    return {
      "spec": [
        {
        "title": "颜色",
        "items": [{
          "sid": 1,
          "id": 1,
          "name": "白色",
          "stock": 0
        }, {
          "sid": 1,
          "id": 2,
          "name": "黑色",
          "stock": 6
        }]
       },
        {
        "title": "版本",
        "items": [{
          "sid": 3,
          "id": 3,
          "name": "普通版",
          "stock": 6
        }, {
          "sid": 3,
          "id": 4,
          "name": "高级版",
          "stock": 6
        }]
      }
      ],
      "specNum": {
        "1;3": {
          "amount": 3,
          "price": "2008.80",
          "name": "白色;普通版"
        },
        "1;4": {
          "amount": 0,
          "price": "2008.80",
          "name": "白色;高级版"
        },
        "2;3": {
          "amount": 6,
          "price": "2008.80",
          "name": "黑色;普通版"
        },
        "2;4": {
          "amount": 6,
          "price": "2008.80",
          "name": "黑色;高级版"
        }
      }
    }
  },
  components: {
    ProductBanner,
    ProductSelect
  },
  computed: {},
  methods: {
    ...mapMutations(['SET_TAB'])
  },
  // beforeRouteUpdate (to, from, next) {
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   this.SET_TAB(true)
  //   next()
  // },
  created () {
    this.SET_TAB(false)
    // console.log(this.$route.params)
  },
  destroyed () {
    this.SET_TAB(true)
  }
}
</script>

<style scoped lang="scss">
  .product{
    .product_text{
      padding:.266rem .266rem .2666rem .2666rem;
      border-bottom: 8px solid #f9f9f9;
      border-top: 8px solid #f9f9f9;
      .title{
        font-size: .4rem;
        height: .8rem;
        line-height: .8rem;
      }
      .brief{
        font-size: .3466rem;
        color: #000;
        opacity: .7;
        height: .6rem;
        line-height: .6rem;
      }
      .price{
        font-size: .4rem;
        color: #b4282d;
        padding-top: .2rem;
      }
    }
    .product_number{
      display: flex;
      align-items: center;
      padding-left: .2666rem;
      span{
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .34666rem;
        border: 1px solid #f1f1f1;
        margin-right: .2rem;
      }
    }
  }
</style>
