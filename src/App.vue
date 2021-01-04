<template>
  <div id="app">
    <!-- 跟路由 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'
export default Vue.extend({
  data(){
    return{
      a:1
    }
  },
  methods:{
   
  }
})
</script>
<style lang="scss"  scoped>
h1{
  color: $danger-color;
}
</style>
