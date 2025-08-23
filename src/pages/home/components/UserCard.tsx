import { Icon } from "@iconify/react"
import clsx from "clsx"
import type { CSSProperties, FC, ReactNode } from "react"

export const UserCard: FC<I_UserCardProps> = ({ children, className, user }) => {
  return (
    <div>
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
        {children}
      </div>
    </div>
  )
}

interface I_UserCardProps {
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
