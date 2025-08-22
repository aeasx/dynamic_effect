import type { FC, ReactNode } from "react";

interface I_HomeProps {
  children?: ReactNode
}
const Home: FC<I_HomeProps> = () => {
  return (
    <div>
      <div className="w-[200px] h-[200px]">
        Page update<br />
      </div>
    </div>
  )
};

export default Home;