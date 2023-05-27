import Vue from "vue";
import Router from "vue-router";

import protectedRoutes from "./protectedRoutes";
import publicRoutes from "./publicRoutes";
import { handleRouteNavigation } from "./routerGuard";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...publicRoutes, ...protectedRoutes],
});
// router.beforeEach(handleRouteNavigation);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
