import { Spin } from "antd";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";

const router = createBrowserRouter(routes)

function RootApp() {
  return (
    <Suspense fallback={<Spin fullscreen />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default RootApp
