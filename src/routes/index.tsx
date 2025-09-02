import { RootLayout } from "@components/index";
import { Button, Result, Spin } from "antd";
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
    Component: RootLayout,
    handle: { title: 'Root' },
    HydrateFallback: () => <Spin fullscreen />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'poster',
        Component: createComponent(() => import('~/pages/posters/page')),
        loader: () => null
      }
    ]
  },
  {
    // 通配符路径，会匹配所有未被其它路由规则匹配的路径。
    // 再 react-router中，这种通配符路由通常放在路由配置的最后，作为`兜底`路由。
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href="/">Return Home</Button>}
      />
    ),
    // 为该路由设置的元数据
    handle: {
      title: '404',
    },
  }
]

export default routes;