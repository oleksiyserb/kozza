<template>
  <div class="select" ref="select" data-state="">
    <div
      class="select__title"
      @click="toggleMenu"
      ref="title"
      data-default="City 0">
      Місто
    </div>
    <div class="select__content">
      <template v-if="filter">
        <input type="text" />
      </template>
      <input
        id="city0"
        class="select__input"
        type="radio"
        name="singleSelect"
        checked />
      <label for="city0" class="select__label">Місто</label>
      <input
        id="city1"
        class="select__input"
        type="radio"
        name="singleSelect" />
      <label for="city1" @click="selectInput" class="select__label">Київ</label>
      <input
        id="city2"
        class="select__input"
        type="radio"
        name="singleSelect" />
      <label for="city2" @click="selectInput" class="select__label"
        >Львів</label
      >
      <input
        id="city3"
        class="select__input"
        type="radio"
        name="singleSelect" />
      <label for="city3" @click="selectInput" class="select__label"
        >Вінниця</label
      >
      <input
        id="city4"
        class="select__input"
        type="radio"
        name="singleSelect" />
      <label for="city4" @click="selectInput" class="select__label"
        >Одеса</label
      >
    </div>
  </div>
</template>

<script>
import { select } from "@/mixins/select.js";

export default {
  name: "SelectSingle",
  mixins: [select],
  props: {
    filter: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>
