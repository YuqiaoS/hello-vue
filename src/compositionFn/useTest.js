import { ref, watch, reactive, watchEffect } from '@vue/composition-api'

export function useTest() {
  const testVar = ref(0)
  // let curVar = ref(0)
  let curVar = reactive({
    value: 0,
    ref: ref(0)
  })

  const changeCurRef = function(){
    curVar.ref = testVar
  }
  const updateCurVar = function(){
    curVar.value++
    curVar.ref++
  }

  watch(()=> curVar, (val) => {
    console.log('watch', val.value, val.ref)
  })

  watchEffect(() => {
    console.log('watchEffect', curVar.value, curVar.ref)
  })

  return {
    testVar, 
    curVar, 
    changeCurRef, 
    updateCurVar
  }
}