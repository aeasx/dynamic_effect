import React, { lazy } from "react"
import type { RouteObject } from "react-router"

/** Lazy loading component */
export const createComponent = (loader: () => Promise<{ default: React.ComponentType<unknown> }>) => {
  const Component = lazy(loader)
  return <Component />
}

const routes: RouteObject[] = [
  {
    path: '/',
    // Component: () => <div>你好</div>
    element: <div>hello,world!</div>,
    loader: () => null
  }
]

export default routes