<template>
  <div class="select" ref="select" data-state="">
    <div class="select__title" ref="title" @click="toggleMenu"></div>
    <div class="select__content">
      <template v-for="variant in variants" :key="variant.id">
        <input
          :id="`singleSelect${variant.id}`"
          class="select__input"
          type="radio"
          name="singleSelect"
          :value="variant.hashColor" />
        <label
          :for="`singleSelect${variant.id}`"
          @click="selectLabel"
          class="select__label"
          :style="`background-color: ${variant.hashColor};`"></label>
      </template>
    </div>
  </div>
</template>

<script>
import { select } from "@/mixins/select.js";

export default {
  mixins: [select],
  props: {
    variants: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.select {
  position: relative;
  width: 50px;
  height: 20px;

  &[data-state="active"] {
    .select__title {
      &::after {
        transform: translateY(-0.375em) rotate(180deg);
      }
    }

    .select__content {
      opacity: 1;
      visibility: visible;
    }

    .select__label + .select__input + .select__label {
      max-height: 40px;
      border-top-width: 1px;
    }
  }
}
.select__title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border: solid 1px #c7ccd1;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    right: -16px;
    display: block;
    border: 0.3em solid;
    border-color: black transparent transparent;
    transition: all 0.1s ease-out;
  }
}
.select__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #c7ccd1;
  border-top: none;
  transition: all 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
  z-index: 8;
}
.select__input {
  display: none;

  &:checked + label {
    background-color: #dedede;
  }
  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}
.select__label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 0 16px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;

  & + input + & {
    border-top: 0 solid #c7ccd160;
  }
}
</style>
