import { Input } from "antd"
import { type FC, type ReactNode } from "react"
import { useTime } from "~/hooks"

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  return (
    <>
      <div className="w-screen h-full bg-orange-200/20">
        <h1>Home Page</h1>
        <Clock />
      </div>
    </>
  )
}

export default Home

/** 这个例子也说明了React仅在渲染之间存在差异时才会
 * 更新DOM节点
  */
const Clock = () => {
  const time = useTime()
  return (
    <>
      <h1>{time}</h1>
      <Input style={{ maxWidth: 200 }} allowClear placeholder="insert something" />
    </>
  )
}