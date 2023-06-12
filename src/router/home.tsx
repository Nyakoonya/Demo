import { lazy } from "react";
import { SyncRoute } from './namespace';

const routes: SyncRoute.Routes[] = [
  {
    path: "/",
    element: lazy(() => import("../views/Home")),
  },
];

export default routes;
