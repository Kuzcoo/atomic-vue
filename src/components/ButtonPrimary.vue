<template>
 <Button class='button-primary'>
    <slot></slot>
 </Button>
</template>

<script>
import Button from './Button.vue';

  module.exports = {
    components: {
      Button
    }
  }
</script>

<style lang='scss'>
  @import '../styles/button-primary.scss';
</style>