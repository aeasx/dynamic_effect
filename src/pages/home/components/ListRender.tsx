import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, type FC, type ReactNode } from "react";

import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { UserCard } from "./UserCard";

/** list render  */
export const ListRender: FC<I_ListRenderProps> = ({ children }) => {
  const [list, setList] = useState(defaultList)
  return (
    <div>
      ListRender
      {children}
      <hr />
      <ListCard list={list} handleList={setList} />
    </div>
  )
};

const ListCard: FC<I_ListCardProps> = ({ children, list, handleList }) => {
  const upMoveRow = (key: string) => {
    const idx = list.findIndex(v => v.key === key);
    if (idx > 0) {
      const newList = [...list];
      [newList[idx], newList[idx - 1]] = [newList[idx - 1], newList[idx]]
      handleList(newList)
    }
  }

  const downMoveRow = (key: string) => {
    const idx = list.findIndex(v => v.key === key)
    if (idx < list.length - 1) {
      const newList = [...list];
      [newList[idx], newList[idx + 1]] = [newList[idx + 1], newList[idx]]
      handleList(newList)
    }
  }

  const delRow = (key: string) => {
    const newList = list.filter(v => v.key !== key)
    handleList(newList)
  }

  const copyRow = (key: string) => {
    const copyItem = list.find(v => v.key === key)
    if (copyItem) {
      const newItem = { ...copyItem, key: uuidv4() }
      const newList = [...list, newItem];
      flushSync(() => {
        handleList(newList)
      })
      setTimeout(() => {
        window.scroll({
          behavior: 'smooth',
          top: document.body.scrollHeight
        })
      }, 0);
    }
  }
  return (
    <div>
      {
        list.map((user, i) => (
          <div key={user.key} className="w-[500px] flex justify-between items-center">
            <UserCard user={user} className="my-3" />
            <div className="flex gap-6 text-[24px] [&>.iconify]:cursor-pointer [&>.iconify]:hover:text-blue-500 [&>.iconify]:transition-all">
              <Icon icon="lineicons:arrow-up" onClick={() => upMoveRow(user.key)} />
              <Icon icon="lineicons:arrow-down" onClick={() => downMoveRow(user.key)} />
              <Icon icon="cil:trash" className="hover:text-red-500!" onClick={() => delRow(user.key)} />
              <Icon icon="cil:copy" onClick={() => copyRow(user.key)} />
              {i + 1}
            </div>
          </div>
        ))
      }
      {children}
    </div>
  )
}

interface I_ListRenderProps {
  children?: ReactNode
}

interface I_ListCardProps {
  children?: ReactNode,
  list: typeof defaultList,
  handleList: React.Dispatch<React.SetStateAction<typeof defaultList>>
}

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
