import { proxy } from "valtio"

const defaultUsers = [
  {
    name: '张三',
    age: 15
  },
  {
    name: '里斯',
    age: 30
  }
]

export const users = proxy({
  users: defaultUsers
})