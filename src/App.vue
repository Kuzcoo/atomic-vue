<template>
  <div id='app'>
    <fruit-form></fruit-form>
  </div>
</template>

<script>
  import FruitForm from './components/FruitForm.vue';

  module.exports = {
    components: {
      FruitForm
    }
  }
</script>

<style lang='scss'>
  @import './App.scss';
</style>