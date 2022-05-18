<template>
  <div class="login-page" id="login-page">
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>
    <el-form
        label-position="top"
        ref="loginFormRef"
        label-width="100px"
        :model="loginForm"
        hide-required-asterisk
    >
      <el-form-item
          prop='username'
          label="username"
          :rules="[
      {
        required: true,
        message: 'Please input username',
        trigger: 'blur',
      }
    ]"
      >
        <el-input v-model='loginForm.username' placeholder="Please input username"></el-input>
      </el-form-item>
      <el-form-item
          class="clearfix"
          label="password"
          prop='password'
          :rules="[
      {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
      }
    ]"
      >
        <el-input v-model='loginForm.password' show-password placeholder="Please input password"></el-input>
      </el-form-item>
      <el-form-item class="login_btn_box clearfix">
        <el-button @click="login()" class="login_btn" round>Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
  name: 'Login',
  setup () {
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const loginFormRef = ref()
    onMounted(() => {
      console.log('我执行了')
    })
    const login = () => {
      loginFormRef.value.validate((valid) => {
        if (valid) {
          console.log(1)
        }
      })
    }
    return {
      login,
      loginForm,
      loginFormRef
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: #fff;

  form {
    width: 500px;
  }

  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
