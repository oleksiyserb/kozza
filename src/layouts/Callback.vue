<template>
  <header>
    <header class="header">
      <div class="container">
        <div class="header__head">
          <nav class="header__brand">
            <router-link :to="{ name: 'Main' }" class="header__logo">
              <img src="../assets/img/icons/logo.svg" alt="logo" />
            </router-link>
          </nav>
          <a href="tel:+38097-214-42-24">+38097-214-42-24</a>
        </div>
      </div>
    </header>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Callback"
};
</script>

<style lang="postcss" scoped>
.header {
  &__head {
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
