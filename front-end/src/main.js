import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import HomePage from "./pages/nav-pages/HomePage.vue";
import AboutPage from "./pages/nav-pages/AboutPage.vue";
import ContactPage from "./pages/nav-pages/ContactPage.vue";
import ProductsPage from "./pages/nav-pages/ProductPage.vue";
import NotFound from "./pages/NotFoundPage.vue";
//css from bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(),
      routes: [
        {
          path: "/",
          component: HomePage,
        },
        {
          path: "/about",
          component: AboutPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/contact",
          component: ContactPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFound,
        },
      ],
    })
  )
  .mount("#app");