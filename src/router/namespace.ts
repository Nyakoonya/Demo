export namespace SyncRoute {
  export type Routes = {
    path: string;
    element: React.LazyExoticComponent<any>;
    children?: Routes[];
    isAuth?: boolean,
    title: string,
    meta?: number | boolean,
    reg?: string,
    isDynamic?: boolean
  };
}
