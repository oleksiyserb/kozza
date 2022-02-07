import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/MainView.vue")
  },
  {
    path: "/catalog",
    name: "Catalog",
    meta: {
      title: "Каталог"
    },
    component: () => import("../views/CatalogView.vue")
  },
  {
    path: "/size-table",
    name: "SizeTable",
    meta: {
      title: "Розмірна таблиця"
    },
    component: () => import("../views/SizeTableView.vue")
  },
  {
    path: "/wholesale",
    name: "Wholesale",
    meta: {
      title: "Оптові закупівлі"
    },
    component: () => import("../views/WholesaleView.vue")
  },
  {
    path: "/delivery-payment",
    name: "DeliveryPayment",
    meta: {
      title: "Доставка та оплата"
    },
    component: () => import("../views/DeliveryPaymentView.vue")
  },
  {
    path: "/ordering",
    name: "Ordering",
    meta: {
      layout: "Callback",
      title: "Оформлення замовлення"
    },
    component: () => import("../views/OrderingView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      title: "Сторінку не знайдено"
    },
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

import { nextTick } from "vue";

router.afterEach(async to => {
  const { title } = to.meta;
  const brand = "Kozza";

  nextTick(() => {
    document.title = `${title ? title + " | " : ""}${brand}`;
  });
});

export default router;
