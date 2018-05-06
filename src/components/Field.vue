<template>
  <input 
    class='field' 
    :value="value" 
    :placeholder="defaultValue" 
    @input="$emit('input', $event.target.value)"/>
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