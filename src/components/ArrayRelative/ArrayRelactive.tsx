import { useState, type MouseEventHandler } from "react"
import { v4 as uuidv4 } from "uuid"
import { Button, Input } from "antd"
import { Trash } from "lucide-react"
const defaultTodos = [
  {
    id: uuidv4(),
    todo: '张安'
  }
]
export const ArrayRelactive = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState(defaultTodos)

  const handleAdd: MouseEventHandler<HTMLInputElement> = () => {
    if (todo.trim() === '') return // 忽略空名字
    const nextArr = [
      { id: uuidv4(), todo },
      // 通过数组展开语法 `...artists` 将原有艺术家列表展开并放置在新元素之后
      ...todoList
    ]
    setTodoList(nextArr)
    setTodo('')
  }
  const handleDel = (id: string) => {
    const newTodos = todoList.filter(f => f.id !== id)
    setTodoList(newTodos)
  }
  return (
    <>
      <h1 className="font-bold text-[20px]">XXX的代办清单</h1>
      <div className="flex gap-2 mb-2">
        <Input
          style={{ maxWidth: 100 }}
          allowClear
          value={todo}
          onChange={e => setTodo(e.target.value)}
        ></Input>
        <Button onClick={handleAdd}>添加</Button>
      </div>
      <ul>
        {
          todoList.map(v => {
            return (
              <li key={v.id} className="flex justify-between items-center px-2 mb-2 w-[160px] h-[40px] border border-orange-400">
                <div>{v.todo}</div>
                <div className="flex">
                  <Trash onClick={() => handleDel(v.id)} className="cursor-pointer text-red-300" />
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
