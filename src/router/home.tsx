import { lazy } from "react";
import { SyncRoute } from './namespace';

const routes: SyncRoute.Routes[] = [
  {
    path: "/login",
    title: 'Login',
    element: lazy(() => import("../views/Login")),
    isAuth: true,
    meta: 0
  },
  {
    path: "/",
    title: 'IndexPage',
    element: lazy(() => import("../views/IndexPage")),
    meta: 1,
    reg: '^/$',
    isDynamic: false,
  },
  {
    path: "/folders",
    title: 'AllFolders',
    element: lazy(() => import("../views/Home")),
    meta: 1,
    reg: '^/folders$',
    isDynamic: false
  },
  {
    path: "/folders/:folderId",
    title: 'Folder',
    element: lazy(() => import("../views/Folder")),
    meta: 1,
    reg: '^/folders/\\d+$',
    isDynamic: true
  },
  {
    path: "/folders/:folderId/dashboard/:dashId",
    title: 'Dash',
    element: lazy(() => import("../views/Dashboard")),
    meta: 1,
    reg: '^/folders/\\d+/dashboard/\\d+$',
    isDynamic: true
  }
];

export const breadcrumbNameMap = {
  '^/$': ['Home'],
  '^/folders$': ['Home', 'AllFolders'],
  '^/folder/\d+$': ['Home', 'AllFolders', 'Folder'],
  '^/folders/\d+/dashboard/\d+$': ['Home', 'AllFolders', 'Folder', 'Dashboard'],
};

export default routes;
