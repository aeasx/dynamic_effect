import { useState, type FC } from "react"

const initialList: AR.I_ArtWork[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
]

export const BucketList = () => {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleMyListToggle(idx: number, nextState: boolean) {
    setMyList(myList.map(f => {
      if (f.id === idx) {
        return { ...f, seen: nextState }
      } else {
        return f
      }
    }))
  }

  function handleYourListToggle(idx: number, nextState: boolean) {
    setYourList(yourList.map(el => {
      if (el.id === idx) {
        return { ...el, seen: nextState }
      } else {
        return el
      }
    }))
  }
  return (
    <div>
      <h1 className="font-bold text-[20px]">艺术愿望清单</h1>
      <h2>我想看的艺术清单：</h2>
      <ItemList artworks={myList} onToggle={handleMyListToggle} />
      <hr className="my-2" />
      <h2>你想看的艺术清单：</h2>
      <ItemList artworks={yourList} onToggle={handleYourListToggle} />
    </div>
  )
}

const ItemList: FC<AR.I_ItemListProps> = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map(art => (
        <li key={art.id} >
          <label>
            <input type="checkbox" checked={art.seen}
              onChange={() => onToggle(art.id, !art.seen)}
            />
            <span className="ml-2">{art.title}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}
