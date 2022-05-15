<template>
  <div class="home">
    <h1> {{ msg }}</h1>
    <p :style="{color: colorState ? 'green':'red' }">
      name: {{ person.name }}
    </p>
    <div>{{ colorState }}</div>
    <p :style="{color: computedSalary ? 'green':'red'}">
      age: {{ person.age }}
    </p>
    <!--    <div>computed年龄 {{ // computedAge }}</div>-->
    <ul>
      <li>{{ name }}</li>
      <li>{{ age }}</li>
      <li>{{ salary }}</li>
    </ul>
    <button @click="changeNameFn">改变数据</button>
    <br>
    <div class="father">
      我还父级组件
      <button @click="fatherToSonFn">传值给子组件</button>
    </div>
    <div>{{this.$store.state.name}}</div>
    <JumpValue ref="sonRef"></JumpValue>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect, provide } from 'vue'
import JumpValue from '@/components/JumpValue'
// 血泪史  ref  一定要.value取值  基础类型 例如 Number String Boolean 等
// reactive 仅限于 非基础类型  {},数组 或者 function等
// toRefs 用于解构数值 ...对象名
// watch 监听对象值 一定要用箭头函数  可以书写多个  一个监听多个用数组【a,b,c】
// watchEffect 用于监听一组值，不需要指定属性名  可以书写多个
// 只需要在回调函数里指明 监听的对象属性或者基础类型的值即可
//  watchEffect 可以复制给一个常量  然后执行该函数既可，停止监听

// @ is an alias to /src
export default {
  name: 'Index',
  setup () {
    const msg = ref('Welcome to Your Vue3.js App')
    const colorState = ref(true)
    const person = reactive({
      name: '张三',
      age: 16,
      salary: 6000
    })

    function changeNameFn () {
      person.name = '格林威治'
      person.age += 1
      person.salary += 1
    }

    const resPerson = toRefs(person)
    const computedSalary = computed(() => {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties,no-return-assign
      return person.salary % 2 === 0
    })
    watch(() => person.salary, (newVal, oldVal) => {
      colorState.value = newVal % 2 === 0
    })

    const watchEff1 = watchEffect(() => {
      console.log('watchEffect')
      console.log(colorState.value)
      console.log(person.salary)
    })
    watchEff1()
    watchEffect(() => {
      console.log(person.salary)
    })

    const messageStr = ref('我是给子组件的值')
    provide('fatherVal', messageStr)
    const sonRef = ref()

    function fatherToSonFn () {
      sonRef.value.sonFunction(messageStr, person)
    }

    return {
      msg,
      person,
      changeNameFn,
      ...resPerson,
      computedSalary,
      colorState,
      messageStr,
      fatherToSonFn,
      sonRef
    }
  },
  components: {
    JumpValue
  }
}
</script>

<style scoped lang="less">
.father {
  background: red;
  color: #fff;
  padding: 14px 0;
}
</style>
