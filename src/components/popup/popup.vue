<template>
  <div class="container" v-if="showPop.isShow" @touchstart="prevent">
    <div class="mark"></div>
    <div class="popup">
      <p class="title">{{showPop.title}}</p>
      <span class="close" @touchstart="close"></span>
      <div class="btn">
        <button @touchstart="confirmFn">{{showPop.btn}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'popup',
  data () {
    return {}
  },
  computed: {
    ...mapState(['showPop'])
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['SET_POP']),
    confirmFn () {
      this.SET_POP(false)
      this.$router.push({name: 'login'})
    },
    close () {
      this.SET_POP(false)
    },
    prevent () {
      event.preventDefault()
    }
  },
  destroyed () {
  }
}
</script>

<style scoped lang="scss">
  .container {
    .mark {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      opacity: .7;
      background-color: #000;
    }
    .popup {
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -3.5rem;
      margin-top: -2rem;
      width: 7rem;
      height: 4rem;
      z-index: 11;
      .close {
        position: absolute;
        right: .2rem;
        top: .2rem;
        background: url("../../assets/img/popup/close.png") no-repeat;
        background-size: 100% 100%;
        width: .4rem;
        height: .4rem;
      }
      .title {
        height: 2.5rem;
        background-color: #3cb971;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4266rem;
        color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .btn {
        height: 1.5rem;
        width: 100%;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          outline: none;
          border: none;
          background: #3cb971;
          color: #fff;
          width: 2rem;
          height: .8rem;
          line-height: .8rem;
          border-radius: 5px;
        }
      }
    }
  }
</style>
