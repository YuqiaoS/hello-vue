
<template>
<div>
<div id='msg'>{{ msg }}</div>
<input type='text' v-model="loop"/>
<button @click="sendmsg(loop)">send msg </button>

<input type='text' v-model="input"/>
<button @click="fetchGlobal(input)">fetch global</button>

<input type='text' v-model="ackInput"/>
<button @click="sendAck(ackInput)">Ack Input</button>

</div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'io',
  data() {
    return {
      msg: 'none',
      loop: null,
      input: null,
      ackInput: null,
      io: null,
      obj: {
        a: 1,
        b: '2'
      }
    }
  },
  methods: {
    sendmsg(val) {
      this.$socket.emit('hello', val)
    },
    fetchGlobal(val) {
      this.$socket.emit('fetchGlobal', val)
    },
    sendAck(val){
      this.io.emit('ack', val, function(data){
        console.log(data)
      })
    }
  },
  computed: {
    msgC() {
      return this.msg;
    } 
  },
  sockets1: {
    greet(val) {
      console.log(val)
      this.msg=val
    },
    msg(val) {
      this.msg=val
    },
    ack_res(val, ack_cb) {
      console.log(val)
      console.log(ack_cb)
      ack_cb(val)
    }
  },
  sockets: {
    connect(msg) {
      console.log('event connect', msg)
    },
    connect_error(msg) {
      console.log('event connect_error', msg)
    },
    disconnect(msg) {
      console.log('event disconnect', msg)
    },
    error(msg) {
      console.log('event error', msg)
    }
  },
  created(){
    this.obj = {a:1, b: 2}
  },
  watch: {
    'obj.a' : function(val) {
      console.log('obj.a has changed', val)
    },
    'obj.b' : function(val) {
      console.log('obj.b has changed', val)
    },
    'obj' : function(val) {
      console.log('obj has changed', val)
    },
  },
  mounted(){
    // let socket = io('http://127.0.0.1:5000')
    // io.on('connect', function(){
    //   socket.emit()
    // })
    // this.io = socket;
    // socket.on('ack_res', (val, ack_cb)=>{
    //   console.log(val)
    //   console.log(ack_cb)
    //   ack_cb(val)
    // })
  }
}
</script>
