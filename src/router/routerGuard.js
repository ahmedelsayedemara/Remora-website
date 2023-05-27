// import { publicRoutesPaths } from "./publicRoutes"
// import store from "@/store"

// export const handleRouteNavigation = (to, from, next) => {
//   if (publicRoutesPaths.includes(to.path)) {
//     return !store.getters.token ? next() : next({ name: "home" })
//   }

//   if (store.getters.token) return next()
//   else {
//     store.dispatch("removeUser")
//     next({ name: "login" })
//   }
// }
