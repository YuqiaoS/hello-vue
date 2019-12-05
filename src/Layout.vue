
<template>
  <v-app>
    <v-navigation-drawer class="blue lighten-3" v-model="drawersClosed" app clipped left>Drawer l</v-navigation-drawer>
    <v-navigation-drawer class="blue lighten-3" v-model="drawersClosed" app clipped right>Drawer r</v-navigation-drawer>

    <v-toolbar text-md-center app clipped-right>Toolbar</v-toolbar>
    <v-content>
      <v-container text-md-center  justify-end>
        <!--hello vue. im in the content-->
        <v-layout>
          <v-layout shrink column justify-space-between>
            <vflex shrink align-start >133</vflex>
            <vflex>1</vflex>
            <v-spacer></v-spacer>
            <vflex justify-end align-self-end>1</vflex>
            <v-btn @click.stop="toggleFS">toggle fullscreen</v-btn>
          </v-layout>
          <v-layout v-on:createdme="printevent">
            <div v-on:createme="printevent">
              <flexbox-layout v-on:createdme="printevent"></flexbox-layout>
            </div>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>

    <!-- this is hidden behidn the first toolbar. can't be moved down -->
    <v-toolbar
      height="40"
      fixed
      bottom
      app
      d-block
      justify-center
      text-center
    >well im at the bottomdfsdf
    </v-toolbar>
  </v-app>
</template>

<script>
/* eslint-disable */
import Vflex from "./components/Vflex.vue";
import FlexboxLayout from "./components/FlexboxLayout.vue"
import ABlock from "./components/ABlock.vue"

export default {
  name: "Layout",
  components: {
    Vflex,
    FlexboxLayout,
    ABlock
  },
  data() {
    return {
      fullscreen: false,
      drawersClosed: false,
      'al/si': { a: 1},
      arr: [{b: 2}]
      //
    };
  },
  customOpt:'',
  methods: {
    closeDrawers: function() {
      this.closeDrawers=true;
    },
    exitFS() {
      this.fullscreen= false;
    },
    toggleFS() {
      this.fullscreen=!this.fullscreen;
      this.drawersClosed = !this.drawersClosed;
    },
    printevent(msg){
      console.log('printing event')
      console.log(msg)
    }
  },
  created(){
    // console.log(this.name, this.data, this.$data) //undefined, undefined
        console.log(this.$options.name, 'created', 'options:', this.$options, this.$data)
        const data = JSON.parse(JSON.stringify(this.$data))
        console.log(data, Object.assign({}, data))
        for( let d in data){
          console.log(d)
        }

        this.$watch(function(){
          return this['al/si']
        }, function(val){
          console.log('al/si changed', val)
        },{
          deep: true
        })

        this.arr = [{b: 2}]
  },
  mounted(){
    console.log(this.$options.name, 'mounted')
    // this['al/si'].a = 2
  
  },
  watch: {
    'arr': function(val) {
      console.log('arr changed', val)
    }
  }
};
</script>

<style>
.bordera {
  border: black 1px solid;
}
</style>