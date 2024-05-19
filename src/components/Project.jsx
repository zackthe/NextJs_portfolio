import Image from 'next/image'
import Link from 'next/link'

import { Container } from "./Container";
import spamSimple from '@/images/projects/spamGradient.jpeg'
import portfolioScreen1 from '@/images/projects/portfolio_mac1.jpeg'
import cloutikMap from '@/images/projects/cloutik_mac_gradient.jpeg'
import { SimpleLayout } from './SimpleLayout';
import { Button } from './Button';

import { FadeIn, FadeInStagger } from '@/components/FadeIn'



const projects = [


  {
    id: '1' ,
    text: 'Cloutik.com',
    description:
      'Cloutik is a website for routers management solution, built for a client using Gatsbyjs in the frontend and strapi cms in the backend and tailwindcss for styling.',
    link: { href: '/articles/cloutik-case-study', label: 'Read case study' },
    image: cloutikMap,
    type : 'Freelance project',
    badge :  badge('Freelance project'),
    tags : ['React', 'Gatsby', 'Taiwlind css', 'Strapi cms', 'GraphQl' ]



},
{
    id: '2' ,
    text: 'My potfolio v1',
    description:
      'My portfolio v1 I built from scratch using gatsby and pure css, where I share my projects and journey.',
    link: { href: 'https://zakariaebelkasmi.netlify.app/', label: 'Visit project' },
    image: portfolioScreen1,
    type : 'personal project',
    badge :  badge('personal project'),
    tags : ['React', 'Gatsby', 'Markdown', 'GraphQl'  ]

},
{

id: '3' ,
text: 'Spam checker',
description:
  'Tool I built for an email marketing company that I worked for, used for checking and manipulating text, and an Ips extraction tool, dark mode integrated.',
link: { href: 'https://n2qq6r.csb.app/', label: 'Visit project' },
image: spamSimple,
type : 'Personal project',
badge :  badge(['personal project']),
tags : ['Javascript', 'Tailwind css']


}

]

function badge (name){

  return(
    <>
    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-regular text-blue-400 ring-1 ring-inset ring-blue-400/30">
            {name}
  </span>
    </>
  )
  
}



function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Project () {

    return (
  
      <Container>
  
       <SimpleLayout
        title='Handcrafted Creations and Client Projects.'
        intro='From Personal Passions to Professional Projects.'
        className="mt-36 px-0 lg:px-0">
      </SimpleLayout> 

        <FadeInStagger className="mt-10 mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <FadeIn key={project.link} className="flex ">


             <article className="relative flex w-full flex-col rounded-md p-8  ring-1 bg-white/40 ring-neutral-950/5 filter backdrop-blur-md transition hover:bg-neutral-50 sm:p-8  dark:bg-zinc-800/50 dark:hover:bg-zinc-800 dark:ring-zinc-700/40 ">
                <h3>
                    <span className="absolute inset-0 rounded-md " />
                    <Image
                      src={project.image}
                      alt={project.text}
                      unoptimized
                      className='h-72 w-full overflow-hidden rounded-md bg-neutral-100 shadow-lg' 
                      style={{objectFit: "cover"}}
                  
                    />
                </h3>
                <p className="mt-6 flex  text-sm text-neutral-950">
                  <span className="text-neutral-300" aria-hidden="true">

                  </span>
                <span>{project.badge}</span>
                </p>
                <p className="mt-6 text-2xl font-semibold text-neutral-950 dark:text-white">
                  {project.text}
                </p>
                <p className="mt-4 text-base text-neutral-600   dark:text-zinc-400">
                  {project.description}
                </p>
                {<ul className="flex flex-wrap mt-4 gap-2 ">
                      {project.tags.map((tag, index) => (
                        <li
                          className="bg-black/[0.6] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                          key={index}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>}
                <Link target='_blank' href={project.link.href}>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
              </Link>


            </article>
            </FadeIn>
          ))}

        </FadeInStagger>  

        
       </Container>
    )

}



