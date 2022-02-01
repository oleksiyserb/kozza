<template>
  <ModalWrapper>
    <div class="card" @click.stop>
      <header class="card__head">
        <button class="card__close" @click="$emit('close')">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.4887 10L19.6917 1.79695C20.1028 1.38586 20.1028 0.719376 19.6917 0.308321C19.2806 -0.102774 18.6141 -0.102774 18.203 0.308321L9.99998 8.51137L1.79695 0.308321C1.38586 -0.102774 0.719373 -0.102774 0.30832 0.308321C-0.102734 0.719415 -0.102773 1.3859 0.30832 1.79695L8.51135 10L0.30832 18.2031C-0.102773 18.6142 -0.102773 19.2806 0.30832 19.6917C0.719412 20.1028 1.3859 20.1027 1.79695 19.6917L9.99998 11.4886L18.203 19.6917C18.6141 20.1028 19.2806 20.1027 19.6916 19.6917C20.1027 19.2806 20.1027 18.6141 19.6916 18.2031L11.4887 10Z"
              fill="#474747" />
          </svg>
        </button>
        <div class="card__title">
          <h1>Кошик</h1>
          <span>(4 товари)</span>
        </div>
      </header>
      <section class="card__body">
        <article class="product">
          <header class="product__picture">
            <img src="../../assets/img/cart-product.png" alt="test" />
          </header>
          <section class="product__content">
            <header>
              <h2>Бюстгальтер “Timbaland”</h2>
              <div class="product__option">
                <svg
                  width="3"
                  height="17"
                  viewBox="0 0 3 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="8.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="black" />
                </svg>
                <ul>
                  <li>
                    <button type="button">
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.0097 9.61133L14.0934 20.4087C14.0525 20.8921 14.7862 20.9581 14.8276 20.4703L15.7439 9.6729C15.761 9.47138 15.6105 9.29424 15.4078 9.27719C15.2048 9.2602 15.0268 9.40976 15.0097 9.61133Z"
                          fill="#FAF1F1" />
                        <path
                          d="M6.59132 9.27718C6.38862 9.29422 6.23818 9.47137 6.25522 9.67288L7.17152 20.4702C7.21297 20.9587 7.94661 20.8921 7.90565 20.4087L6.98935 9.61131C6.97231 9.40975 6.79397 9.26029 6.59132 9.27718Z"
                          fill="#FAF1F1" />
                        <path
                          d="M10.6328 9.64209V20.4395C10.6328 20.6417 10.7977 20.8057 11.0012 20.8057C11.2047 20.8057 11.3695 20.6417 11.3695 20.4395V9.64209C11.3695 9.43984 11.2047 9.27588 11.0012 9.27588C10.7977 9.27588 10.6328 9.43984 10.6328 9.64209Z"
                          fill="#FAF1F1" />
                        <path
                          d="M20.3008 2.82871H14.5082V1.54155C14.5082 0.691553 13.8126 0 12.9576 0H9.04234C8.18734 0 7.49171 0.691553 7.49171 1.54155V2.82871H1.6991C0.762222 2.82871 0 3.58647 0 4.51787C0 5.44927 0.762222 6.20703 1.6991 6.20703H2.09531L3.47339 22.4455C3.59588 23.8887 4.80972 25 6.26884 25H15.7311C17.188 25 18.4039 23.891 18.5266 22.4455L18.7176 20.1942C18.7347 19.9927 18.5842 19.8155 18.3815 19.7985C18.1783 19.7812 18.0006 19.9311 17.9835 20.1326L17.7924 22.3839C17.7028 23.4402 16.7974 24.2676 15.7311 24.2676H6.26884C5.20259 24.2676 4.29715 23.4402 4.20752 22.3839L2.83464 6.20703H3.9253C4.12878 6.20703 4.29366 6.04307 4.29366 5.84082C4.29366 5.63857 4.12878 5.47461 3.9253 5.47461C3.11838 5.47461 2.16687 5.47461 1.6991 5.47461C1.16845 5.47461 0.73673 5.04541 0.73673 4.51787C0.73673 3.99033 1.16845 3.56113 1.6991 3.56113H20.3008C20.8315 3.56113 21.2632 3.99033 21.2632 4.51787C21.2632 5.04541 20.8315 5.47461 20.3008 5.47461C19.7287 5.47461 6.88558 5.47461 5.64841 5.47461C5.44493 5.47461 5.28005 5.63857 5.28005 5.84082C5.28005 6.04307 5.44493 6.20703 5.64841 6.20703H19.1653L18.1285 18.4241C18.1114 18.6256 18.2619 18.8027 18.4646 18.8198C18.4751 18.8207 18.4856 18.8211 18.496 18.8211C18.6854 18.8211 18.8464 18.6767 18.8627 18.4856L19.9047 6.20703H20.3009C21.2377 6.20703 22 5.44927 22 4.51787C22 3.58647 21.2377 2.82871 20.3008 2.82871ZM13.7715 2.82871H8.22844V1.54155C8.22844 1.09541 8.59357 0.732422 9.04234 0.732422H12.9576C13.4064 0.732422 13.7715 1.09541 13.7715 1.54155V2.82871H13.7715Z"
                          fill="#FAF1F1" /></svg
                      ><span>Видалити</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 28 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.3 0C17.7917 0.00392404 15.4419 1.24323 14 3.32228C12.5581 1.24323 10.2083 0.00392404 7.7 0C3.59798 0 0 3.8661 0 8.2728C0 12.5675 2.39395 16.9909 6.92344 21.0649C9.02207 22.9489 11.3242 24.5867 13.7858 25.9474C13.9202 26.0175 14.0798 26.0175 14.2142 25.9474C16.6749 24.5867 18.9763 22.9487 21.0743 21.0649C25.6061 16.9909 28 12.5675 28 8.2728C28 3.8661 24.402 0 20.3 0V0ZM14 24.9899C12.286 24.0317 0.933333 17.3378 0.933333 8.2728C0.933333 4.36953 4.09495 0.945463 7.7 0.945463C10.1423 0.949849 12.3936 2.28448 13.5935 4.43947C13.6833 4.57843 13.8362 4.66199 14 4.66199C14.1638 4.66199 14.3167 4.57843 14.4065 4.43947C15.6064 2.28448 17.8577 0.949849 20.3 0.945463C23.905 0.945463 27.0667 4.36953 27.0667 8.2728C27.0667 17.3378 15.714 24.0317 14 24.9899Z"
                          fill="#FAF1F1" /></svg
                      ><span>У список бажань</span>
                    </button>
                  </li>
                </ul>
              </div>
            </header>
            <div class="product__settings">
              <div>
                <p>Колір:</p>
                <SelectColor :variants="variants" />
              </div>
              <div>
                <p>Розмір:</p>
                <div class="product__select">
                  <select name="size" id="size">
                    <option value="1">70A</option>
                    <option value="2">70B</option>
                    <option value="3">70C</option>
                    <option value="4">70D</option>
                  </select>
                </div>
              </div>
            </div>
            <footer>
              <div class="product__count">
                <button type="button">-</button>
                <span>0</span>
                <button type="button">+</button>
              </div>
              <span class="product__price"> 1500 ₴ </span>
            </footer>
          </section>
        </article>
        <article class="product">
          <header class="product__picture">
            <img src="../../assets/img/cart-product.png" alt="test" />
          </header>
          <section class="product__content">
            <header>
              <h2>Бюстгальтер “Timbaland”</h2>
              <div class="product__option">
                <svg
                  width="3"
                  height="17"
                  viewBox="0 0 3 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="8.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="black" />
                </svg>
                <ul>
                  <li>
                    <button type="button">
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.0097 9.61133L14.0934 20.4087C14.0525 20.8921 14.7862 20.9581 14.8276 20.4703L15.7439 9.6729C15.761 9.47138 15.6105 9.29424 15.4078 9.27719C15.2048 9.2602 15.0268 9.40976 15.0097 9.61133Z"
                          fill="#FAF1F1" />
                        <path
                          d="M6.59132 9.27718C6.38862 9.29422 6.23818 9.47137 6.25522 9.67288L7.17152 20.4702C7.21297 20.9587 7.94661 20.8921 7.90565 20.4087L6.98935 9.61131C6.97231 9.40975 6.79397 9.26029 6.59132 9.27718Z"
                          fill="#FAF1F1" />
                        <path
                          d="M10.6328 9.64209V20.4395C10.6328 20.6417 10.7977 20.8057 11.0012 20.8057C11.2047 20.8057 11.3695 20.6417 11.3695 20.4395V9.64209C11.3695 9.43984 11.2047 9.27588 11.0012 9.27588C10.7977 9.27588 10.6328 9.43984 10.6328 9.64209Z"
                          fill="#FAF1F1" />
                        <path
                          d="M20.3008 2.82871H14.5082V1.54155C14.5082 0.691553 13.8126 0 12.9576 0H9.04234C8.18734 0 7.49171 0.691553 7.49171 1.54155V2.82871H1.6991C0.762222 2.82871 0 3.58647 0 4.51787C0 5.44927 0.762222 6.20703 1.6991 6.20703H2.09531L3.47339 22.4455C3.59588 23.8887 4.80972 25 6.26884 25H15.7311C17.188 25 18.4039 23.891 18.5266 22.4455L18.7176 20.1942C18.7347 19.9927 18.5842 19.8155 18.3815 19.7985C18.1783 19.7812 18.0006 19.9311 17.9835 20.1326L17.7924 22.3839C17.7028 23.4402 16.7974 24.2676 15.7311 24.2676H6.26884C5.20259 24.2676 4.29715 23.4402 4.20752 22.3839L2.83464 6.20703H3.9253C4.12878 6.20703 4.29366 6.04307 4.29366 5.84082C4.29366 5.63857 4.12878 5.47461 3.9253 5.47461C3.11838 5.47461 2.16687 5.47461 1.6991 5.47461C1.16845 5.47461 0.73673 5.04541 0.73673 4.51787C0.73673 3.99033 1.16845 3.56113 1.6991 3.56113H20.3008C20.8315 3.56113 21.2632 3.99033 21.2632 4.51787C21.2632 5.04541 20.8315 5.47461 20.3008 5.47461C19.7287 5.47461 6.88558 5.47461 5.64841 5.47461C5.44493 5.47461 5.28005 5.63857 5.28005 5.84082C5.28005 6.04307 5.44493 6.20703 5.64841 6.20703H19.1653L18.1285 18.4241C18.1114 18.6256 18.2619 18.8027 18.4646 18.8198C18.4751 18.8207 18.4856 18.8211 18.496 18.8211C18.6854 18.8211 18.8464 18.6767 18.8627 18.4856L19.9047 6.20703H20.3009C21.2377 6.20703 22 5.44927 22 4.51787C22 3.58647 21.2377 2.82871 20.3008 2.82871ZM13.7715 2.82871H8.22844V1.54155C8.22844 1.09541 8.59357 0.732422 9.04234 0.732422H12.9576C13.4064 0.732422 13.7715 1.09541 13.7715 1.54155V2.82871H13.7715Z"
                          fill="#FAF1F1" /></svg
                      ><span>Видалити</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 28 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.3 0C17.7917 0.00392404 15.4419 1.24323 14 3.32228C12.5581 1.24323 10.2083 0.00392404 7.7 0C3.59798 0 0 3.8661 0 8.2728C0 12.5675 2.39395 16.9909 6.92344 21.0649C9.02207 22.9489 11.3242 24.5867 13.7858 25.9474C13.9202 26.0175 14.0798 26.0175 14.2142 25.9474C16.6749 24.5867 18.9763 22.9487 21.0743 21.0649C25.6061 16.9909 28 12.5675 28 8.2728C28 3.8661 24.402 0 20.3 0V0ZM14 24.9899C12.286 24.0317 0.933333 17.3378 0.933333 8.2728C0.933333 4.36953 4.09495 0.945463 7.7 0.945463C10.1423 0.949849 12.3936 2.28448 13.5935 4.43947C13.6833 4.57843 13.8362 4.66199 14 4.66199C14.1638 4.66199 14.3167 4.57843 14.4065 4.43947C15.6064 2.28448 17.8577 0.949849 20.3 0.945463C23.905 0.945463 27.0667 4.36953 27.0667 8.2728C27.0667 17.3378 15.714 24.0317 14 24.9899Z"
                          fill="#FAF1F1" /></svg
                      ><span>У список бажань</span>
                    </button>
                  </li>
                </ul>
              </div>
            </header>
            <div class="product__settings">
              <div>
                <p>Колір:</p>
                <SelectColor :variants="variants" />
              </div>
              <div>
                <p>Розмір:</p>
                <div class="product__select">
                  <select name="size" id="size">
                    <option value="1">70A</option>
                    <option value="2">70B</option>
                    <option value="3">70C</option>
                    <option value="4">70D</option>
                  </select>
                </div>
              </div>
            </div>
            <footer>
              <div class="product__count">
                <button type="button">-</button>
                <span>0</span>
                <button type="button">+</button>
              </div>
              <span class="product__price"> 1500 ₴ </span>
            </footer>
          </section>
        </article>
        <article class="product">
          <header class="product__picture">
            <img src="../../assets/img/cart-product.png" alt="test" />
          </header>
          <section class="product__content">
            <header>
              <h2>Бюстгальтер “Timbaland”</h2>
              <div class="product__option">
                <svg
                  width="3"
                  height="17"
                  viewBox="0 0 3 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="8.5" r="1.5" fill="black" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="black" />
                </svg>
                <ul>
                  <li>
                    <button type="button">
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.0097 9.61133L14.0934 20.4087C14.0525 20.8921 14.7862 20.9581 14.8276 20.4703L15.7439 9.6729C15.761 9.47138 15.6105 9.29424 15.4078 9.27719C15.2048 9.2602 15.0268 9.40976 15.0097 9.61133Z"
                          fill="#FAF1F1" />
                        <path
                          d="M6.59132 9.27718C6.38862 9.29422 6.23818 9.47137 6.25522 9.67288L7.17152 20.4702C7.21297 20.9587 7.94661 20.8921 7.90565 20.4087L6.98935 9.61131C6.97231 9.40975 6.79397 9.26029 6.59132 9.27718Z"
                          fill="#FAF1F1" />
                        <path
                          d="M10.6328 9.64209V20.4395C10.6328 20.6417 10.7977 20.8057 11.0012 20.8057C11.2047 20.8057 11.3695 20.6417 11.3695 20.4395V9.64209C11.3695 9.43984 11.2047 9.27588 11.0012 9.27588C10.7977 9.27588 10.6328 9.43984 10.6328 9.64209Z"
                          fill="#FAF1F1" />
                        <path
                          d="M20.3008 2.82871H14.5082V1.54155C14.5082 0.691553 13.8126 0 12.9576 0H9.04234C8.18734 0 7.49171 0.691553 7.49171 1.54155V2.82871H1.6991C0.762222 2.82871 0 3.58647 0 4.51787C0 5.44927 0.762222 6.20703 1.6991 6.20703H2.09531L3.47339 22.4455C3.59588 23.8887 4.80972 25 6.26884 25H15.7311C17.188 25 18.4039 23.891 18.5266 22.4455L18.7176 20.1942C18.7347 19.9927 18.5842 19.8155 18.3815 19.7985C18.1783 19.7812 18.0006 19.9311 17.9835 20.1326L17.7924 22.3839C17.7028 23.4402 16.7974 24.2676 15.7311 24.2676H6.26884C5.20259 24.2676 4.29715 23.4402 4.20752 22.3839L2.83464 6.20703H3.9253C4.12878 6.20703 4.29366 6.04307 4.29366 5.84082C4.29366 5.63857 4.12878 5.47461 3.9253 5.47461C3.11838 5.47461 2.16687 5.47461 1.6991 5.47461C1.16845 5.47461 0.73673 5.04541 0.73673 4.51787C0.73673 3.99033 1.16845 3.56113 1.6991 3.56113H20.3008C20.8315 3.56113 21.2632 3.99033 21.2632 4.51787C21.2632 5.04541 20.8315 5.47461 20.3008 5.47461C19.7287 5.47461 6.88558 5.47461 5.64841 5.47461C5.44493 5.47461 5.28005 5.63857 5.28005 5.84082C5.28005 6.04307 5.44493 6.20703 5.64841 6.20703H19.1653L18.1285 18.4241C18.1114 18.6256 18.2619 18.8027 18.4646 18.8198C18.4751 18.8207 18.4856 18.8211 18.496 18.8211C18.6854 18.8211 18.8464 18.6767 18.8627 18.4856L19.9047 6.20703H20.3009C21.2377 6.20703 22 5.44927 22 4.51787C22 3.58647 21.2377 2.82871 20.3008 2.82871ZM13.7715 2.82871H8.22844V1.54155C8.22844 1.09541 8.59357 0.732422 9.04234 0.732422H12.9576C13.4064 0.732422 13.7715 1.09541 13.7715 1.54155V2.82871H13.7715Z"
                          fill="#FAF1F1" /></svg
                      ><span>Видалити</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 28 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.3 0C17.7917 0.00392404 15.4419 1.24323 14 3.32228C12.5581 1.24323 10.2083 0.00392404 7.7 0C3.59798 0 0 3.8661 0 8.2728C0 12.5675 2.39395 16.9909 6.92344 21.0649C9.02207 22.9489 11.3242 24.5867 13.7858 25.9474C13.9202 26.0175 14.0798 26.0175 14.2142 25.9474C16.6749 24.5867 18.9763 22.9487 21.0743 21.0649C25.6061 16.9909 28 12.5675 28 8.2728C28 3.8661 24.402 0 20.3 0V0ZM14 24.9899C12.286 24.0317 0.933333 17.3378 0.933333 8.2728C0.933333 4.36953 4.09495 0.945463 7.7 0.945463C10.1423 0.949849 12.3936 2.28448 13.5935 4.43947C13.6833 4.57843 13.8362 4.66199 14 4.66199C14.1638 4.66199 14.3167 4.57843 14.4065 4.43947C15.6064 2.28448 17.8577 0.949849 20.3 0.945463C23.905 0.945463 27.0667 4.36953 27.0667 8.2728C27.0667 17.3378 15.714 24.0317 14 24.9899Z"
                          fill="#FAF1F1" /></svg
                      ><span>У список бажань</span>
                    </button>
                  </li>
                </ul>
              </div>
            </header>
            <div class="product__settings">
              <div>
                <p>Колір:</p>
                <SelectColor :variants="variants" />
              </div>
              <div>
                <p>Розмір:</p>
                <div class="product__select">
                  <select name="size" id="size">
                    <option value="1">70A</option>
                    <option value="2">70B</option>
                    <option value="3">70C</option>
                    <option value="4">70D</option>
                  </select>
                </div>
              </div>
            </div>
            <footer>
              <div class="product__count">
                <button type="button">-</button>
                <span>0</span>
                <button type="button">+</button>
              </div>
              <span class="product__price"> 1500 ₴ </span>
            </footer>
          </section>
        </article>
      </section>
      <footer class="card__footer">
        <ul>
          <li>
            <p>Сума товарів:</p>
            <strong>3700 ₴</strong>
          </li>
          <li>
            <p>Доставка:</p>
            <span>0</span>
          </li>
          <li>
            <p>Сума замовлення:</p>
            <strong>3700 ₴</strong>
          </li>
        </ul>
        <div class="card__buttons">
          <button type="button">Продовжити покупки</button>
          <button type="button">Оформити замовлення</button>
        </div>
      </footer>
    </div>
  </ModalWrapper>
