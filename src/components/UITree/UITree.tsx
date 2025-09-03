import { Button } from "antd"
import { useState, type FC, type ReactNode } from "react"

interface I_UITreeProps {
  children?: ReactNode
}

interface I_FancyTextProps {
  title?: boolean,
  text: string
}

interface I_InspirationGeneratorProps {
  children?: ReactNode
}

const inspirations = [
  { type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers" },
  { type: 'color', value: "#B73636" },
  { type: 'quote', value: "Ambition is putting a ladder against the sky." },
  { type: 'color', value: "#256266" },
  { type: 'quote', value: "A joy that's shared is a joy made double." },
  { type: 'color', value: "#F9F2B4" },
]

export const UITree: FC<I_UITreeProps> = ({ children }) => {
  return (
    <div>
      <h1>将组件视为树</h1>
      <FancyText title text="WITH TITLE FancyText" />
      <InspirationGenerator >
        <Copyright year={2025} />
      </InspirationGenerator>
      {children}
    </div>
  )
}

const InspirationGenerator: FC<I_InspirationGeneratorProps> = ({ children }) => {
  const [index, setIndex] = useState(0)
  const inspiration = inspirations[index]
  const next = () => setIndex((index + 1) % inspirations.length)
  return (
    <>
      <h1>InspirationGenerator</h1>
      <p>Your inspirational {inspiration.type} is:</p>
      {
        inspiration.type === 'quote'
          ? <FancyText text={inspiration.value} />
          : <Color value={inspiration.value} />
      }
      <Button onClick={next}>Inspire me again</Button>
      {children}
    </>
  )
}

const FancyText: FC<I_FancyTextProps> = ({ title, text }) => {
  return (
    title
      ? <h1 className="font-bold text-red-600">FancyText {text} with title</h1>
      : <h1 className="font-bold text-sky-500">FancyText {text} without title</h1>
  )
}

const Copyright = ({ year }: { year: number }) => {
  return <p className='small'>©️ {year}</p>
}

const Color: FC<{ value: string }> = ({ value }) => {
  return (
    <div className="w-[100px] h-[100px]" style={{ backgroundColor: value }}></div>
  )
}