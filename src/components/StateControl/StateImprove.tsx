import { Button } from "antd"
import { useState, type FC, type ReactNode } from "react"

// 现在需要一个Panel点击show之后，另外一个Panel隐藏，目前Panel组件是非受控的。
// 受控组件的一个最重要的特征就是组件内部的重要信息是由props而不是由自身state驱动的
// 需要进行状态提升
export const StateImprove = () => {
  // 为公共父组件添加状态
  // 状态提升通常会改变原状态的数据存储类型
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div>
      <h1>状态提升</h1>
      {/* Panel 组件中无法直接设置状态 activeIdx 的值，因为该状态是在 StateImprove 组件内部定义的
          `StateImprove` 组件需要显示允许 Panel 组件通过事件处理程序作为prop向下传递来更改其内部状态
      */}
      <Panel title="关于" isActive={activeIdx === 0} onShow={() => setActiveIdx(0)}>
        阿拉木图人口约200万，是哈萨克斯坦最大的城市。它在 1929 年到 1997 年间都是首都。
      </Panel>
      <Panel title="词源" isActive={activeIdx === 1} onShow={() => setActiveIdx(1)}>
        这个名字来自于 <span lang="kk-KZ">алма</span>，哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。事实上，阿拉木图的周边地区被认为是苹果的发源地，<i lang="la">Malus sieversii</i> 被认为是现今苹果的祖先。
      </Panel>
    </div>
  )
}

interface PanelProps {
  title: string,
  children?: ReactNode,
  isActive: boolean,
  onShow: () => void
}

const Panel: FC<PanelProps> = ({ title, children, isActive, onShow }) => {
  return (
    <div>
      <h1>{title}</h1>
      {
        isActive
          ? <p>{children}</p>
          : <Button onClick={onShow}>Show</Button>
      }
    </div>
  )
}