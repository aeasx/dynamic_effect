import { useState, type FC, type ReactNode } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { v4 as uuidv4 } from "uuid"
import { UserCard } from "~/pages/home/components/UserCard"
import { produce } from "immer"
import { flushSync } from "react-dom"

export const ArrayTodos = () => {
  // 在React中，将setState作为属性直接传递给子组件是一种常见且合理的做法。这是实现状态
  // 提升的标准模式
  return (
    <ListCard list={defaultList} />
  )
}

const ListCard: FC<I_ListCardProps> = ({ list, children }) => {
  const [newList, setNewList] = useState(list)

  const handleMoveUp = (k: string) => {
    const idx = newList.findIndex(f => f.key === k)
    if (idx < 1) return
    const nextState = produce(newList, draft => {
      [draft[idx], draft[idx - 1]] = [draft[idx - 1], draft[idx]]
    })
    setNewList(nextState)
  }

  const handleMoveDown = (k: string) => {
    const idx = newList.findIndex(n => n.key === k)
    if (idx >= newList.length - 1) return
    const nextState = produce(newList, draft => {
      [draft[idx], draft[idx + 1]] = [draft[idx + 1], draft[idx]]
    })
    setNewList(nextState)
  }

  const delListItem = (k: string) => {
    const nextState = produce(newList, draft => {
      const idx = draft.findIndex(v => v.key === k)
      if (idx < 0) return
      draft.splice(idx, 1)
    })
    setNewList(nextState)
  }

  const copyListItem = (user: I_ListItem[number]) => {
    const nextState = produce(newList, draft => { draft.push(user) })
    flushSync(() => setNewList(nextState))
    // 自动将视图滚动到新添加项上
    requestAnimationFrame(() => {
      window.scroll({
        behavior: 'smooth',
        top: document.body.scrollHeight
      })
    })
  }
  return (
    <div>
      {
        newList.map((user, i) => (
          <div key={user.key} className="w-[500px] flex justify-between items-center">
            <UserCard user={user} className="my-3" />
            <div className="flex gap-6 text-[24px] [&>.iconify]:cursor-pointer [&>.iconify]:hover:text-blue-500 [&>.iconify]:transition-all">
              <Icon icon="lineicons:arrow-up" onClick={() => handleMoveUp(user.key)} />
              <Icon icon="lineicons:arrow-down" onClick={() => handleMoveDown(user.key)} />
              <Icon icon="cil:trash" className="hover:text-red-500!" onClick={() => delListItem(user.key)} />
              <Icon icon="cil:copy" onClick={() => copyListItem(user)} />
              {i + 1}
            </div>
          </div>
        ))
      }
      {children}
    </div>
  )
}

interface I_ListCardProps {
  children?: ReactNode,
  list: I_ListItem,
}

type I_ListItem = typeof defaultList
const defaultList = [
  {
    "key": uuidv4(),
    "name": "Alice",
    "age": 24,
    "address": "苏州",
    "avatarUrl": "https://raw.githubusercontent.com/YangWavei/Pic-Go/main/img/image03.jpg",
    "stars": 156,
  },
  {
    "key": uuidv4(),
    "name": "machale",
    "age": 18,
    "address": "武汉",
    "stars": 22931,
    "avatarUrl": "https://raw.githubusercontent.com/aeasx/Pic-Go/main/img/logo.jpg",
  },
  {
    "key": uuidv4(),
    "name": "Sophia",
    "age": 32,
    "address": "北京",
    "avatarUrl": "https://images.unsplash.com/photo-1755657722450-26f64fbcddbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "stars": 874,
  },
  {
    "key": uuidv4(),
    "name": "David",
    "age": 27,
    "address": "上海",
    "avatarUrl": "https://plus.unsplash.com/premium_photo-1755241424289-119335c3b372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "stars": 3521,
  },
  {
    "key": uuidv4(),
    "name": "Emma",
    "age": 22,
    "address": "广州",
    "avatarUrl": "https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "stars": 12987,
  },
  {
    "key": uuidv4(),
    "name": "James",
    "age": 35,
    "address": "深圳",
    "avatarUrl": "https://plus.unsplash.com/premium_photo-1749544314995-c41f676d0cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    "stars": 542,
  },
  {
    "key": uuidv4(),
    "name": "Olivia",
    "age": 29,
    "address": "杭州",
    "avatarUrl": "https://images.unsplash.com/photo-1755303238751-d04f190c96dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "stars": 7654,
  },
  {
    "key": uuidv4(),
    "name": "William",
    "age": 31,
    "address": "成都",
    "avatarUrl": "https://images.unsplash.com/photo-1755308482593-f733b46e15ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
    "stars": 23145,
  }
]
