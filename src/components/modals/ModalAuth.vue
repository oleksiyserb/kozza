<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal__wrap">
      <div class="modal__auth" @click.stop>
        <button class="modal__close" @click="$emit('close')">
          <img src="../../assets/img/icons/close.svg" alt="close" />
        </button>
        <h1>{{ title }}</h1>
        <div class="modal__networks">
          <a href="#"
            ><img src="../../assets/img/icons/google.svg" alt="google"
          /></a>
          <a href="#"
            ><img src="../../assets/img/icons/facebook.svg" alt="facebook"
          /></a>
        </div>
        <form method="POST" action="/" class="modal__inputs">
          <slot></slot>

          <button type="submit">{{ submit }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-auth",

  props: {
    title: {
      type: String,
      required: true
    },
    submit: {
      type: String,
      required: true
    },
    register: {
      type: Boolean,
      required: true
    }
  },

  emits: {
    close: null
  }
};
</script>

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
  justify-content: center;
  align-items: center;

  &__auth {
    border-radius: 10px;
    box-shadow: 0px 4px 4px var(--dark-transparent);
    background-color: hsl(var(--primary-color));
    padding: 1.5625em 3.75em 2.625em;
    position: relative;
    max-width: 100%;

    > h1 {
      text-align: center;
      font-size: 1.875rem;
      margin-bottom: 0.5625rem;
    }
  }

  &__close {
    position: absolute;
    top: 1.375em;
    right: 1.375em;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__networks {
    display: flex;
    justify-content: center;
    margin: 0.5625em 0;
    > a + a {
      margin-left: 0.8125em;
    }
  }

  &__inputs {
    > :slotted(*) {
      font-family: var(--font-primary);
      font-weight: 400;
      color: hsl(var(--dark));
    }

    > :slotted(div) {
      display: flex;
      flex-direction: column;
      margin: 0.9375em 0;

      > label {
        font-size: 1.125rem;
      }

      > input {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        font-size: 1.125rem;
        padding: 0.5625em 0.625em;
        border: 1px solid var(--border-color);
      }
    }

    > button {
      width: 100%;
      padding: 0.875rem;
      border: none;
      border-radius: 10px;
      background-color: var(--link);
      color: var(--light);
      cursor: pointer;
      font-family: var(--font-fourthary);
      font-size: 1.25rem;
    }
  }
}
</style>
