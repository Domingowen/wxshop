import {SET_USER, SET_POP, SET_TAB} from './mutation-type'
export default {
  [SET_USER] (state, user) {
    state.userInfo = user
  },
  [SET_POP] (state, val) {
    state.showPop.isShow = val
  },
  [SET_TAB] (state, val) {
    state.showTab = val
  }
}
