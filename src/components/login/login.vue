<template>
  <div class="login">
    <ul class="login_input">
      <li>
        <span>账号</span>
        <input type="text" placeholder="请输入001" v-model="userInfo.user">
      </li>
      <li>
        <span>密码</span>
        <input type="password" placeholder="请输入001" v-model="userInfo.password">
      </li>
    </ul>
    <button class="btn" @click="login">
      登录
    </button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {LocalStorage} from '../../common/api'
export default {
  name: 'login',
  data () {
    return {
      userInfo: {
        user: null,
        password: null
      }
    }
  },
  methods: {
    ...mapMutations(['SET_USER']),
    login () {
      this.SET_USER(this.userInfo)
      LocalStorage('user', this.userInfo)
      this.$router.push({name: 'personcenter'})
    }
  },
  computed: {}
  // beforeRouteEnter(to, from, next) {
  //   console.log(to)
  // }
}
</script>

<style scoped lang="scss">
  .login {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login_input {
      margin-bottom: 1rem;
      li {
        height: 1rem;
        line-height: 1rem;
        width: 6.5rem;
        margin: 0.3rem 0;
        display: flex;
        align-items: center;
        span {
          font-size: .34rem;
          width: 1rem;
        }
        input {
          background: transparent;
          border: none;
          outline: none;
          -webkit-border-radius: 0;
          width: 100%;
          height: .6rem;
          border-bottom: 1px solid #000;
          margin-left: .2rem;
          transition: .5s all;
          font-size: .34rem;
          &:focus {
            border-bottom: 1px solid #b4282d;
          }
        }
      }
    }
    .btn {
      width: 7rem;
      margin: 0 auto;
      height: 1rem;
      background-color: #e75297;
      color: #fff;
      outline: none;
      border-radius: 0;
      border: none;
      &:active {
        opacity: .8;
      }
    }
  }
</style>
