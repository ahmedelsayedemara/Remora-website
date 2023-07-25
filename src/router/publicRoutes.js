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
  { 
    path:"/blog-details/:id",
    name: "blog-details",
    component: () => import("../views/application/blog/details/index.vue")
  },
  { 
    path:"/leaders",
    name: "leaders",
    component: () => import("../views/application/leaders/index.vue")
  },
  ]

export const publicRoutesPaths = publicRoutes.map((route) => route.path)

export default publicRoutes
