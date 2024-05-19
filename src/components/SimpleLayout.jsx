import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'




export function SimpleLayout({ title, intro, eyebrow, children, ...props }) {
  return (

    <Container className="mt-18 sm:mt-40 px-0 lg:px-0 " {...props}>
            <FadeIn className="max-w-2xl">

      <header className="max-w-2xl">
        <h2 className='text-base leading-7 text-[#14b8a6]'>
        {eyebrow}
        </h2>
        <h1 className="text-4xl block mt-4 [text-wrap:balance] font-extrabold  tracking-tight text-black sm:text-4xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-36">{children}</div>}

        </FadeIn>
    </Container>
  )
}
