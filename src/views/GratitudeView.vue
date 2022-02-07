<template>
  <section class="gratitude">
    <div class="container">
      <div class="gratitude__success">
        <h1>Дякуємо за замовлення!</h1>
        <p>
          Деталі були відправлені на твій email. Чекаємо на відгуки :)
          Посміхнись, ти чарівна!
        </p>
        <router-link :to="{ name: 'Catalog' }" class="button button-fill">
          Перейти до каталогу
        </router-link>
      </div>
    </div>
  </section>
</template>
