<template>
  <div class="son">
    <h2>我是子组件
      [即将输出父组件的值]:{{ p1 }}
      {{ kk.name }}
      <br>我是vuex的值
      {{storeName}}
    </h2>

    <button @click="changeVuexFn">改变vuex里的值</button>
  </div>
</template>

<script>
import { computed, inject, reactive } from 'vue'
import { useStore } from 'vuex'

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

    const myStore = useStore()
    const storeName = computed(() => {
      return myStore.state.name
    })

    function changeVuexFn () {
      myStore.dispatch('changeVuexState')
    }

    return {
      p1,
      sonFunction,
      kk,
      storeName,
      changeVuexFn
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
