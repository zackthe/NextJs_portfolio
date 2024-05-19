import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'
import Image from 'next/image'


function Article({ article }) {


  return (
    <article className="flex flex-col items-start justify-between rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer p-8 ">
    <div className="relative w-full">
     <Image
        src={article.image}
        alt={article.title}
        style={{objectFit: "cover"}}
       className="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" /> 
   
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div className="max-w-xl">
      <div className="mt-8 flex items-center gap-x-4 text-xs">
        <time dateTime={article.date}className="text-gray-500">
        {formatDate(article.date)}
        </time>
        <Link
          href={`/articles/${article.slug}`}
          className="relative z-10 rounded-full bg-gray-200/90 px-3 py-1.5 font-medium text-gray-600 dark:text-white/90 dark:bg-zinc-800 "
        >
           {article.category}
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-base lg:text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <Link href={`/articles/${article.slug}`} >
            <span className="absolute inset-0" />
            {article.title}
          </Link>
        </h3>
      </div>
    </div>
  </article> 
  )
}


export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}


export default async function ArticlesIndex() {

  let articles = await getAllArticles()


  return (

    <Container>

    <div className="bg-slate-50 dark:bg-zinc-900 py-24 sm:py-32">

      <SimpleLayout
        title='Blog.'
        intro='My blog and journal when I share articles and my journey.'
        className="px-0 lg:px-0">
      </SimpleLayout> 

        <div className="relative mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

        {articles.map((article) => (

            <Article key={article.slug} article={article} />

        ))}
        
        </div>
    </div>
      </Container>
    

  )
}



      
            
      


