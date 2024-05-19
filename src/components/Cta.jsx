import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from "clsx"
import { Container } from './Container'
import { Button } from './Button'



  const features = [
    {
      name: 'Web development',
      description:
        ' Boost your online presence with custom-built websites and apps that work like a charm, giving your users an awesome experience every time.',
      icon: codeIcon,
      background : 'bg-indigo-100'
    },
    {
      name: 'Web design',
      description:
        'Make your brand shine online with eye-catching designs that grab attention and keep visitors engaged from the moment they land on your site.',
      icon: brushIcon,
      background : 'bg-pink-100'
    },
    {
      name: 'Bug fixing',
      description:
        'Keep your website running smoothly with a quick and effective bug fixing service.',
      icon: bugIcon,
      background : 'bg-slate-200'
    }
  ]

  function codeIcon(){
    return (
        <>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        </>
    )
}

function brushIcon(){
    return (
        <>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>

        </>
    )
}

function bugIcon(){
    return (
        <>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
            </svg>
        </>
    )
}
  
  export default function Cta() {
    return (
    <Container className="my-24">
      <FadeIn>
      <div className="bg-zinc-800 border-gray-200 dark:border-slate-700 rounded-2xl py-24 sm:py-8  ">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">You have a project ? Let's talk  </h2>
            <p className="mt-4 text-md sm:text-lg leading-8 text-gray-400">
              Are you ready to make create an outsanding work that will make your clients in love with.
            </p>
            <Button variant="secondary" className="mt-4 dark:bg-gray-700 dark:hover:bg-gray-700 w-36">let's talk</Button>
          </div>
      {/*    <FadeInStagger
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
                   
          {features.map((feature) => (
            <FadeIn
              key={feature.name}
              className={clsx("rounded-2xl border border-gray-200 hover:bg-neutral-50 p-8 ",feature.background)}
            >
      
             <feature.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10" />

             
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </FadeIn>
          ))}
        </FadeInStagger>*/}
        </div>
      </div>
      </FadeIn>
      </Container>
    )
  }
  