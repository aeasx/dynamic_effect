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
  // 这样并不好，selectedItem 的内容与items列表中的某一项是同一个对象。
  // 这意味着关于该项本身的信息 在2个地方产生了重复
  const [items, setItems] = useState<Item[]>(initialItems)
  const [selectedItem, setSelectedItem] = useState<Item>(
    items[0]
  )
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
    // const selectedItemNow = items.find(f => f.id === id)!
    // setSelectedItem(selectedItemNow)
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
            <Button type='primary' onClick={() => {
              setSelectedItem(item)
            }}>Choose</Button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  )
}
/* -------------------------------------------------------------------------- */
// 上面的代码存在问题
// 1.如果首先点击了 Choose 然后编辑它，输入会更新，但是底部的标签不会反映编辑内容。
// 这是因为有重复的 state ，并且忘记更新了 state。尽管我可以更新 selectedItem
// 但是更简单的解决办法是消除重复项。