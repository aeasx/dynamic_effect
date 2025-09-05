import { Spin } from "antd"
import clsx from "clsx"
import type { FC } from "react"

interface MyLoadingProps {
  className?: string
}

export const MyLoading: FC<MyLoadingProps> = ({ className }) => {
  return (
    <div className={clsx("flex-center p-[20px] h-screen", className)}>
      <Spin fullscreen />
      <span className="text-12 mt-6">加载中...</span>
    </div>
  )
}
