<template>
  <header>
    <header class="header">
      <div class="container">
        <div class="header__head">
          <nav class="header__brand">
            <BurgerMenu
              @open="burgerList = !burgerList"
              @close="burgerList = false"
              :burgerList="burgerList" />

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
import BurgerMenu from "@/components/BurgerMenu.vue";
export default {
  name: "Callback",
  components: { BurgerMenu },
  data() {
    return {
      burgerList: false
    };
  }
};
</script>

<style lang="postcss" scoped>
.header {
  &__head {
    border-bottom: 1px solid var(--border-color);

    > a {
      color: hsl(var(--dark));
      font-size: 1.125rem;
    }
  }

  &__brand {
    display: flex;
  }

  &__logo {
    > img {
      display: block;
      height: 26px;

      @media (max-width: 425px) {
        height: 20px;
      }
    }
  }
}
</style>
