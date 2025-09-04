import { Button, Input } from 'antd'
import { useState, type ChangeEvent } from 'react'

interface Item {
  id: number
  title: string
}

const initialItems: Item[] = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
]

export function Menu() {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [selectedId, setSelectedId] = useState(0)
  const selectedItem = items.find(f => f.id === selectedId)!

  function handleItemChange(id: number, e: ChangeEvent<HTMLInputElement>) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        }
      } else {
        return item
      }
    }))
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Input style={{ maxWidth: 140 }} value={item.title} allowClear onChange={e => handleItemChange(item.id, e)}></Input>
            {item.title}
            {' '}
            <Button type='primary' onClick={() => setSelectedId(item.id)}>Choose</Button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  )
}
