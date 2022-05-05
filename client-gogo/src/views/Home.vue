<template>
  <div class="index-pages">
    <Header :isLogin="isLogin"></Header>
    <div>
      <div class="box"></div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      isLogin: false
    }
  },
  mounted () {
    this.isLoginFn()
  },
  methods: {
    async isLoginFn () {
    }
  }
}
</script>

<style scoped lang="less">
@import "/src/assets/components/css-function";

.box {
  .widthAndHeight(50px, 50px);
  background: red;
}
</style>
