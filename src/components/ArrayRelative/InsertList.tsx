import { Button, Input } from "antd"
import { useState, type FC } from "react"
import { v4 as uuidv4 } from "uuid"
const initialArtists = [
  { id: uuidv4(), name: 'Marta Colvin Andrade' },
  { id: uuidv4(), name: 'Lamidi Olonade Fakeye' },
  { id: uuidv4(), name: 'Louise Nevelson' },
]

/** 向数组中插入元素 */
export const InsertList: FC = () => {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState(initialArtists)
  const handleInsertName = () => {
    if (name.trim() === '') return
    const insertAt = 2
    const newArtists = [
      ...artists.slice(0, insertAt),
      { id: uuidv4(), name },
      ...artists.slice(insertAt)
    ]
    setArtists(newArtists)
    setName('')
  }
  return (
    <>
      <h1 className="font-bold text-[24px] text-black">Artists</h1>
      <div className="flex">
        <Input style={{ maxWidth: 160, marginRight: 20 }} value={name} placeholder="please input name"
          onChange={e => setName(e.target.value)}
        ></Input>
        <Button onClick={handleInsertName}>insert name</Button>
      </div>
      <ul className="flex flex-col gap-1">
        {
          artists.map(art => (<li key={art.id}>{art.name}</li>))
        }
      </ul>
    </>
  )
}
