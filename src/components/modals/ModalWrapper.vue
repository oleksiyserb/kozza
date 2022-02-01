<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal__container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.modal {
  background-color: var(--dark-transparent);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  &__container {
    margin: auto;
  }
}
</style>
