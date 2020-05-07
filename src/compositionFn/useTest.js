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

  // original ref retains reactivity along with the assigned attr of the reactive piece
  const changeToTestRef = function(){
    curVar.ref = testVar
  }
  const changeToCurrent = function(){
    // assigning just to itself doesn't work. but you can ref-wrap the val
    curVar.ref = ref(curVar.ref)
  }

  // this actually just updates the ref and trigger reactivity. ofc.
  const changeRefToNewVal = function(){
    curVar.ref = 33
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
    changeRefToNewVal,
    changeToCurrent,
    updateCurVar
  }
}