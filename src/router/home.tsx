import { lazy } from "react";
import { SyncRoute } from './namespace';

const routes: SyncRoute.Routes[] = [
  {
    path: "/login",
    title: 'Login',
    element: lazy(() => import("../views/Login")),
    isAuth: true
  },
  {
    path: "/",
    title: 'Home',
    element: lazy(() => import("../views/Home")),
  },
  {
    path: "/folders",
    title: 'Home',
    element: lazy(() => import("../views/Home")),
  },
  {
    path: "/folders/:folderId",
    title: 'Folder',
    element: lazy(() => import("../views/Folder")),
  },
  {
    path: "/folders/:folderId/dashboard/:dashId",
    title: 'Dash',
    element: lazy(() => import("../views/Dashboard")),
  }
];

export const breadcrumbNameMap: Record<string, string> = {
  '/': 'Home',
  '/folders': 'Folder',
  '/folders/dashboard': 'Dashboard',
};

export default routes;
