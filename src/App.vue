<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>
