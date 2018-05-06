<template>
  <div
    class="select"
    v-bind:class="{'is-open': isOpen}"
    @mousedown="toggleSelect"
    @keydown.stop="handleKeyDown">

    <field 
      type="text"
      :readonly="!!!combobox"
      :value="value"
      :defaultValue="defaultValue"
      @focus.native="handleFocus"
      @blur.native="closeSelect"
      @input="updateValue">
    </field>
    <caret-icon class="select__caret"></caret-icon>

    <list class="select__list">
      <list-item
        v-for="option, i in getOptions()"
        :class="{'is-focus': focusIndex === i}"
        @mousedown.native="onChooseItem(option.name)">
        {{ option.name }}
      </list-item>
    </list>

  </div>
</template>

<script>
  import Field from './Field.vue';
  import List from './List.vue';
  import ListItem from './ListItem.vue';
  import CaretIcon from './CaretIcon.vue';

  const KEY = {
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    UP: 38,
    DOWN: 40
  };

  module.exports = {
    props: [
      "value",
      "defaultValue",
      "options",
      "combobox",
      "onChange",
      "onChooseItem"
    ],
    data: function () {
      return {
        isOpen: false,
        focusIndex: -1,
        filteredOptions: (this.combobox ? this.options : null)
      };
    },
    methods: {
      toggleSelect(e) {
        this.isOpen = !this.isOpen;
        this.focusIndex = -1;
      },
      closeSelect() {
        this.isOpen = false;
        this.focusIndex = -1;
      },
      openSelect() {
        this.isOpen = true;
        this.focusIndex = -1;
      },
      getNextItem() {
        this.focusIndex = Math.min(
          this.focusIndex+1, 
          this.getOptions().length-1
        );
      },
      getPrevItem() {
        this.focusIndex = Math.max(this.focusIndex-1, 0);
      },
      getOptions() {
        return this.combobox && this.filteredOptions || this.options;
      },
      filterOptionsByValue(value) {
        const regexp = new RegExp(value.toLowerCase(), 'g');

        this.openSelect();
        this.filteredOptions = this.options.filter(option => (
          regexp.test(option.name.toLowerCase())
        ));
      },
      updateValue(value) {
        if (!!this.onChange) {
          if (!!this.combobox) {
            this.filterOptionsByValue(value);
          }
        }
      },
      handleFocus() {
        if (this.combobox) {
          this.openSelect();
        }
      },
      handleKeyDown(e) {
        switch (e.keyCode) {
          case KEY.ENTER:
          case KEY.SPACE:
            if (this.isOpen && this.focusIndex >=0) {
              this.onChooseItem(
                this.getOptions()[this.focusIndex].name
              );
            }
            
            this.toggleSelect();
          break;
          case KEY.ESC:
            this.closeSelect();
          break;
          case KEY.DOWN:
            if (!this.isOpen) {
              this.toggleSelect();
            } else {
              this.getNextItem();              
            }
          break;
          case KEY.UP:
            this.getPrevItem();
          break;
        }
      } 
    },
    components: {
      Field,
      List,
      ListItem,
      CaretIcon
    }
  }
</script>

<style lang='scss'>
  @import '../styles/select.scss';
</style>