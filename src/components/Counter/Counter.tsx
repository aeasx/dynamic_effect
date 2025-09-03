import { Button } from "antd"
import { useState } from "react"

/** 每次点击+3按钮实际上只会让 `number` 递增一次 */
export const Counter = () => {
  const [number, setNumber] = useState(0)
  // Reasons are as follows
  // 设置的 `state` 只会为下一次渲染变更 `state` 的值。
  // 在第一次渲染期间，number=0,所以三次setNumber,最终的state都是 1，
  // 呈现在页面上的效果就是每次点击按钮，数字+1
  return (
    <>
      <h1>{number}</h1>
      <Button
        onClick={
          () => {
            setNumber(number + 1)
            setNumber(number + 1)
            setNumber(number + 1)
          }
        }
      >+3</Button>
    </>
  )
}

export const Counter02 = () => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <h1>{number}</h1>
      <Button
        onClick={() => {
          setNumber(number + 5)
          // 到提示框运行时，React中存储的 `state` 可能已经发生了更改,
          // 但它是使用用户与之交互时的状态的快照及逆行调度的！
          // 所以定时器里面的alert的值还是0
          setTimeout(() => {
            alert(number)
          }, 2000)
        }}>
        +5
      </Button>
    </div>
  )
}
