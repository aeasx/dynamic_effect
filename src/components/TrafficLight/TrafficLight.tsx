import { Button } from "antd"
import { useState } from "react"

export const TrafficLight = () => {
  const [walk, setWalk] = useState(true)
  const handleClick = () => {
    setWalk(!walk)
    // 读作：绿灯时，接下来是Stop
    alert(walk ? 'Stop is next' : 'Walk is next')
  }
  return (
    <>
      <Button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </Button>
      <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  )
}
