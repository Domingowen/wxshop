<template>
  <div class="sku">
    <div class="select_title">
      <span>选择</span>
      <span>颜色</span>
      <span>版本</span>
    </div>
    <div class="spec_list" v-for="(item, index) in spec" :key="index">
      <p class="title">{{item.title}}</p>
      <div class="spec" >
        <span v-for="(items, oIndex) in item.items" :key="oIndex" @click="select(items.sid, items.id ,items.name)">{{items.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'product-select',
  data() {
    return {
      skuResult: {},
      specList: this.productSpeclist,
      spec: this.productSpec,
      selectId:[]
    }
  },
  props: {
    productSpec: {},
    productSpeclist: {}
  },
  methods: {
    select (sid, id, title) {
      console.log(id)
      console.log(this.skuResult)
      console.log(title)
    }
  },
  mounted() {
    let _this=this
    function getObjKeys(obj) {
      if (obj !== Object(obj)) throw new TypeError('Invalid object')
      let keys = []
      for (let key in obj)
        if (Object.prototype.hasOwnProperty.call(obj, key))
          keys[keys.length] = key
      return keys
    }

    //把组合的key放入结果集SKUResult
    function add2SKUResult(combArrItem, sku) {
      let key = combArrItem.join(";")
      if (_this.skuResult[key]) {//SKU信息key属性·
        _this.skuResult[key].amount += sku.amount
        _this.skuResult[key].price = sku.price
        // _this.skuResult[key].title = sku.name
      } else {
        _this.skuResult[key] = {
          amount: sku.amount,
          price: sku.price,
          // title: sku.name
        }
      }
    }

    //初始化得到结果集
    function initSKU() {
      let i, j, skuKeys = getObjKeys(_this.specList)
      for (i = 0; i < skuKeys.length; i++) {
        let skuKey = skuKeys[i] //一条SKU信息key
        let sku = _this.specList[skuKey] //一条SKU信息value
        let skuKeyAttrs = skuKey.split(";") //SKU信息key属性值数组
        skuKeyAttrs.sort(function (value1, value2) {
          return parseInt(value1) - parseInt(value2)
        })

        //对每个SKU信息key属性值进行拆分组合
        let combArr = arrayCombine(skuKeyAttrs)
        for (j = 0; j < combArr.length; j++) {
          add2SKUResult(combArr[j], sku)
        }

        //结果集接放入SKUResult
        _this.skuResult[skuKeyAttrs.join(";")] = {
          amount: sku.amount,
          price: sku.price,
          title: sku.name
        }
        console.log(_this.skuResult)
        let b = 0
        for(let a in _this.skuResult){
          b++
        }
        console.log(b)
      }
    }

    /**
     * 从数组中生成指定长度的组合
     */
    function arrayCombine(targetArr) {
      if (!targetArr || !targetArr.length) {
        return []
      }
      let len = targetArr.length
      let resultArrs = []

      // 所有组合
      for (let n = 1; n < len; n++) {
        let flagArrs = getFlagArrs(len, n)
        while (flagArrs.length) {
          let flagArr = flagArrs.shift()
          console.log(flagArr)
          let combArr = []
          for (let i = 0; i < len; i++) {
            // console.log(flagArr[i])
            flagArr[i] && combArr.push(targetArr[i])
          }
          console.log(combArr)
          resultArrs.push(combArr)
        }
      }
      return resultArrs
    }


    /**
     * 获得从m中取n的所有组合
     */
    function getFlagArrs(m, n) {
      console.log(n)
      if (!n || n < 1) {
        return []
      }
      let resultArrs = [],
        flagArr = [],
        isEnd = false,
        i, j, leftCnt
      for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0
      }
      resultArrs.push(flagArr.concat())
      while (!isEnd) {
        leftCnt = 0
        for (i = 0; i < m - 1; i++) {
          if (flagArr[i] === 1 && flagArr[i + 1] === 0) {
            for (j = 0; j < i; j++) {
              flagArr[j] = j < leftCnt ? 1 : 0
            }
            flagArr[i] = 0
            flagArr[i + 1] = 1
            let aTmp = flagArr.concat()
            // console.log(aTmp)
            resultArrs.push(aTmp)
            if (aTmp.slice(-n).join("").indexOf('0') === -1) {
              isEnd = true
            }
            break
          }
          flagArr[i] === 1 && leftCnt++
        }
      }
      console.log(resultArrs)
      return resultArrs
    }

    initSKU()
  }
}
</script>
<style scoped lang="scss">
  .sku {
    /*border-bottom: 10px solid #f9f9f9;*/
    padding-bottom: .2rem;
    .select_title {
      padding: 0.266rem;
      display: flex;
      align-items: center;
      span {
        font-size: 0.4rem;
        color: #000;
        opacity: .7;
        padding-right: .2rem;
      }
    }
    .spec_list {
      padding-left: .2666rem;
      padding-bottom: .2rem;
      .title {
        font-size: .3733rem;
      }
      .spec {
        display: flex;
        align-items: center;
        padding-top: .2rem;
        span {
          padding: .25rem;
          border: 1px solid #f1f1f1;
          font-size: .34666rem;
          margin-right: .166rem;
        }
      }
    }
  }
</style>
