import { Button } from "antd"
import { useState } from "react"

const initValue = [0, 0, 0]
export const CounterList = () => {
  const [countList, setCountList] = useState(initValue)
  const handleIncrementClick = (idx: number) => {
    const nextState = countList.map((c, i) => {
      if (i === idx) {
        return c + 1
      } else {
        return c
      }
    })
    setCountList(nextState)
  }
  return (
    <ul>
      {countList.map((c, i) => (
        <li key={i} className="flex w-[120px] px-2 justify-between">
          <span>{c}</span>
          <Button type="primary" onClick={() => {
            handleIncrementClick(i)
          }}>+1</Button>
        </li>
      ))}
    </ul>
  )
}
