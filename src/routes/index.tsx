import React, { lazy } from "react";
import type { RouteObject } from "react-router";
import { Home } from "~/pages";

/** Lazy loading component */
export const createComponent = (loader: () => Promise<{ default: React.ComponentType<unknown> }>) => {
  const Component = lazy(loader)
  return <Component />
}

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Home,
    loader: () => null
  }
]

export default routes