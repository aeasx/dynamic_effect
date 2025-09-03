import { useState } from "react"

export const ZYForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('Hi')
  if (isSent) {
    return <h1>Your message is sent and message is {message}</h1>
  }
  return (
    <div>
      <form
        onSubmit={e => {
          e.stopPropagation()
          setIsSent(true)
          setMessage(message)
        }}>
        <textarea className="outline-2 rounded" placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className="px-3 py-1 rounded bg-sky-300/40 cursor-pointer" type="submit">Send</button>
      </form>
    </div>
  )
}
// React重新渲染组件时
// 1.React会再次调用组件函数
// 2.函数会返回新的React快照
// 3.React会更新界面以匹配快照