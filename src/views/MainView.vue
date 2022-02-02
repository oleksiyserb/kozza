<template>
  <!-- Hero -->
  <section class="hero">
    <div class="container grid">
      <h1 class="hero__title">
        Знижка 15% на мереживну колекцію до кінця осені
      </h1>
      <div class="hero__link">
        <h2>
          <a href="#">
            <span> Перейти до каталогу </span>
            <svg
              width="113"
              height="50"
              viewBox="0 0 113 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="88"
                cy="25"
                r="24"
                stroke="#E84A5F"
                stroke-width="2" />
              <path
                d="M88.7071 24.7071C89.0976 24.3166 89.0976 23.6834 88.7071 23.2929L82.3431 16.9289C81.9526 16.5384 81.3195 16.5384 80.9289 16.9289C80.5384 17.3195 80.5384 17.9526 80.9289 18.3431L86.5858 24L80.9289 29.6569C80.5384 30.0474 80.5384 30.6805 80.9289 31.0711C81.3195 31.4616 81.9526 31.4616 82.3431 31.0711L88.7071 24.7071ZM0 25H88V23H0L0 25Z"
                fill="#E84A5F" />
            </svg>
          </a>
        </h2>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="about">
    <div class="background-image about__background">
      <img src="../assets/img/icons/background-icon.svg" alt="image" />
    </div>
    <div class="container grid">
      <div class="about__slogan">
        <img src="../assets/img/icons/logo.svg" alt="logo" />
        <span>— бренд про жінок та для жінок</span>
      </div>
      <a class="about__link" href="#"
        ><strong>Дізнатися більше про нас</strong>
        <svg
          width="113"
          height="50"
          viewBox="0 0 113 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="88" cy="25" r="24" stroke="#E84A5F" stroke-width="2" />
          <path
            d="M88.7071 24.7071C89.0976 24.3166 89.0976 23.6834 88.7071 23.2929L82.3431 16.9289C81.9526 16.5384 81.3195 16.5384 80.9289 16.9289C80.5384 17.3195 80.5384 17.9526 80.9289 18.3431L86.5858 24L80.9289 29.6569C80.5384 30.0474 80.5384 30.6805 80.9289 31.0711C81.3195 31.4616 81.9526 31.4616 82.3431 31.0711L88.7071 24.7071ZM0 25H88V23H0L0 25Z"
            fill="#E84A5F" />
        </svg>
      </a>
    </div>
  </section>

  <!-- Collections -->
  <section class="collections">
    <div class="container">
      <h1 class="title collections__title">Колекції</h1>
      <div class="swiper product-collections__slider">
        <section class="swiper-wrapper">
          <article class="swiper-slide collections__item">
            <figure class="collections__image">
              <img src="../assets/img/product.png" alt="slider-product" />
              <figcaption>Basic</figcaption>
            </figure>
          </article>
          <article class="swiper-slide collections__item">
            <figure class="collections__image">
              <img src="../assets/img/product.png" alt="slider-product" />
              <figcaption>Basic</figcaption>
            </figure>
          </article>
          <article class="swiper-slide collections__item">
            <figure class="collections__image">
              <img src="../assets/img/product.png" alt="slider-product" />
              <figcaption>Basic</figcaption>
            </figure>
          </article>
          <article class="swiper-slide collections__item">
            <figure class="collections__image">
              <img src="../assets/img/product.png" alt="slider-product" />
              <figcaption>Basic</figcaption>
            </figure>
          </article>
        </section>
        <SwiperNavigation />
      </div>
      <div class="background-image collections__background">
        <img src="../assets/img/icons/background-icon.svg" alt="image" />
      </div>
    </div>
  </section>

  <!-- Product -->
  <section class="product">
    <div class="container">
      <h1 class="title product__title">Що може тебе зацікавити?</h1>
      <div class="swiper product-collections__slider">
        <ProductSlider :sliderProducts="sliderProducts" />
        <SwiperNavigation />
      </div>
    </div>
  </section>

  <!-- Advantages -->
  <section class="advantages">
    <div class="background-image">
      <img src="../assets/img/icons/background-icon.svg" alt="image" />
    </div>
    <div class="container">
      <h1 class="title advantages__title">Чому жінки обирають нас?</h1>
      <div class="swiper advantages__slider">
        <div class="swiper-wrapper advantages__wrapper">
          <div class="swiper-slide advantages__item">
            <div class="advantages__image">
              <img src="../assets/img/slider-product-2.png" alt="slider" />
            </div>
            <p>
              Наш офлайн-магазин, в якому ти завжди зможеш розраховувати на
              дружній прийом
            </p>
          </div>
          <div class="swiper-slide advantages__item">
            <div class="advantages__image">
              <img src="../assets/img/slider-product.png" alt="slider" />
            </div>
            <p>Ми любимо тебе будь-якою! Просто пам’ятай, що ти неймовірна!</p>
          </div>
          <div class="swiper-slide advantages__item">
            <div class="advantages__image">
              <img src="../assets/img/slider-product-3.png" alt="slider" />
            </div>
            <p>Безкоштовна доставка від 800 грн!</p>
          </div>
        </div>
        <SwiperNavigation />
      </div>
    </div>
    <div class="background-image advantages-bottom__background">
      <img src="../assets/img/icons/background-icon.svg" alt="image" />
    </div>
  </section>

  <!-- Subscribe -->
  <section class="subscribe">
    <div class="container grid">
      <div class="subscribe__info">
        <h1>
          Підписуйся на наші новини та отримуй 15% знижки на колекцію білизни
          Basic.
        </h1>
        <form action="/subscribe" method="post" class="subscribe__form">
          <input type="email" name="email" placeholder="Email" />
          <button class="button button-fill" type="submit" name="submit">
            Підписатися
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swiper, { Navigation, Pagination } from "swiper";
import SwiperNavigation from "../components/slider/SwiperNavigation.vue";
import ProductSlider from "@/components/slider/ProductSlider.vue";

export default {
  components: {
    SwiperNavigation,
    ProductSlider
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    axios.get(process.env.BASE_URL + "assets/data.json").then(response => {
      this.products = response.data.products;
    });
  },
  mounted() {
    Swiper.use([Navigation, Pagination]);

    new Swiper(".product-collections__slider", {
      spaceBetween: 30,
      slidesPerView: "auto",
      pagination: {
        el: ".slider-pagination",
        type: "bullets"
      },
      speed: 1000,
      navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev"
      }
    });

    new Swiper(".advantages__slider", {
      slideClass: "advantages__item",
      wrapperClass: "advantages__wrapper",
      slideActiveClass: "advantages-item__active",
      spaceBetween: 80,
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      speed: 1000,
      navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev"
      }
    });
  },
  computed: {
    sliderProducts() {
      return this.products.slice(0, 6);
    }
  }
};
</script>
