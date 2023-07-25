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
    path: "/folders/:folderId",
    element: lazy(() => import("../views/Folder")),
  },
  {
    path: "/folders/:folderId/dashboard/:dashId",
    element: lazy(() => import("../views/Dashboard")),
  }
];

export default routes;
