<template>
  <div class="home">
    <h1> {{ msg }}</h1>
    <p>
      name: {{ person.name }}
    </p>
    <p>
      age: {{ person.age }}
    </p>
    <button @click="changeNameFn">改变数据</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
// @ is an alias to /src
export default {
  name: 'Index',
  setup () {
    const msg = ref('Welcome to Your Vue3.js App')
    const person = reactive({
      name: '张三',
      age: 16
    })

    function changeNameFn () {
      person.name = '格林威治'
    }

    return {
      msg,
      person,
      changeNameFn
    }
  },
  components: {}
}
</script>
