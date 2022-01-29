<template>
  <div class="modal" @click="$emit('search')">
    <div class="modal__wrap">
      <form action="/" class="modal__content" @click.stop>
        <input type="text" />
        <button type="submit">
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="10.5"
              cy="10.5"
              r="9.9"
              stroke="#E84A5F"
              stroke-width="1.2" />
            <path
              d="M16.9414 17.7891L24.0003 25.9997"
              stroke="#E84A5F"
              stroke-width="1.2" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    search: null
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

  &__wrap {
    margin-top: 5.14em;
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;

    > input {
      display: block;
      border-radius: 25px;
      padding: 0.5rem 2rem 0.5rem 1.43rem;
      border: 1px solid var(--border-color);
      width: 300px;
    }

    > button {
      position: absolute;
      right: 0.5em;
      border: none;
      background-color: transparent;
      padding: 0;
      > svg {
        width: 20px;
      }
    }
  }
}
</style>
