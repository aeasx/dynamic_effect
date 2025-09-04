import { Input } from "antd"
import { useState, type ChangeEvent, type PointerEventHandler } from "react"

export const Mutation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handlePointMove: PointerEventHandler<HTMLDivElement> = (e) => {
    // 应该将 state 中的数据认为是只读的，不论是基本数据类型还是引用数据类型。
    // 当需要修改state中的`对象`时，应该使用新的`对象`进行覆盖
    /* -------------------------------------------------------------------------- */
    // 使用setPosition ,你在告诉React:
    // 1.使用这个新的对象替换Position的值
    // 2.然后再次渲染这个组件
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  return (
    <>
      <div className="w-screen h-screen relactive" onPointerMove={handlePointMove}>
        <h1>DashBoard</h1>
        <div className="font-bold text-2xl">
          {JSON.stringify(position, null, 2)}
        </div>
        <div className="absolute bg-red-600 rounded-[50%] w-[20px] h-[20px] left-[-10px] top-[-10px]"
          style={{
            transform: `translate(${position.x}px,${position.y}px)`
          }}
        ></div>
      </div>
    </>
  )
}

export const MutationForm = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
    setPerson({
      ...person,
      // 这里用到了ES6中的属性名表达式
      [e.target.name]: e.target.value
    })
    // explanation:JS定义对象的属性有2中方法
    // 1.直接使用标识符作为属性名 obj.a=1
    // 2.使用表达式作为属性名，这时表达式要放在方括号内 obj['a'+'bc']=3
  }
  // ES6中允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内
  const propKey = 'foo'
  const obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
  }
  console.log("🚀 ~ MutationForm ~ obj:", obj)
  return (
    <>
      <label>
        First name:
        <Input
          name="firstName"
          style={{ maxWidth: 200 }}
          allowClear
          className="outline-1 rounded"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <Input
          name="lastName"
          style={{ maxWidth: 200 }}
          allowClear
          className="outline-1 rounded"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <Input
          name="email"
          style={{ maxWidth: 200 }}
          allowClear
          className="outline-1 rounded"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  )
}
