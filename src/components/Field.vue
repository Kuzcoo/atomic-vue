<template>
  <input class='field' :value="value" :placeholder="defaultValue" />
</template>

<script>
  module.exports = {
    props: [
      'value',
      'defaultValue'
    ]
  };
</script>

<style lang='scss'>
  @import '../styles/field.scss';
</style>