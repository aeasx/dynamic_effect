import { useState, type PointerEventHandler } from "react"

export const Mutation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handlePointMove: PointerEventHandler<HTMLDivElement> = (e) => {
    // 应该将 state 中的数据认为是只读的，不论是基本数据类型还是引用数据类型。
    // 当需要修改state中的`对象`时，应该使用新的`对象`进行覆盖
    /* -------------------------------------------------------------------------- */
    // 使用setPosition ,你在告诉React:
    // 1.使用这个新的对象替换Position的值
    // 2.然后再次渲染这个组件
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  return (
    <>
      <div className="w-screen h-screen relactive" onPointerMove={handlePointMove}>
        <h1>DashBoard</h1>
        <div className="font-bold text-2xl">
          {JSON.stringify(position, null, 2)}
        </div>
        <div className="absolute bg-red-600 rounded-[50%] w-[20px] h-[20px] left-[-10px] top-[-10px]"
          style={{
            transform: `translate(${position.x}px,${position.y}px)`
          }}
        ></div>
      </div>
    </>
  )
}
