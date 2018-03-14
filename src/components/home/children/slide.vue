<template>
  <div class="container">
    <ul class="slide" ref="slide" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'slide',
  props: {
    slideOpt: {
      type: Object,
      default () {
        return {
          direction: 'y'
        }
      }
    }
  },
  data () {
    return {
      el: null,
      startPointY: null,
      startPointX: null,
      startY: null,
      startX: null,
      lastTime: null,
      lastTimeDis: null,
      lastY: null,
      lastDisY: null,
      transformY: 0,
      lastX: null,
      lastDisX: null,
      transformX: 0,
      ele: {},
      minY: null,
      minX: null
    }
  },
  methods: {
    cssTransform (attr, val) {
      if (!this.ele.transform) {
        this.ele.transform = {}
      }
      if (arguments.length > 1) {
        this.ele.transform[attr] = val
        let objVal = ''
        for (let s in this.ele.transform) {
          switch (s) {
            case 'rotate':
            case 'skewX':
            case 'skewY':
              objVal += s + '(' + this.ele.transform[s] + 'deg)'
              break
            case 'translateX':
            case 'translateZ':
            case 'translateY':
              objVal += s + '(' + this.ele.transform[s] + 'px)'
              break
            case 'translate3d':
              let arr = this.ele.transform[s].split(',')
              let data = ''
              arr.forEach(function (value, index, arr) {
                if (arr.length - 1 === index) {
                  data += value + 'px'
                } else {
                  data += value + 'px,'
                }
              })
              objVal += s + '(' + data + ')'
              break
            case 'scaleX':
            case 'scaleY':
            case 'scale':
              objVal += s + '(' + this.ele.transform[s] + ')'
              break
          }
          this.el.style.webkitTransform = this.el.style.transform = objVal
        }
      } else {
        val = this.ele.transform[attr]
        if (typeof val === 'undefined') {
          if (attr === 'scale' || attr === 'scaleX' || attr === 'scaleY') {
            val = 1
          } else {
            val = 0
          }
        }
        if (attr === 'translate3d') {
          let arr = this.ele.transform[attr].split(',')
          val = {
            x: parseInt(arr[0]),
            y: parseInt(arr[1]),
            z: parseInt(arr[2])
          }
        }
        return val
      }
    },
    touchstart (e) {
      this.minY = document.documentElement.clientHeight - this.el.offsetHeight
      this.minX = document.documentElement.clientWidth - this.el.offsetWidth
      // console.log(this.minY)
      // console.log(this.minX)
      let touches = e.changedTouches[0]
      this.startPointY = touches.pageY
      this.startPointX = touches.pageX
      this.startY = this.cssTransform('translate3d').y
      this.startX = this.cssTransform('translate3d').x
      this.lastY = this.startPointY
      this.lastX = this.startPointX
      this.lastTime = new Date().getTime()
      this.el.style.transition = 'none'
    },
    touchmove (e) {
      let touches = e.changedTouches[0]
      let disY = touches.pageY - this.startPointY
      let disX = touches.pageX - this.startPointX
      this.transformY = disY + this.startY
      this.transformX = disX + this.startX
      if (this.slideOpt.direction === 'y') {
        this.cssTransform('translate3d', '0,' + this.transformY + ',0')
      } else {
        this.cssTransform('translate3d', '' + this.transformX + ',0,0')
      }
      this.lastTimeDis = new Date().getTime() - this.lastTime
      this.lastDisY = touches.pageY - this.lastY
      this.lastDisX = touches.pageX - this.lastX
      this.lastY = touches.pageY
      this.lastX = touches.pageX
      this.lastTime = new Date().getTime()
    },
    touchend (e) {
      // let touches = e.changedTouches[0]
      let speedX = (this.lastDisX / this.lastTimeDis) * 100 ? (this.lastDisX / this.lastTimeDis) * 100 : 0
      let speedY = (this.lastDisY / this.lastTimeDis) * 100 ? (this.lastDisY / this.lastTimeDis) * 100 : 0
      this.transformY = this.cssTransform('translate3d').y
      this.transformX = this.cssTransform('translate3d').x
      let targetY = this.transformY + speedY
      let targetX = this.transformX + speedX
      if (targetY > 0) {
        targetY = 0
      }
      if (targetY < this.minY) {
        targetY = this.minY
      }
      if (targetX > 0) {
        targetX = 0
      }
      if (targetX < this.minX) {
        targetX = this.minX
      }
      this.el.style.transition = '1s all'
      if (this.slideOpt.direction === 'y') {
        this.cssTransform('translate3d', '' + this.transformX + ',0,0')
      } else {
        this.cssTransform('translate3d', '' + targetX + ',0,0')
      }
    }
  },
  mounted () {
    this.el = this.$refs.slide
    // console.log(this.el)
    this.cssTransform('translate3d', '0,0,0')
  }
}
</script>

<style scoped lang="scss">
  ul, li {
    list-style: none
  }
  .container {
    width: 100%;
    overflow: hidden;
    .slide {
      display: flex;
      height: 2rem;
      width: 16rem;
      /*width: 900%;*/
      li {
        margin-right: 0.266rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
