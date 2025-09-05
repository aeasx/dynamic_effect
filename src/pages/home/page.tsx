import { EffectSync } from '~/components'
import { type FC, type ReactNode } from 'react'

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  return (
    <>
      <div className="w-screen h-full">
        <h1>Home Page</h1>
        <EffectSync />
      </div>
    </>
  )
}

export default Home
