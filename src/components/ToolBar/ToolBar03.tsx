import { Button } from "antd"

/** 处理事件冒泡 */
export const ToolBar03 = () => {
  return (
    <div onClickCapture={() => {/** 这会首先执行 */ }} onClick={() => alert('EFu')}
      className="w-[300px] h-[200px] flex gap-2 bg-linear-65 from-purple-500 to-pink-500">
      <Button onClick={e => { e.stopPropagation(); alert('E01') }}>E01</Button>
      <Button onClick={e => { e.stopPropagation(); alert('E02') }}>E02</Button>
    </div>
  )
}
// onClickCapture() 用于捕获子元素上的所有事件，即便它们阻止了传播
// 每个事件分3个阶段传播：
// 1、向下传播(捕获),调用所有的`onClickCapture` 函数
// 2、执行被点击元素的 `onClick` 处理函数
// 3、向上传播，执行所有的 `onClick`处理函数