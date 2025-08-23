import { type FC, type ReactNode } from "react";
import { useSnapshot } from "valtio";
import { userStore } from "~/store";
import { ClockTime } from "./components/ClockTime";
import { PackingList } from "./components/PackingList";
import { UserCard } from "./components/UserCard";

interface I_HomeProps {
  children?: ReactNode
}

const Home: FC<I_HomeProps> = () => {
  const user = useSnapshot(userStore);
  return (
    <>
      <div className="w-screen h-full bg-orange-200/10">
        <h1>Home Page</h1>
        <ClockTime />
        <ul>
          {user.users.map(userInfo => <UserCard key={userInfo.key} user={userInfo} className="mb-3" />)}
        </ul>
        <PackingList />
      </div>
    </>
  )
};

export default Home;