import { useState, type FC } from 'react'
import { flatInitTravelPlan } from './places'
import { Button } from 'antd'

export const TravelPlan02 = () => {
  const [plan, setPlan] = useState(flatInitTravelPlan)
  console.log("🚀 ~ TravelPlan02 ~ plan:", plan)
  // 点击完成按钮后，将此id对应的元素从plan中删除
  const handleComplete = (parentId: number, childId: number) => {
    const parent = plan[parentId as keyof typeof plan]
    // 创建一个其父级地点的新版本但不包括子级 ID
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    }
    // 更新state对象
    setPlan({
      ...plan,
      [parentId]: nextParent
    })
  }

  const root = plan[0]
  // 子旅行地点id
  const planetIds = root.childIds

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {
          planetIds.map(id => (
            <PlanetTree
              key={id}
              id={id}
              parentId={0}
              placesAllByIds={plan}
              onComplete={handleComplete}
            />
          ))
        }
      </ol>
    </>
  )
}

interface PlaceItem {
  id: number,
  title: string,
  childIds: number[]
}

interface PlanetTreeProps {
  id: number,
  parentId: number,
  placesAllByIds: Record<number, PlaceItem>,
  onComplete: (parentId: number, id: number) => void
}

const PlanetTree: FC<PlanetTreeProps> = ({ id, parentId, placesAllByIds, onComplete }) => {
  const place = placesAllByIds[id]
  const childIds = place.childIds

  return (
    <li>
      {place.title}
      <Button onClick={() => onComplete(parentId, id)}>complete</Button>
      {
        childIds.length > 0 &&
        <ol>
          {childIds.map(cId => (
            <PlanetTree
              key={cId}
              id={cId}
              parentId={id}
              placesAllByIds={placesAllByIds}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  )
}