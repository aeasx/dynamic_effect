import { useEffect, useState } from "react";

export const ClockTime = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
      <p>
        选择一个颜色：{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">浅珊瑚色</option>
          <option value="midnightblue">午夜蓝</option>
          <option value="rebeccapurple">丽贝卡紫</option>
        </select>
      </p>
      {/* props 是只读的时间快照：每次渲染都会收到新版本的 Props */}
      {time.getSeconds()}
      <Clock color={color} time={time.toLocaleDateString()} />
    </div>
  )
}

const Clock = ({ color, time }: { color: string, time: string }) => {
  return (
    <h1 style={{ color }}>{time}</h1>
  )
}

const useTime = () => {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}
