import { SyncRoute } from './namespace';
import homeRoutes from "./home";
import { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";


const RouteTable: SyncRoute.Routes[] = [
  ...homeRoutes
];

const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
  let mRouteTable: RouteObject[] = [];
  table.forEach(route => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>waiting...</div>}>
          <route.element />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  });

  return mRouteTable;
}

export default () => useRoutes(syncRouter(RouteTable))