</template>

<script>
import SelectColor from "../forms/SelectColor.vue";
import ModalWrapper from "./ModalWrapper.vue";

export default {
  components: {
    SelectColor,
    ModalWrapper
  },

  data() {
    return {
      variants: [
        {
          id: 1,
          hashColor: "#000",
          images: ["img/black.png", "img/black-2.png"]
        },
        {
          id: 2,
          hashColor: "#FFF",
          images: ["img/white.png", "img/white-2.png"]
        },
        {
          id: 3,
          hashColor: "#F00",
          images: ["img/red.png", "img/red-2.png"]
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.card {
  padding: 2.8125em 4.625em;
  border-radius: 10px;
  background-color: hsl(var(--primary-color));
  margin: 3.125em 0;
  min-width: 320px;
  width: 890px;

  &__head {
    position: relative;
    margin-bottom: 1em;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
  }

  &__title {
    display: flex;
    align-items: flex-end;
    font-family: var(--font-primary);

    > h1 {
      font-family: var(--font-primary);
      font-size: 1.875rem;
      margin-right: 0.3125rem;
    }
  }

  &__body {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 1.25em 0.875em 1.25em 0;
    height: 455px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 18px;
      border-radius: 5px;
      border: 1px solid hsl(var(--dark));
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--other-color);
      border: 3px solid transparent;
      border-radius: 10px;
      background-clip: content-box;
    }
  }

  &__footer {
    font-family: var(--font-primary);
    font-size: 1.125rem;

    > ul {
      padding: 1.25em 0;

      > li {
        display: flex;
        justify-content: space-between;

        + li {
          margin-top: 1em;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    margin: 0 -1.375em;

    > button {
      font-family: var(--font-fourthary);
      flex-grow: 1;
      padding: 1rem 0;
      border-radius: 10px;
      font-size: 1.375rem;
      margin: 0 1.375rem;
    }

    > button:nth-child(1) {
      color: var(--link);
      background-color: transparent;
      border: 1px solid var(--link);
    }

    > button:nth-last-child(1) {
      border: none;
      background-color: var(--link);
      color: var(--light);
    }
  }
}

.product {
  display: flex;
  padding: 1.25em 0;

  & + & {
    border-top: 1px solid var(--border-color);
  }

  &:nth-child(1) {
    padding-top: 0;
  }

  &:nth-last-child(1) {
    padding-bottom: 0;
  }

  &__picture {
    margin-right: 0.625em;
  }

  &__content {
    width: 100%;
    position: relative;

    > * {
      font-family: var(--font-primary);
    }

    > header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.9375em;

      > h2 {
        font-size: 1.125rem;
        font-family: var(--font-primary);
      }
    }

    > footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      font-size: 1.125rem;
    }
  }

  &__count {
    > span {
      display: inline-block;
      padding: 0 0.625rem;
      margin: 0 0.625rem;
      line-height: 1.5;
      border-right: 1px solid hsl(var(--dark));
      border-left: 1px solid hsl(var(--dark));
    }

    > button {
      border: none;
      background-color: transparent;
      transition: color 0.2s;

      &:hover {
        color: var(--link);
      }
    }
  }

  &__option {
    position: relative;
    width: 10px;

    > svg {
      margin: 0 auto;
      display: inline;
      cursor: pointer;
    }

    &:hover > ul {
      display: block;
    }

    > ul {
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--other-color);
      padding: 0.625em;
      box-shadow: 5px 5px 10px var(--dark-transparent);
      width: 185px;

      > li {
        + li {
          margin-top: 0.625em;
        }

        > button {
          border: none;
          background-color: transparent;
          display: flex;
          align-items: center;

          > svg {
            margin-right: 0.625em;
          }

          > span {
            color: var(--light);
          }
        }
      }
    }
  }

  &__settings {
    > div {
      display: flex;

      + div {
        margin-top: 0.3125em;
      }

      > p {
        font-size: 1.125rem;
        margin-right: 0.27em;
      }
    }
  }

  &__select {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 40%;
      display: block;
      border: 0.3em solid;
      border-color: black transparent transparent;
      transition: all 0.1s ease-out;
    }

    > select {
      border: none;
      background-color: transparent;
      margin-right: 0.625em;
      appearance: none;
    }
  }
}
</style>
