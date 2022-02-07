<template>
  <AppHeader />
  <main>
    <slot></slot>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "Default",

  components: {
    AppHeader,
    AppFooter
  }
};
</script>
