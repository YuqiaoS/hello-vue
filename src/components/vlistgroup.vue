<template>
  <div>
    {{ this.id }}
    <div v-for="(item, index) in blist" :key="index">
		<p>a:{{ item.a }} b:{{ item.b }}</p>
      <v-select
        @change="printb"
        prepend-icon="language"
        :items="alist"
        v-model="item.a"
        ></v-select
      >
      <v-select
        @change="printb"
        prepend-icon="language"
        :items="alist"
        v-model="item.b"
        ></v-select
      >
    </div>
  </div>
  <!-- <v-select prepend-icon="language" :items="alist" v-model="sval"></v-select> -->
</template>
<script>
export default {
  data: function() {
    return {
      id: "hello",
      items: { a: "a", b: "b" },
      alist: ["1", "2", "3", "4"],
      blist: [{ a: 1, b: 2 }, { a: 3, b: 4 }],
      sval: 2
    }
  },
  methods: {
    printb: function() {
      console.log(this.blist)
    }
  },
  watch: {
    blist: function(val) {
      console.log("blist change", val)
    }
  }
}
</script>