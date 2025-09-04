import { Button } from 'antd'
import { useState } from 'react'

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
      {/* React will not process your state update until all the code within the event
        handler function has completed execution. This is why re-render only occurs after all these calls
        to setNumber()
      */}
      <Button
        onClick={() => {
          // 根据队列中的前一个state计算下一个state
          setNumber(number + 1)
          setNumber(number + 1)
          setNumber(number + 1)
        }}
      >
        +3
      </Button>
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
        }}
      >
        +5
      </Button>
    </div>
  )
}

export const Counter03 = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <div className='flex gap-2'>
        {/* 事件处理函数执行完成后，React将触发重新渲染。在重渲染期间，React将处理队列。更新函数会在渲染期间执行，
            因此，更新函数必须是纯函数并且只返回结果 */}
        <Button
          onClick={() => {
            // 这里 n=>n+1 被称为更新函数。当将它传递给一个 state 设置函数时
            // 1.React会将此函数加入队列，以便在事件处理函数中的所有其它code运行完成后进行处理
            // 2.在下一次渲染期间，React会遍历队列并给你更新后的最终 `state`
            // SO React会保存3为最终结果并从 `useState` 中返回
            setCount((n) => n + 1)
            setCount((n) => n + 1)
            setCount((n) => n + 1)
          }}
        >
          +3
        </Button>
        {/* 在替换state之后更新state,
          process:
          1.处理事件处理函数中的其它code
          2.将setCount函数(对state的处理)加入队列，以便在下一次渲染期间遍历队列，返回最终更新后的 `state`
          3.这里点击button后count每次增加6
        */}
        <Button onClick={() => {
          // React 将替换为5添加到队列中
          setCount(count + 5)
          // n=>n+1是一个更新函数，React将改函数添加到队列中
          setCount(c => c + 1)
          // 通常以相应 state 变量的第一个字母来命名更新函数的参数
        }}>
          +1
        </Button>
      </div>

    </>
  )
}
