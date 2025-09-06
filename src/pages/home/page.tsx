import { type ReactNode } from 'react'

interface I_HomeProps {
  children?: ReactNode
}

// eslint-disable-next-line no-empty-pattern
function Home({ }: I_HomeProps) {
  return (
    <>
      <div className="w-screen h-full">
        <h1>Home Page</h1>
        <div className='w-30 h-30 ml-60 bg-369'></div>
        <article className="prose lg:prose-xl animate-in fade-in zoom-in">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
        </article>
        <article className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500">markdown</article>
      </div>
    </>
  )
}

export default Home