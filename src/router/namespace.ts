export namespace SyncRoute {
  export type Routes = {
    path: string;
    element: React.LazyExoticComponent<any>;
    children?: Routes[];
  };
}
