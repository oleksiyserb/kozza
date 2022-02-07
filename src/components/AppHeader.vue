<template>
  <header class="header">
    <div class="container">
      <div class="header__head">
        <nav class="header__brand">
          <BurgerMenu
            @open="openBurgerList"
            @close="burgerList = false"
            :burgerList="burgerList" />
          <router-link :to="{ name: 'Main' }" class="header__logo">
            <img src="../assets/img/icons/logo.svg" alt="logo" />
          </router-link>
        </nav>
        <div class="header__instruments">
          <form action="/" class="header__search">
            <input
              name="search"
              type="text"
              placeholder="Пошук по каталогу"
              required />
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
          <button class="header__search-button" @click="search = true">
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
          <ul class="header__icons">
            <li>
              <button type="button" @click="cart = !cart">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0.5"
                    y="8.92969"
                    width="25"
                    height="17.5714"
                    stroke="#E84A5F" />
                  <path
                    d="M21 8.5C21 4.35786 17.6421 1 13.5 1C9.35786 1 6 4.35786 6 8.5"
                    stroke="#E84A5F" />
                </svg>
              </button>
            </li>

            <li>
              <button type="button">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.3 0C17.7917 0.00392404 15.4419 1.24323 14 3.32228C12.5581 1.24323 10.2083 0.00392404 7.7 0C3.59798 0 0 3.8661 0 8.2728C0 12.5675 2.39395 16.9909 6.92344 21.0649C9.02207 22.9489 11.3242 24.5867 13.7858 25.9474C13.9202 26.0175 14.0798 26.0175 14.2142 25.9474C16.6749 24.5867 18.9763 22.9487 21.0743 21.0649C25.6061 16.9909 28 12.5675 28 8.2728C28 3.8661 24.402 0 20.3 0V0ZM14 24.9899C12.286 24.0317 0.933333 17.3378 0.933333 8.2728C0.933333 4.36953 4.09495 0.945463 7.7 0.945463C10.1423 0.949849 12.3936 2.28448 13.5935 4.43947C13.6833 4.57843 13.8362 4.66199 14 4.66199C14.1638 4.66199 14.3167 4.57843 14.4065 4.43947C15.6064 2.28448 17.8577 0.949849 20.3 0.945463C23.905 0.945463 27.0667 4.36953 27.0667 8.2728C27.0667 17.3378 15.714 24.0317 14 24.9899Z"
                    fill="#E84A5F" />
                </svg>
              </button>
            </li>

            <li class="user">
              <button type="button" @click="openAuthList">
                <svg
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="14.0215"
                    cy="9.5"
                    r="8.9"
                    stroke="#E84A5F"
                    stroke-width="1.2" />
                  <path
                    d="M28 26C28 21.9006 21.9558 20 14.5 20C7.04415 20 1 21.9006 1 26"
                    stroke="#E84A5F"
                    stroke-width="1.2" />
                </svg>
              </button>
              <div class="user__dropdown" :class="{ open: authList }">
                <ul>
                  <li>
                    <a href="#" class="login" @click.prevent="showLogin = true"
                      >Вхід</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="register"
                      @click.prevent="showRegister = true">
                      Реєстрація
                    </a>
                  </li>
                  <div>
                    <a href="#">
                      <img src="../assets/img/icons/google.svg" alt="google" />
                    </a>
                    <a href="#"
                      ><img
                        src="../assets/img/icons/facebook.svg"
                        alt="facebook"
                    /></a>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__body">
        <ul class="header__links">
          <li><a href="#">Комплекти</a></li>
          <li><a href="#">Бюстгальтери</a></li>
          <li><a href="#">Аксесуари</a></li>
          <li><a href="#">Трусики</a></li>
        </ul>
      </div>
    </div>

    <!-- Modals -->
    <ModalCart v-if="cart" @close="cart = false" />
    <ModalSearch v-if="search" @close="search = !search" />

    <ModalAuth
      title="Реєстрація"
      submit="Зареєструватися"
      v-if="showRegister"
      @close="showRegister = false">
      <div>
        <label for="name">Ім'я</label>
        <input
          name="name"
          id="name"
          type="text"
          v-model="register.name"
          required />
      </div>

      <div>
        <label for="surname">Прізвище</label>
        <input
          name="surname"
          id="surname"
          type="text"
          v-model="register.surname"
          required />
      </div>

      <div>
        <label for="phone">Номер телефону</label>
        <input
          class="tel"
          name="phone"
          id="phone"
          type="tel"
          placeholder="+38 (0ХХ) ХХХ-ХХ-ХХ"
          v-model="register.phone"
          required />
      </div>

      <div>
        <label for="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          v-model="register.email"
          required />
      </div>

      <div>
        <label for="password">Пароль</label>
        <input
          name="password"
          id="password"
          type="password"
          v-model="register.password"
          required />
      </div>
    </ModalAuth>

    <ModalAuth
      title="Увійти до кабінету"
      submit="Увійти"
      v-if="showLogin"
      @close="showLogin = false">
      <div>
        <label for="email">Логін або email</label>
        <input
          name="email"
          id="email"
          type="email"
          v-model="login.emailOrLogin"
          required />
      </div>

      <div>
        <label for="password">Пароль</label>
        <input
          name="password"
          id="password"
          type="password"
          v-model="login.password"
          required />
      </div>
    </ModalAuth>
  </header>
