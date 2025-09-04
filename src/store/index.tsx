import type { CSSProperties } from "react"
import { v4 as uuidv4 } from "uuid"
import { proxy } from "valtio"

const users: I_UserProps[] = [
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
]

interface I_UserProps {
  key: string,
  name: string,
  age: number,
  address: string,
  avatarUrl: string,
  stars: number
  style?: CSSProperties
}

export const userStore = proxy({
  users
})
