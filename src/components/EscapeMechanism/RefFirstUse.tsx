import { Button } from "antd"
import { useRef, useState } from "react"

export const RefFirstUse = () => {
  // 你希望组件记住某些信息，但又不想让这些信息的改变触发重渲染，此时可以使用Ref
  const count = useRef(0)
  const handleClick = () => {
    count.current++
    console.log(`点击了${count.current}次`)
  }
  return (
    <div>
      <Button onClick={handleClick}> 点击了 {count.current} 次</Button>
    </div>
  )
}

/** 创建一个秒表 */
export const SecondChron = () => {
  const [startTime, setStartTime] = useState<null | number>(null)
  const [nowTime, setNowTime] = useState<null | number>(null)
  const timeIdRef = useRef<NodeJS.Timeout>(null)

  const handleStart = () => {
    setStartTime(Date.now())
    setNowTime(Date.now())
    timeIdRef.current = setInterval(() => {
      setNowTime(Date.now())
    }, 10)
  }

  const handleStop = () => {
    if (timeIdRef.current) {
      clearInterval(timeIdRef.current)
    }
    timeIdRef.current = null
  }

  let hasPassedTime = 0
  if (startTime !== null && nowTime !== null) {
    hasPassedTime = (nowTime - startTime) / 1000
  }

  return (
    <div>
      <h1 className="text-[20px] font-bold">
        时间过去了 {hasPassedTime} s
      </h1>
      <div className="flex gap-2">
        <Button onClick={handleStart}>start</Button>
        <Button onClick={handleStop}>Stop</Button>
      </div>
    </div>
  )
}
