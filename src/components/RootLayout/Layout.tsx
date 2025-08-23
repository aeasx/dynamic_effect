import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <div className="w-screen h-[100px] bg-amber-400/30">
        RootLayout
      </div>
      {/* 插槽 */}
      <Outlet />
    </>
  )
};
