<template>
    <v-flex shrink :class="'bordera'" >
        <!--<div > this is a block <slot></slot></div>-->
        <v-flex align-self-end :class="'blockh'"> this isss a block <slot></slot></v-flex>
    </v-flex>
</template>

<script>
export default {
    created(){
        this.$emit('createdme', 'hello')
    }
}
</script>
<style>
.bordera {
  border: black 1px solid;
}
.blockh {
    height: 50px;
}
</style>