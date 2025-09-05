import { useEffect, useRef } from "react"

export const EffectSync = () => {
  const divRef = useRef(null)
  // 组件挂载完成之后 run once
  // Effect允许在组件渲染结束后执行一些代码，以便将组件与React外部的某个系统相同步
  useEffect(() => {
    console.log(divRef.current)
  }, [])
  console.log(divRef.current)
  return (
    <div>
      <div ref={divRef} className="w-[100px] h-[100px] bg-sky-400/80"></div>
    </div>
  )
}
