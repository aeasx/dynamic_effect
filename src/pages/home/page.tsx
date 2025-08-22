import type { FC, ReactNode } from "react";

interface I_HomeProps {
  children?: ReactNode
}
const Home: FC<I_HomeProps> = () => {
  return (
    <div>
      <div className="w-[200px] h-[200px] bg-red-500/40">
        Home Page
      </div>
    </div>
  )
};

export default Home;