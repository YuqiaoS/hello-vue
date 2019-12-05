<template>
    <div class="flexdiv">
        <div class="flexbox">
            one 
        </div>
        <div class="flexbox">
            two 
        </div>
        <div class="flexbox" style="margin-top: auto;">
            threeee
        </div>
        <button type="button" @click="createevent">createevent</button>
    </div>
</template>

<script>
export default {
    name: 'flexbox', 
    sockets: {

    },
    methods: {
        createevent(){
            console.log('emitting event')
            this.$emit('createdme', 'hellome')       
        }
    },
    created() {
        console.log(this.$options.name, 'created', 'options:', this.$options, this.$data)
        this.createevent()
    },
    mounted(){
        console.log(this.$options.name, ' mounted')
    }
}
</script>

<style>
.flexdiv {
    display : flex;
    flex-direction: column;
}
.flexbox {
    flex: 1 1 auto;
    border: 1px steelblue solid;
}
</style>
