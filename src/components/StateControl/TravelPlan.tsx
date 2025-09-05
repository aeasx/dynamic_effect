import { useState, type FC } from "react"
import { initialTravelPlan } from "./places"

export const TravelPlan: FC = () => {
  const [plan, setPlan] = useState(initialTravelPlan)
  const childPlaces = plan.childPlaces
  return (
    <div >
      <h1 className="font-bold text-[20px]">避免深度嵌套的state</h1>
      <div>
        <ul>
          {
            childPlaces.map(cp => (<li key={cp.id}><PlaceTree place={cp} /></li>))
          }
        </ul>
      </div>
    </div>
  )
}

interface I_PlaceTreeProps {
  place: typeof initialTravelPlan
}
const PlaceTree: FC<I_PlaceTreeProps> = ({ place }) => {
  const childPlaces = place.childPlaces
  return (
    <>
      <h1>{place.title}</h1>
      <ol>
        {
          childPlaces.length > 0 &&
          childPlaces.map(cp => (<li key={cp.id}><PlaceTree place={cp} /></li>))
        }
      </ol>
      <hr />
    </>
  )
}