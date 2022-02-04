<template>
  <div class="error">
    <div class="container">
      <div class="error__content">
        <figure>
          <img src="../assets/img/icons/404.svg" alt="404" />
        </figure>
        <div class="error__text">
          <p>Упс! Сторінка не знайдена :(</p>
          <p>Заходь до каталогу, підберемо для тебе щось цікаве.</p>
        </div>
        <router-link
          :to="{ name: 'Catalog' }"
          class="button button-fill error__button">
          Перейти до каталогу
        </router-link>
      </div>
    </div>
  </div>
</template>
