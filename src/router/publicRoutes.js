const publicRoutes = [
  { 
    path:"/",
    name: "home",
    component: () => import("../views/application/home/index.vue")
  },
  { 
    path:"/blog",
    name: "blog",
    component: () => import("../views/application/blog/list/index.vue")
  },
  ]

export const publicRoutesPaths = publicRoutes.map((route) => route.path)

export default publicRoutes
