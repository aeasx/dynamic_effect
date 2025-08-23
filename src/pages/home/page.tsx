import { type FC, type ReactNode } from "react";
import { ListRender } from "./components/ListRender";

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  return (
    <>
      <div className="w-screen h-full bg-orange-200/10">
        <h1>Home Page</h1>
        <ListRender />
      </div>
    </>
  )
};

export default Home;