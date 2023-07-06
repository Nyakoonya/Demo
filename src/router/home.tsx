import { lazy } from "react";
import { SyncRoute } from './namespace';

const routes: SyncRoute.Routes[] = [
  {
    path: "/login",
    element: lazy(() => import("../views/Login")),
    isAuth: true
  },
  {
    path: "/",
    element: lazy(() => import("../views/Home")),
  },
  {
    path: "/folders",
    element: lazy(() => import("../views/Home")),
  },
  {
    path: "/folders/:id",
    element: lazy(() => import("../views/Folder")),
  },
  {
    path: "/folders/:id/dashboard/:id",
    element: lazy(() => import("../views/Dashboard")),
  }
];

export default routes;
