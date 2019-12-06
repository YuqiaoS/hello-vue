<template>
  <div>
    <ul id='listwithkey'>
      <li v-for="item in list" :key=item.key>{{item.val}}</li>
    </ul>
    <input type="text" v-model="currentItem">
    <button type="button" @click="update">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          key: 'a',
          val: 'a'
        },
        {
          key: 'b',
          val: 'b'
        }
      ],
      currentItem: 'a'
    }
  },
  methods: {
    update() {
      console.log('update name: ', this.currentItem)
      let a = this.list.find( item => {
        return item.key === this.currentItem
      })
      if(!a){ return}
      //a.val = Math.random(2)
      a = {key: 'a', val: Math.random(3)}
    }
  },
  watch: {
    list(newval, oldval){
      console.log(newval, oldval)
    },
    currentItem(newval){
      console.log('curritem changed to ', newval)
    }
  },
  mounted() {
    console.log(' list : ', this.$options)
    let thisEl=this;

    setTimeout(
      function(){
        console.log(' list : ', thisEl.$options)
      },
    1000)
  }
}
</script>