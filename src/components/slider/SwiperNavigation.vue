<template>
  <!-- If we need pagination -->
  <div class="swiper-pagination slider-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev arrow-prev">
    <svg
      style="transform: rotate(180deg)"
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
  </div>
  <div class="swiper-button-next arrow-next">
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
  </div>
</template>

<style lang="postcss" scoped>
.slider-pagination > span {
  background-color: var(--link-not-active);
}

:global(span.swiper-pagination-bullet-active) {
  background-color: var(--link);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.arrow-next,
.arrow-prev {
  top: auto;
  bottom: 0;
  width: auto;
  height: auto;

  @media (max-width: 425px) {
    display: none;
  }

  &.swiper-button-disabled {
    display: none;
  }
}
</style>
