import { type FC, type ReactNode } from 'react'
import { Mutation } from '~/components'

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  return (
    <>
      <div className="w-screen h-full bg-orange-200/20">
        <h1>Home Page</h1>
        <Mutation />
      </div>
    </>
  )
}

export default Home
