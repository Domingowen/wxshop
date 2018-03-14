<template>
  <div class="wrap">
    <div class="wrap_content" v-for="(item, index) in itemData" :key="index">
      <div class="left">
        <div class="select" @click="select(index)">
          <span :class="[item.isChecked?'select_icon_active':'select_icon_noactive']"></span>
        </div>
        <div class="imgbox">
          <img
            src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
            alt="">
        </div>
        <div class="middle">
          <div class="top">
            <p class="title">{{item.title}}</p>
            <div class="speclist">
              <div class="spec" v-for="(items, index) in item.speceList" :key="index">
                <span>{{items.spec}}</span>
                <span>{{items.specValue}}</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <span @click="reduce(index)">-</span>
            <span>{{item.num}}</span>
            <span @click="add(index)">+</span>
          </div>
        </div>
      </div>
      <div class="right">
        <p class="price">￥{{item.price}}</p>
        <span class="delete" @click="deleteProduct(index,item.id)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-content',
  props: {
    itemData: {},
    itemIndex: {},
    itemChecked: {}
  },
  data () {
    return {
      listData: this.itemData
    }
  },
  methods: {
    select (oIndex) {
      this.$emit('select', oIndex)
    },
    reduce (oIndex) {
      this.$emit('reduce', oIndex)
    },
    add (oIndex) {
      this.$emit('add', oIndex)
    },
    deleteProduct (oIndex, id) {
      this.$emit('delete', oIndex, id)
    }
  },
  updated () {
    // console.log(this.listData)
  },
  mounted () {
    // console.log(this.listData)
    // console.log(this.itemData)
  }
}
</script>

<style scoped lang="scss">
  .wrap_content {
    display: flex;
    height: 2.70666rem;
    justify-content: space-between;
    .left {
      display: flex;
      height: 100%;
      .select {
        display: flex;
        align-items: center;
        padding-left: .2rem;
        padding-right: .2rem;
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
      }
      .imgbox {
        width: 2.1066rem;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          background-color: #f4f4f4;
        }
      }
      .middle {
        display: flex;
        flex-direction: column;
        padding-left: .4rem;
        .top {
          padding-top: .34rem;
          .title {
            font-size: .4rem;
          }
          .speclist {
            font-size: .37333rem;
            display: flex;
            padding-top: .1rem;
            .spec {
              padding-right: .1rem;
              opacity: 0.8;
            }
          }
        }
        .bottom {
          display: flex;
          font-size: .3733rem;
          padding-top: .46rem;
          span {
            width: .7rem;
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            border: 1px solid #f1f1f1;
            margin-right: .1rem;
          }
        }
      }
    }
    .right {
      padding-top: .34rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: .3rem;
      .price {
        font-size: 0.4rem;
        margin-bottom: 1.1rem;

      }
      .delete {
        width: .28rem;
        height: .36rem;
        background: url("../../../assets/img/shop-cart/delete.png") no-repeat;
        background-size: 100% 100%;
      }
    }

  }
</style>
