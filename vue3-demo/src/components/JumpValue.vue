<template>
  <div class="son">
    <h2>我是子组件
      [即将输出父组件的值]:{{ p1 }}
      {{kk.name}}
    </h2>
  </div>
</template>

<script>
import { inject, reactive } from 'vue'

export default {
  name: 'JumpValue',
  setup () {
    const p1 = inject('fatherVal')
    console.log(p1.value)
    let kk = reactive({})

    function sonFunction (val, person) {
      console.log(val.value)
      kk = person
      console.log(kk)
    }

    return {
      p1,
      sonFunction,
      kk
    }
  }
}
</script>

<style scoped lang="less">
.son {
  background: pink;
  padding: 14px 0;
}
</style>
