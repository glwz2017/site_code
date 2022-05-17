<template>
  <div class="login">
    <input type="text" placeholder="用户名">
    <br><input type="text" placeholder="密码">
    <br><br>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script>
import 'element-plus/es/components/button/style/css'
import { ElButton } from 'element-plus'

export default {
  name: 'Login',
  setup () {

  },
  components: {
    ElButton
  }
}
</script>

<style scoped lang="less">

</style>
