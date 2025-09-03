import { Button } from "antd"
import { useEffect } from "react"

const Cup = ({ guest }: { guest: number }) => {
  return <h2>Tea cup for guest #{guest}</h2>
}

export function TeaGathering() {
  const cups = []
  const handleClick = () => {
    console.log(`点击了按钮，事件处理程序即使是在组件内部定义，也不会在渲染期间运行`)
  }
  // 当组件被添加到DOM中时，react将运行setup函数，在每次依赖项变更重新渲染后
  // React将首先使用旧值运行cleanup函数(如果提供了此函数)。当组件从Dom中移除后，React将最后一次运行cleanup函数
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(`定时器trigger`)
    }, 2000)
    // 下面是cleanup(清理函数)
    return () => clearTimeout(timerId)
    // 如果省略依赖项，则在每次重新渲染组件之后，重新运行Effect函数
  }, [])
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup guest={i} key={i} />)
  }

  return (
    <>
      <Button type="primary" onClick={handleClick}>事件处理程序</Button>
      {cups}
    </>
  )
}
