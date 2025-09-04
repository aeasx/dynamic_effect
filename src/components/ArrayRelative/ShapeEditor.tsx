import { useState, type MouseEventHandler } from "react"
import { Button } from "antd"
const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
]

export const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes)
  const handleClick: MouseEventHandler<HTMLElement> = () => {
    const nextShape = shapes.map(shape => {
      if (shape.type === 'square') {
        // 不做改变
        return shape
      } else {
        return {
          ...shape,
          y: shape.y + 50
        }
      }
    })
    setShapes(nextShape)
  }
  return (
    <>
      <Button onClick={handleClick}>所有圆形向下移动</Button>
      {
        shapes.map(shape => (
          <div key={shape.id} className="bg-purple-500 absolute w-[20px] h-[20px] transition-all"
            style={{
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === 'circle' ? '50%' : ''
            }}>
          </div>
        ))
      }
    </>
  )
}
