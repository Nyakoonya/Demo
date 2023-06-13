import { SyncRoute } from './namespace';
import homeRoutes from "./home";
import { Suspense, lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import AuthRouter from './AuthRouter'

const Layout = lazy(() => import('@/views/Layout'));

const RouteTable: SyncRoute.Routes[] = [
  ...homeRoutes
];

const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
  let mRouteTable: RouteObject[] = [];
  table.forEach(route => {
    if (route.isAuth) {
      mRouteTable.push({
        path: route.path,
        element: (
          <Suspense fallback={<div>waiting...</div>}>
            <AuthRouter>
              <route.element />
            </AuthRouter>
          </Suspense>
        ),
        children: route.children && syncRouter(route.children)
      })
    } else {
      mRouteTable.push({
        path: route.path,
        element: (

          <Suspense fallback={<div>waiting...</div>}>
            <AuthRouter>
              <Layout>
                <route.element />
              </Layout >
            </AuthRouter>
          </Suspense>
        ),
        children: route.children && syncRouter(route.children)
      })
    }

  });

  return mRouteTable;
}

export default () => useRoutes(syncRouter(RouteTable))
