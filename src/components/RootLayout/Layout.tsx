import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <div className="w-screen h-[100px] flex-center">
        RootLayout
      </div>
      {/* 插槽 */}
      <Outlet />
    </>
  )
};
