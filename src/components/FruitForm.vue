<template>
  <form @submit.prevent>

    <field type='text' defaultValue="Type something">
    </field>

    <custom-select
      :value="fruitSelected"
      defaultValue="Choose a fruit"
      :options="fruitOptions"
      :onChooseItem="chooseFruit">
    </custom-select>    

    <custom-select
      combobox="true"
      defaultValue="Choose a country"
      :value="countrySelected"
      :onChange="updateCountryValue"
      :options="countryOptions"
      :onChooseItem="chooseCountry">
    </custom-select>

    <button-secondary>Annuler</button-secondary>
    <button-primary>Envoyer</button-primary>

  </form>
</template>

<script>
import CustomSelect from './CustomSelect.vue';
import Field from './Field.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import ButtonSecondary from './ButtonSecondary.vue';

  module.exports = {
    data: () => ({
      fruitOptions: [
        {id: 0, name: 'apple'},
        {id: 1, name: 'banana'},
        {id: 2, name: 'strawberry'},
        {id: 3, name: 'cherry'}
      ],
      countryOptions: [
        {id: 0, name: 'France'},
        {id: 1, name: 'Italie'},
        {id: 2, name: 'Portugal'},
        {id: 3, name: 'Espagne'}
      ],
      fruitSelected: '',
      countrySelected: ''
    }),
    methods: {
      chooseFruit(value) {
        this.fruitSelected = value;
      },
      chooseCountry(value) {
        this.countrySelected = value;
      },
      updateCountryValue(value) {
        this.countrySelected = value;
      }
    },
    components: {
      CustomSelect,
      Field,
      ButtonPrimary,
      ButtonSecondary
    }
  }
</script>

<style lang='scss'>
  form {
    padding: 2rem;
    text-align: center;

    > * {
      display: inline-block;
      margin-bottom: 1rem;
    }

    > button:first-of-type {
      margin-top: 2rem;
    }
  }
</style>