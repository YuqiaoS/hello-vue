<template>
    <div>
        <p>{{curVar}}</p>
        <button @click="changeCurRef">change ref</button>
        <button @click="updateCurVar">update cur</button>

    </div>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import { useTest } from "@/compositionFn/useTest"
export default {
  setup(){
    const {
        testVar,
        curVar,
        changeCurRef,
        updateCurVar
    } = useTest()

    watchEffect(() => {
        console.log('watcheffect comp', curVar.value, curVar.ref)
    })

    return {
        testVar,
        curVar,
        changeCurRef,
        updateCurVar
    }
  },
//   watch:{
//       'curVar.ref': function(val){
//         console.log('watching comp', val.value, val.ref.value)
//       }
//   }
}
</script>