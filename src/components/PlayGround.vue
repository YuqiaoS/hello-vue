<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
    <p>{{ computedMsg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "default msg"
    }
  },
  computed: {
    computedMsg: function() {
      return "computed: " + this.message
    }
  },
  methods: {
    setAsyncMessage: function() {
      this.message = ""
    }
  }
}
</script>