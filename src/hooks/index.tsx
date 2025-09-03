import { useEffect, useState } from "react"

export const useTime = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      const newTime = new Date()
      setTime(newTime)
    }, 1000)
    return () => clearInterval(timerId)
  }, [])
  return time.toLocaleTimeString()
}