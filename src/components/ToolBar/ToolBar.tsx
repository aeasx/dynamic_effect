import { Button } from "antd"
import type { FC, ReactNode } from "react"

export const ToolBar: FC = () => {
  return (
    <div className="flex gap-2">
      <AlertButton message="movies">
        open movies
      </AlertButton>
      <AlertButton message="notes">
        open notes
      </AlertButton>
    </div>
  )
}

interface I_AlterButtonProps {
  children?: ReactNode,
  message: string
}

const AlertButton: FC<I_AlterButtonProps> = ({ children, message }) => {
  // 在事件处理程序中读取Props
  return (
    <Button onClick={() => alert(message)}>
      {children}
    </Button>
  )
}