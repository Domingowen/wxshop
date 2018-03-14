<template>
  <div class="banner">
    <ul class="banner_list" ref="banner" @touchstart="startbanner" @touchmove="movebanner" @touchend="endbanner">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-banner',
  data () {
    return {
      el: null,
      startPointX: null,
      startX: null,
      lastTime: null,
      lastX: null,
      transformX: null,
      nowIndex: null,
      ele: {},
      minX: null
    }
  },
  methods: {
    startbanner (e) {
      document.addEventListener('touchstart', this.prevenDefaut(e), false)
      this.minX = document.documentElement.clientWidth - this.el.offsetWidth
      this.el.style.webkitTransition = 'none'
      let touches = e.changedTouches[0]
      this.startPointX = touches.pageX
      this.startX = this.cssTransform('translate3d').x
      this.lastTime = new Date().getTime()
      this.lastX = touches.pageX
    },
    movebanner (e) {
      let touches = e.changedTouches[0]
      let disX = touches.pageX - this.startPointX
      this.transformX = disX + this.startX
      this.cssTransform('translate3d', '' + this.transformX + ',0,0')
      this.nowIndex = Math.round(this.transformX / document.documentElement.clientWidth)
    },
    endbanner (e) {
      this.el.style.webkitTransition = '0.5s all'
      this.transformX = this.nowIndex * document.documentElement.clientWidth
      if (this.transformX >= 0) {
        this.transformX = 0
      } else if (this.transformX <= this.minX) {
        this.transformX = this.minX
      }
      this.cssTransform('translate3d', '' + this.transformX + ',0,0')
      document.removeEventListener('touchstart', this.prevenDefaut(e), false)
    },
    prevenDefaut (e) {
      e.preventDefault()
    },
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
    }
  },
  mounted () {
    this.el = this.$refs.banner
    this.cssTransform('translate3d', '0,0,0')
    // console.log(this.elem)
    // console.log(this.cssTransform('translate3d'))
  }
}
</script>

<style scoped lang="scss">
  .banner{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .banner_list{
      width: 400%;
      height: 5.3333rem;
      display: flex;
      li{
        width: 25%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
