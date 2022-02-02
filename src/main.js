import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/node_modules/swiper/swiper-bundle.min.css";
import "@/assets/css/_fonts.css";
import "@/assets/css/main.css";

createApp(App).use(store).use(router).mount("#app");
