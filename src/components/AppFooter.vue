<template>
  <footer class="footer">
    <div class="container grid">
      <div class="footer__logo">
        <img src="../assets/img/icons/logo.svg" alt="Logo" />
      </div>
      <div class="footer__help">
        <h3>Допомога</h3>
        <ul>
          <li><a href="/link">Доставка та оплата</a></li>
          <li><a href="/link">Питання і відповіді</a></li>
          <li><a href="/link">Розмірна таблиця</a></li>
          <li><a href="/link">Оптові закупівлі</a></li>
        </ul>
      </div>
      <div class="footer__subscribe">
        <h3>Слідкуй за нами</h3>
        <div class="footer-block__subscribe">
          <ul>
            <li><a href="/link">Про нас</a></li>
            <li><a href="/link">Вакансії</a></li>
          </ul>
          <div>
            <a href="/instagram">
              <img src="../assets/img/icons/instagram.svg" alt="instagram" />
            </a>
            <span>Instagram</span>
          </div>
          <div>
            <a href="/telegram">
              <img src="../assets/img/icons/telegram.svg" alt="instagram" />
            </a>
            <span>Telegram</span>
          </div>
        </div>
      </div>
      <div class="footer__contacts">
        <h3>Контакти:</h3>
        <ul>
          <li>kozashop@gmail.com</li>
          <li>+38097-214-42-24</li>
          <li>м. Київ, Україна вул. Центральна, 19</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  > .container {
    border-top: 1px solid var(--border-color);
    padding: 1.875em 0 2.5em;

    > div > h3 {
      margin-top: 0;
      margin-bottom: 1.5625rem;
      font-size: 1.25rem;
      font-family: var(--font-primary);
    }
  }

  &__logo {
    grid-column: 1 / span 3;

    @media (max-width: 1100px) {
      grid-column: 1 / 13;
      margin: auto;
    }

    @media (max-width: 320px) {
      > img {
        width: 200px;
      }
    }
  }

  &__help {
    grid-column: 4 / span 2;

    @media (max-width: 1250px) {
      margin: auto;
      grid-column: 4 / span 3;
    }

    @media (max-width: 1100px) {
      grid-column: 1 / span 3;
    }

    @media (max-width: 890px) {
      grid-column: 1 / span 5;
    }

    @media (max-width: 320px) {
      grid-column: 1 / 7;
    }

    > ul {
      margin-top: 1.5625em;
      padding: 0;
      > li {
        + li {
          margin-top: 1em;
        }

        > a {
          font-size: 1.25rem;
          color: var(--link);
        }
      }
    }
  }

  &__subscribe {
    grid-column: 7 / span 3;

    @media (max-width: 1100px) {
      grid-column: 5 / span 4;
    }

    @media (max-width: 890px) {
      grid-area: 3 / 1;
      grid-column: 1 / 13;
    }

    > h3 {
      text-align: center;
    }
  }

  &-block__subscribe {
    display: flex;
    justify-content: space-between;

    @media (max-width: 890px) {
      justify-content: space-around;
    }

    > ul {
      padding: 0;
      margin: 0;

      > li + li {
        margin-top: 1em;
      }
    }

    > * {
      font-family: var(--font-primary);
      font-size: 1.25rem;
      color: var(--link);

      > a > img {
        display: block;
        margin: auto;
      }

      > * > a {
        color: inherit;
      }
    }

    > div > * {
      margin: 0 auto 0.625em;
      display: block;
    }
  }

  &__contacts {
    grid-column: 11 / span 2;

    @media (max-width: 1100px) {
      grid-column: 10 / span 3;
    }

    @media (max-width: 890px) {
      grid-column: 8 / 13;
    }

    @media (max-width: 320px) {
      grid-column: 7 / 13;
    }

    > ul {
      padding: 0;

      > li {
        font-family: var(--font-primary);
        font-size: 1.25rem;

        + li {
          margin-top: 1em;
        }
      }
    }
  }
}
</style>
