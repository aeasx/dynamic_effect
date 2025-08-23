import { Icon } from "@iconify/react";
import type { FC } from "react";

export const PackingList: FC<{ isBox?: boolean }> = ({ isBox = false }) => {
  let box = null;
  if (isBox) {
    box = (
      <div className="w-[100px] h-[100px] bg-red-200 flex-center rounded-full overflow-hidden">
        <img src="/favicon.png" alt="Logo" className="w-full h-full" />
      </div>
    )
  } else {
    box = (
      <div className="font-bold text-[30px]">stupid</div>
    )
  }

  return (
    <div>
      <section>
        <h1>Sally Ride 的行李清单</h1>
        <ul>
          <Item name="宇航服" />
          <Item isPacking name="带金箔的头盔" />
          <Item isPacking name="Tam 的照片" />
        </ul>
      </section>
      {box}
    </div>
  )
}

const Item: FC<{ name: string, isPacking?: boolean }> = ({ name, isPacking = false }) => {
  return <li className="item">{isPacking ? '✅' : <Icon className="text-[24px] inline" icon="streamline-emojis:hourglass-not-done-2" />}{name}</li>
}
