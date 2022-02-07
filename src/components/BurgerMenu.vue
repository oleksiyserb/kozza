<template>
  <div class="burger">
    <button @click="$emit('open')" class="burger__button">
      <span></span>
    </button>
    <div class="burger__menu" :class="{ open: burgerList }">
      <button class="burger__close" @click="$emit('close')">
        <img src="../assets/img/icons/close.svg" alt="close" />
      </button>
      <div class="burger__head">
        <router-link :to="{ name: 'Main' }" class="header__logo">
          <img src="../assets/img/icons/logo.svg" alt="logo" />
        </router-link>
        <ul class="burger__icons">
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
                    ><img src="../assets/img/icons/facebook.svg" alt="facebook"
                  /></a>
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <ul class="burger__links" v-if="this.$route.name != 'Catalog'">
        <li><a href="#">Аксесуари</a></li>
        <li><a href="#">Бюстгальтери</a></li>
        <li><a href="#">Комплекти</a></li>
        <li><a href="#">Трусики</a></li>
      </ul>
      <ul class="burger__body">
        <li>
          <router-link :to="{ name: 'DeliveryPayment' }"
            >Доставка та оплата</router-link
          >
        </li>
        <li><a href="#">Контакти</a></li>
        <li><a href="#">Питання і відповіді</a></li>
        <li>
          <router-link :to="{ name: 'SizeTable' }"
            >Розмірна таблиця</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Wholesale' }"
            >Оптові закупівлі</router-link
          >
        </li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Вакансії</a></li>
        <li>
          <router-link :to="{ name: 'Catalog' }">Каталог</router-link>
        </li>
        <li><a href="#">Колекції</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    burgerList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      authList: false
    };
  }
};
</script>

<style lang="postcss" scoped>
.burger {
  &__button {
    width: 30px;
    height: 100%;
    border: none;
    position: relative;
    margin-right: 1em;

    & span,
    & span:before,
    & span:after {
      position: absolute;
      top: 50%;
      margin-top: -1px;
      left: 45%;
      margin-left: -13px;
      width: 100%;
      border-radius: 10px;
      height: 3px;
      background-color: var(--link);
    }

    & span:before,
    & span:after {
      content: "";
      display: block;
      transition: 0.2s;
    }

    & span:before {
      transform: translateY(-10px);
    }

    & span:after {
      transform: translateY(10px);
    }
  }

  &__body > li {
    margin-top: 1.25em;

    &:first-child {
      margin-top: 1.375em;
    }

    @media (max-width: 425px) {
      margin-top: 1.43em;
    }
  }

  &__links {
    display: none;

    @media (max-width: 425px) {
      display: block;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      padding: 1.21em 0;

      > li + li {
        margin-top: 1.43em;
      }
    }
  }

  &__icons {
    display: flex;
    position: relative;

    > li {
      + li {
        margin-left: 1.57em;
      }

      > button {
        border: none;
        background-color: transparent;
      }
    }
  }

  &__menu {
    margin: 0;
    padding: 0 3.875em;
    position: absolute;
    background-color: hsl(var(--primary-color));
    top: 94px;
    overflow-y: hidden;
    box-shadow: 0px 5px 4px var(--dark-transparent);
    width: 359px;
    max-height: 0;
    transition: max-height 0.5s;
    z-index: 99;

    @media (max-width: 425px) {
      overflow-y: scroll;
      left: 0;
      top: 0;
      width: 100%;
    }

    > ul {
      margin-bottom: 1.5em;

      > li > a {
        color: hsl(var(--dark));

        @media (max-width: 425px) {
          font-size: 1.28rem;
        }
      }
    }

    &.open {
      max-height: 100vh;
    }
  }

  &__head {
    display: none;
    margin-top: 3.71em;
    margin-bottom: 2.14em;

    @media (max-width: 425px) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__close {
    display: none;

    @media (max-width: 425px) {
      position: absolute;
      padding: 0;
      top: 1.57em;
      right: 1.57em;
      border: none;
      display: block;
      background-color: transparent;
    }
  }
}
</style>
