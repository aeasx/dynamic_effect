import { Button, Input } from 'antd'
import { useState, type ChangeEvent } from 'react'

interface Item {
  id: number
  title: string
}

const initialItems: Item[] = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 }
]

export const Menu = () => {
  const [menu, setMenu] = useState(initialItems)
  const [selectedId, setSelectedId] = useState(0)
  // 对于选择类型的UI模式，在 state中保存ID或索引而不是对象本身
  const selectedItem = menu.find(f => f.id === selectedId)

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    setMenu(menu.map(m => {
      if (m.id === id) {
        return { ...m, title: e.target.value }
      } else {
        return m
      }
    }))
  }

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {
          menu.map(item => (
            <li key={item.id}>
              <label>
                <Input style={{ maxWidth: 150 }} name='menu' value={item.title}
                  onChange={e => { handleChange(e, item.id) }}
                >
                </Input>
                <Button onClick={() => setSelectedId(item.id)}>choose</Button>
              </label>
            </li>
          ))
        }
      </ul>
      <h1>You picked {selectedItem?.title}</h1>
    </div>
  )
}
