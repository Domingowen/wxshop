<template>
  <div id="app">
    <router-view/>
    <tab-change v-if="showTab"></tab-change>
    <popup></popup>
  </div>
</template>

<script>
import TabChange from '@/components/tab/tab-change'
import Popup from '@/components/popup/popup'
import {mapState} from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    TabChange,
    Popup
  },
  computed: {
    ...mapState(['showTab'])
  }
}
</script>

<style lang="scss">
  @import 'common/resetcss.css';
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
