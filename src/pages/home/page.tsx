import { type FC, type ReactNode } from 'react'
import { TravelPlan } from '~/components'

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  return (
    <>
      <div className="w-screen h-full">
        <h1>Home Page</h1>
        <TravelPlan />
      </div>
    </>
  )
}

export default Home
