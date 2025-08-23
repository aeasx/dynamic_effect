import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useEffect, useState, type CSSProperties, type FC, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
interface I_HomeProps {
  children?: ReactNode
}

interface I_PersonInfoCardProps {
  className?: string,
  children?: ReactNode,
  user: I_UserProps
}

interface I_UserProps {
  key: string,
  name: string,
  age: number,
  address: string,
  avatarUrl: string,
  stars: number
  style?: CSSProperties
}

const user: I_UserProps[] = [
  {
    key: uuidv4(),
    name: 'Alice',
    age: 24,
    address: '苏州',
    avatarUrl: 'https://raw.githubusercontent.com/YangWavei/Pic-Go/main/img/image03.jpg',
    stars: 156,
    style: {
      color: 'blue',
      fontWeight: 'bold'
    }
  },
  {
    key: uuidv4(),
    name: 'machale',
    age: 18,
    address: '武汉',
    stars: 22931,
    avatarUrl: 'https://raw.githubusercontent.com/aeasx/Pic-Go/main/img/logo.jpg',
    style: {
      border: '1px solid purple'
    }
  }
];

/** 用户卡片 */
const PersonInfoCard: FC<I_PersonInfoCardProps> = ({ user, className }) => {
  return (
    <div className={clsx(
      "w-[300px] px-3 py-2 border border-[#777] flex justify-between items-center gap-3",
      className
    )}>
      <img className="w-[60px] h-[60px] rounded-full" src={user.avatarUrl} alt="Avatar" />
      <div className="flex-1 flex flex-col justify-center text-gray-500">
        <h1 className="font-bold">{user.name}</h1>
        <h4 className="text-[12px]">age:{user.age} &nbsp; Ip 属地:{user.address}</h4>
      </div>
      <div className="w-[50px] h-full flex flex-col items-center text-[12px] cursor-pointer">
        <Icon icon="ic:sharp-recommend" className="text-[20px]" />
        <span>{user.stars}</span>
      </div>
    </div>
  )
}

const Clock = ({ color, time }: { color: string, time: string }) => {
  return (
    <h1 style={{ color }}>{time}</h1>
  )
}

const useTime = () => {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const Home: FC<I_HomeProps> = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  
  return (
    <>
      <div className="w-screen h-full bg-orange-200/10">
        Home Page <br />
        <ul>
          {user.map(userInfo => <PersonInfoCard key={userInfo.key} user={userInfo} className="mb-3" />)}
        </ul>
      </div>
      <div>
        <p>
          选择一个颜色：{' '}
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightcoral">浅珊瑚色</option>
            <option value="midnightblue">午夜蓝</option>
            <option value="rebeccapurple">丽贝卡紫</option>
          </select>
        </p>
        {/* props 是只读的时间快照：每次渲染都会收到新版本的 Props */}
        {time.getSeconds()}
        <Clock color={color} time={time.toLocaleDateString()} />
      </div>
    </>
  )
};

export default Home;