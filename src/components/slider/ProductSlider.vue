<template>
  <section class="swiper-wrapper">
    <article
      class="swiper-slide product__item"
      v-for="product in sliderProducts"
      :key="product.id">
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="product__like">
        <path
          d="M20.3 0C17.7917 0.00392404 15.4419 1.24323 14 3.32228C12.5581 1.24323 10.2083 0.00392404 7.7 0C3.59798 0 0 3.8661 0 8.2728C0 12.5675 2.39395 16.9909 6.92344 21.0649C9.02207 22.9489 11.3242 24.5867 13.7858 25.9474C13.9202 26.0175 14.0798 26.0175 14.2142 25.9474C16.6749 24.5867 18.9763 22.9487 21.0743 21.0649C25.6061 16.9909 28 12.5675 28 8.2728C28 3.8661 24.402 0 20.3 0V0ZM14 24.9899C12.286 24.0317 0.933333 17.3378 0.933333 8.2728C0.933333 4.36953 4.09495 0.945463 7.7 0.945463C10.1423 0.949849 12.3936 2.28448 13.5935 4.43947C13.6833 4.57843 13.8362 4.66199 14 4.66199C14.1638 4.66199 14.3167 4.57843 14.4065 4.43947C15.6064 2.28448 17.8577 0.949849 20.3 0.945463C23.905 0.945463 27.0667 4.36953 27.0667 8.2728C27.0667 17.3378 15.714 24.0317 14 24.9899Z"
          fill="#E84A5F" />
      </svg>
      <a href="#" class="product__image">
        <img :src="product.image" alt="slider-product" />
      </a>
      <div class="product__description">
        <h1>{{ product.title }}</h1>
        <div class="product__info flex">
          <div class="product__price">
            <ul class="flex">
              <li v-for="variant in product.variants" :key="variant.id">
                <span
                  @click="updateImage(product, variant.images[0])"
                  :style="`background-color: ${variant.hashColor}`"></span>
              </li>
            </ul>
            <span>{{ product.price }} грн</span>
          </div>
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
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    sliderProducts: {
      type: Object,
      require: true
    }
  },
  methods: {
    updateImage(product, variantImage) {
      product.image = variantImage;
    }
  }
};
</script>
