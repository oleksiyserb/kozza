<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>

<script>
import Default from "./layouts/Default.vue";
import Callback from "./layouts/Callback.vue";

export default {
  components: {
    Default,
    Callback
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "Default";
    }
  }
};
</script>
