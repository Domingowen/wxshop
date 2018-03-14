<template>
  <div class="shopcart">
    <div class="list">
      <list-content :itemData="shopCartList" @select="selectItem" @reduce="reduce" @add="add" @delete="deleteProduct"></list-content>
    </div>
    <bottom-account :isSelectAll="isSelectAll" :selectNumber="selectArr" :totalPrice="totalPrice" @selectAll="selectAll"></bottom-account>
  </div>
</template>

<script>
import ListContent from './children/list-content'
import BottomAccount from './children/bottom-account'

export default {
  name: 'index',
  data () {
    return {
      aaa: 111,
      shopCartList: [
        {
          id: 1,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        },
        {
          id: 2,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        },
        {
          id: 3,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        },
        {
          id: 4,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        },
        {
          id: 5,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        },
        {
          id: 6,
          title: '考拉妈妈',
          price: '2008',
          speceList: [{
            specId: 1,
            spec: '颜色',
            specValueId: 1,
            specValue: '白色'
          }, {
            specId: 2,
            spec: '版本',
            specValueId: 3,
            specValue: '基础'
          }],
          imgUrl: '../../images/smallTip/1.png',
          stock: 6,
          num: 1
        }
      ],
      listData: [],
      isSelectAll: false,
      selectArr: [],
      totalPrice: 0
    }
  },
  components: {
    ListContent,
    BottomAccount
  },
  methods: {
    selectItem (oIndex) {
      this.shopCartList = this.shopCartList.filter((value, index, arr) => {
        if (oIndex === index) {
          value.isChecked = !value.isChecked
          if (value.isChecked) {
            this.selectArr.push(value.id)
          } else {
            this.selectArr.splice(this.selectArr.indexOf(value.id), 1)
          }
        }
        return value
      })
      if (this.selectArr.length === this.shopCartList.length) {
        this.isSelectAll = true
      } else {
        this.isSelectAll = false
      }
    },
    selectAll () {
      this.isSelectAll = !this.isSelectAll
      if (this.isSelectAll) {
        this.selectArr = []
        this.shopCartList = this.shopCartList.filter((value, index, arr) => {
          value.isChecked = true
          this.selectArr.push(value.id)
          console.log(this.selectArr)
          return value
        })
      } else {
        this.shopCartList = this.shopCartList.filter((value, index, arr) => {
          value.isChecked = false
          this.selectArr = []
          return value
        })
      }
    },
    reduce (oIndex) {
      this.shopCartList = this.shopCartList.filter((value, index, arr) => {
        if (oIndex === index) {
          if (value.num <= 1) {
            value.num = 1
          } else {
            value.num--
          }
        }
        return value
      })
    },
    add (oIndex) {
      this.shopCartList = this.shopCartList.filter((value, index, arr) => {
        if (oIndex === index) {
          if (value.num >= value.stock) {
            value.num = value.stock
          } else {
            value.num++
          }
        }
        return value
      })
    },
    deleteProduct (oIndex, id) {
      if (this.selectArr.indexOf(id) !== -1) {
        this.selectArr.splice(this.selectArr.indexOf(id), 1)
      }
      this.shopCartList.splice(oIndex, 1)
      if (this.shopCartList.length === this.selectArr.length) {
        this.shopCartList.length !== 0 ? this.isSelectAll = true : this.isSelectAll = false
      }
    }
  },
  watch: {
    shopCartList () {
      // console.log(true)
      this.totalPrice = 0
      this.shopCartList.forEach((value, index, arr) => {
        // console.log(value)
        if (value.isChecked) {
          this.totalPrice += value.num * value.price
        }
      })
    }
  },
  updated () {
    // console.log(this.listData)
  },
  created () {
    for (let i = 0; i < this.shopCartList.length; i++) {
      this.shopCartList[i].isChecked = false
    }
  }
}
</script>

<style scoped lang="scss">
  .shopcart {
    .list {
      margin-bottom: 2.6rem;
    }
  }
</style>
