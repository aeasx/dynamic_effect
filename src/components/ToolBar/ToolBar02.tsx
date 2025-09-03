import { Button } from "antd"
import type { FC, ReactNode } from "react"

interface I_ToolBar02Props {
  children?: ReactNode
}

export const ToolBar02: FC<I_ToolBar02Props> = ({ children }) => {
  return (
    <div>
      <div className="flex gap-2">
        <PlayButton movieName="魔女宅急便" />
        <UploadButton />
      </div>
      {children}
    </div>
  )
}

interface I_MyButtonProps {
  myOnClick: () => void,
  children?: ReactNode
}
// 将事件处理函数作为属性传递,外界在使用此组件时，只需将事件处理程序作为属性传递
// 不必关系组件内部如何处理
const MyButton: FC<I_MyButtonProps> = ({ myOnClick, children }) => {
  return (
    <Button onClick={myOnClick}>
      {children}
    </Button>
  )
}

interface I_PlayButtonProps {
  movieName: string
}

const PlayButton: FC<I_PlayButtonProps> = ({ movieName }) => {
  const handlePlayClick = () => {
    alert(`正在播放 ${movieName}!`)
  }
  return (
    <MyButton myOnClick={handlePlayClick}>
      播放 "{movieName}"
    </MyButton>
  )
}

const UploadButton = () => {
  return (
    <MyButton myOnClick={() => alert('正在上传！')}>
      上传图片
    </MyButton>
  )
}