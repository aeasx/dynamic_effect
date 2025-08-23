import { lazy } from "react";
import type { RouteObject } from "react-router";
import { Home } from "~/pages";

/** Lazy loading component */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createComponent = (loader: () => Promise<{ default: React.ComponentType<any> }>) => {
  return lazy(loader)
}


const routes: RouteObject[] = [
  {
    path: '/',
    Component: Home,
    loader: () => null
  },
  {
    path: '/poster',
    Component: createComponent(() => import('~/pages/posters/page')),
    loader: () => null
  }
]

export default routes