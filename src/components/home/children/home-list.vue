<template>
    <div class="home_list">
      <ul class="wrap">
        <li v-for="(item, index) in dataList" :key="index" @click="enterProduct(item.id)">
          <div class="imgbox" ref="lazyload" >
            <img src="http://temp.im/754x754" v-lazyload='{methods:debounce,imgUrl:item.imgUrl}'>
          </div>
          <div class="sale_status">
            <span class="best_sale" v-if="item.saleStatus===1 || item.saleStatus===3">爆品</span>
            <span class="hot_sale" v-if="item.saleStatus===2 || item.saleStatus===3">热卖</span>
          </div>
          <p class="title">{{item.title}}</p>
          <div class="price"><span>￥</span><span>{{item.price}}</span></div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'home-list',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      dataList: this.list,
      clientHeight: null,
      containerHeight: null,
      lazyel: null
    }
  },
  directives: {
    lazyload: {
      bind (el, binding, vnode, oldvnode) {
      },
      inserted (el, binding) {
        // console.log(el.getBoundingClientRect().top)
        if (el.getBoundingClientRect().top < document.documentElement.clientHeight) {
          el.src = binding.value.imgUrl
        }

        // window.addEventListener('scroll', binding.value.methods.call(this, () => {
        //   if (el.getBoundingClientRect().top < document.documentElement.clientHeight) {
        //     el.src = binding.value.imgUrl
        //   }
        // }, 300, 300))
      },
      update (el, binding) {
        // console.log(el.getBoundingClientRect().top)
        // console.log(document.documentElement.clientHeight)
        // this.getClient(el, binding)
        // console.log(el.getBoundingClientRect().top)
        // console.log(document.documentElement.clientHeight)
      }
    }
  },
  methods: {
    getClient () {
      let containerHeight = null
      window.addEventListener('scroll',
        this.debounce(() => {
          containerHeight = document.documentElement.scrollTop + document.documentElement.clientHeight
          if (containerHeight > (document.documentElement.offsetHeight - 50)) {
            // this.dataList = this.dataList.concat(this.list)
            // this.dataList.push(this.dataList)
          }
        }, 200, 200)
      )
    },
    debounce (fn, wait, time) {
      let timer = null
      let prevTime = null
      return function () {
        let nowTime = new Date().getTime()
        if (!prevTime) prevTime = nowTime
        if (nowTime - prevTime > time) {
          clearTimeout(timer)
          fn()
          prevTime = nowTime
        } else {
          clearTimeout(timer)
          timer = setTimeout(() => {
            fn()
          }, wait)
        }
      }
    },
    enterProduct (id) {
      this.$router.push({name: 'product', params: {id: id}})
    }
  },
  mounted () {
    // this.lazyel = this.$refs.lazyload
    this.getClient()
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.offsetHeight - 50)
  }
}
</script>

<style scoped lang="scss">
.home_list{
  .wrap{
    width: 100%;
    margin-top: .2666rem;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    li{
      width: 47%;
      margin-left: 2%;
      margin-bottom: .2rem;
      .imgbox{
        padding: .1rem;
        border-radius: 5px;
        background-color: #f4f4f4;
        height:  4.6rem;
        img{
          width: 100%;
        }
      }
      .sale_status{
        display: flex;
        align-items: center;
        margin-left: .2rem;
        .best_sale{
          font-size: .24rem;
          background-color:#e5686d;
          color: #fff;
          padding: .1rem;
          margin: .2rem .2rem .1rem 0;
          border-radius: 2px;
        }
        .hot_sale{
          font-size: .24rem;
          background-color:#f48f18;
          color: #fff;
          padding: .1rem;
          border-radius: 2px;
          margin: .2rem .2rem .1rem 0;
        }
      }
      .title{
        margin-left: .2rem;
        font-size: .3733rem;
      }
      .price{
        margin-left: .2rem;
        color: #b4282d;
        font-size: .4266rem;
      }
    }
  }
}
</style>