</template>

<script>
import ModalAuth from "./modals/ModalAuth.vue";
import ModalSearch from "./modals/ModalSearch.vue";
import ModalCart from "./modals/ModalCart.vue";
import BurgerMenu from "./BurgerMenu.vue";

export default {
  name: "app-header",

  components: {
    ModalAuth,
    ModalSearch,
    ModalCart,
    BurgerMenu
  },

  data() {
    return {
      burgerList: false,
      authList: false,
      showRegister: false,
      search: false,
      showLogin: false,
      cart: false,

      register: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
      },

      login: {
        emailOrLogin: "",
        password: ""
      }
    };
  },
  methods: {
    openAuthList() {
      this.authList = !this.authList;
      this.burgerList = false;
    },

    openBurgerList() {
      this.burgerList = !this.burgerList;
      this.authList = false;
    }
  },
  watch: {
    $route() {
      this.burgerList = false;
    }
  }
};
</script>

<style lang="postcss" scoped>
.header {
  :global(&__head) {
    display: flex;
    justify-content: space-between;
    padding-top: 2.125em;
    padding-bottom: 1.875em;
    align-items: center;
  }

  :global(&__logo > img) {
    height: 30px;
  }

  &__brand {
    display: flex;
  }

  &__menu {
    margin-right: 1.875em;
    display: inherit;
  }

  &__instruments {
    display: flex;
  }

  &__body {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
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

  &__search {
    display: flex;
    align-items: center;
    margin-right: 4.6875em;

    @media (max-width: 890px) {
      display: none;
    }

    > input {
      height: 26px;
      width: 330px;
      border: 0.5px solid var(--border-color);
      padding: 0.25em 0.6875em;
      background-color: hsl(var(--primary-color));
      border-radius: 10px;
      font-family: var(--font-primary);
      font-size: 1rem;
      margin-right: 0.6875em;
    }

    > button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    &-button {
      display: none;
      border: none;
      background-color: transparent;
      padding: 0;
      cursor: pointer;

      @media (max-width: 890px) {
        display: block;
        margin-right: 1.125em;
      }
    }
  }

  &__icons {
    display: flex;

    > li + li {
      margin-left: 1.1875em;

      @media (max-width: 425px) {
        display: none;
      }
    }

    > li > button {
      border: none;
      background-color: transparent;
      padding: 0;

      &:focus svg {
        color: var(--link-clicked);
      }

      &:hover svg {
        filter: drop-shadow(0px 0px 4px var(--link));
      }

      > svg {
        transition: filter 0.5s;
      }
    }
  }

  &__links {
    display: flex;
    padding: 1.1875em 0;
    margin: 0;
    justify-content: space-between;

    @media (max-width: 425px) {
      display: none;
    }

    > li > a {
      font-size: 1.125rem;
      color: hsl(var(--dark));
    }
  }
}
</style>
