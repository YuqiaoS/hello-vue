import { isRef, ref, watch, reactive, watchEffect } from '@vue/composition-api'

export function useTest() {
  const testVar = ref(0)
  // let curVar = ref(0)
  let curVar = reactive({
    value: 0,
    ref: ref(0)
  })

  console.log('is testVar ref: ', isRef(testVar))

  // const changeCurRef = function(){
  //   curVar.ref = testVar
  // }
  const changeToNewRef = function(){
    curVar.ref = ref(0)
  }
  const changeToTestRef = function(){
    curVar.ref = testVar
  }
  const updateCurVar = function(){
    curVar.value++
    curVar.ref++
  }

  watch(()=> curVar.ref, (val) => {
    console.log('watch', val)
  })

  watch(()=> testVar.value, (val) => {
    console.log('watch testvar', val)
  })

  watchEffect(() => {
    console.log('watchEffect', curVar.value, curVar.ref, 'testVar', testVar.value) //  testVar > RefImpl
    console.log('is curVar ref: ', isRef(curVar)) // curVar > Observer
    console.log('is curVar.ref ref: ', isRef(curVar.ref)) //curVar.ref > Number 
    console.log('watchEffect', curVar.value, curVar.ref)
  })

  return {
    testVar, 
    curVar, 
    changeToTestRef, 
    changeToNewRef,
    updateCurVar
  }
}