<template>
    <div>
        <p>curvar {{curVar}}</p>
        <p>testvar {{testVar}}</p>
        <button @click="updateCurVar">update cur</button>
        <button @click="changeToTestRef">change to test ref</button>
        <button @click="changeToNewRef">change to new ref</button>
        <button @click="changeToCurrent">change to current ref</button>
        <button @click="changeRefToNewVal">change ref to value</button>
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
        changeToNewRef,
        changeToTestRef,
        changeRefToNewVal,
        updateCurVar,
        changeToCurrent
    } = useTest()

    watchEffect(() => {
        console.log('watcheffect comp', curVar.value, curVar.ref)
    })

    return {
        testVar,
        curVar,
        changeToNewRef,
        changeToTestRef,
        changeRefToNewVal,
        updateCurVar,
        changeToCurrent
    }
  },
//   watch:{
//       'curVar.ref': function(val){
//         console.log('watching comp', val.value, val.ref.value)
//       }
//   }
}
</script>