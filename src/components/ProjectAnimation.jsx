'use client'

import { Container } from "@/components/Container"
import { useRef , useEffect} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView
} from "framer-motion";

import Image from 'next/image'
import Link from 'next/link'

import Lenis from '@studio-freight/lenis'


import spamSimple from '@/images/projects/spamGradient.jpeg'
import portfolioScreen1 from '@/images/projects/portfolio_mac1.jpeg'
import cloutikMap from '@/images/projects/cloutik_mac_gradient.jpeg'





import { SimpleLayout } from '@/components/SimpleLayout';






const projects = [


    {
      id: '1' ,
      text: 'Cloutik.com',
      description:
        'Cloutik is a website for routers management solution, built for a client using Gatsbyjs in the frontend and strapi cms in the backend and tailwindcss for styling.',
     link: { href: 'https://zakariaebelkasmi.netlify.app/', label: 'Visit project' },
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

const svgVariants = {
    open: {
        opacity: 0,
        pathLength : 0
    },
    closed: {
        opacity: 1,
        pathLength : 1,
        transition: {
            duration: 3,
            ease: "easeInOut",
            yoyo: Infinity,
            type: "Tween",
            stiffness: 100
        },
    }
}



const fadeVariants = {

    open: {
        opacity: 0, y: 60 
    },
    closed: {
        opacity: 1, y: 0,
        transition : {
            duration : 2 , type: "spring"
        }
    }

}

const textVariants = {

    open: {
        opacity: 0, x: '50%'
    },
    closed: {
        opacity: 1, x: 0,
        transition : { duration : 3 , type: "spring" , stiffness: "50", straggerChildren : "0.2"}
    }
    

}

const transition = { duration: 5, yoyo: Infinity, ease: "easeInOut" };

function CodeIcon(){
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
            <motion.path 
              variants={svgVariants}
              initial="open"
              animate="closed"
             // transition={transition}
            
            strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>

     { /*  <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
        <motion.path
          d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
          fill="transparent"
          strokeWidth="12"
          stroke="rgba(255, 255, 255, 0.69)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />  
    </svg> */}

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

function badge (name){

    return(
      <>
      <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-regular text-blue-400 ring-1 ring-inset ring-blue-400/30">
              {name}
    </span>
      </>
    )
    
  }
  

function Shape({text , description , image, link , tags}) {

    const ref = useRef(null);
    const rootRef = useRef(null);

    const viewRef = useRef(null)

    const isInView = useInView(viewRef)

    const { scrollYProgress } = useScroll({ 
        target: ref ,
        offset: ["0 1", "0 1"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0.7 , 1.5]);

    const x = useTransform(scrollYProgress, [0, 1], [ 0.5 , 1]);


    
      useEffect(() =>{

        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        scrollYProgress.on('change', e=> {
            console.log(e); 
    })

      } , [])


      


    return (

          <div className="mt-20 mb-10">

              <motion.div 
                    variants={fadeVariants}
                    initial="open"
                    whileInView="closed"
                    viewport={{once : true}}
                    className="flex flex-col items-center lg:flex-row lg:gap-[40px] px-6 py-6  rounded-xl ring-1 bg-white/40 ring-neutral-950/5 filter backdrop-blur-md transition hover:bg-neutral-50 sm:p-8 dark: dark:bg-zinc-800/50 dark:hover:bg-zinc-800 dark:ring-zinc-700/40">
            
                  <motion.div
  
                    className="flex-1 lg:flex-[60%] max-w-[500px]" 
                    variants={fadeVariants}
                    initial="open"
                    whileInView="closed"
                    viewport={{once : true}}

                    >

                    <Image
                    
                    className="rounded-md w-full "
                    src={image}
            

                     />

                    </motion.div>

                    <motion.div 
                    
                    variants={textVariants}
                    initial="open"
                    whileInView="closed"
                    viewport={{once: true}}
                    transition={{ duration : 0.5 , delay : 0.25}}
                    className="flex flex-col gap-[10px] flex-[40%]">
                        

                    <p className="mt-4 text-3xl font-semibold text-neutral-950 dark:text-white">
                    {text}
                    </p>

                    <p className="mt-4 text-md text-neutral-600 dark:text-zinc-400">
                    {description}
                    </p>

                    {<ul className="flex flex-wrap mt-4 gap-2">
                      {tags.map((tag, index) => (
                        <li
                          className="bg-black/[0.6] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                          key={index}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>}

                    <Link target='_blank' href={link.href}>
                        <p className="relative z-10 mt-6 flex text-md font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200">
                        <LinkIcon className="h-6 w-6 flex-none" />
                        <span className="ml-2">{link.label}</span>
                    </p>
                    </Link>
                    </motion.div>

                    </motion.div>
                </div>
        
    );
  }




export default function ProjectAnimation (){


    return (
       
        <Container  
            className="flex flex-col justify-start mb-6"
        > 
        
       <SimpleLayout
        title='Handcrafted Creations and Client Projects.'
        intro='From Personal Passions to Professional Projects.'
        className=" px-0 lg:px-0">
      </SimpleLayout> 
         
          
           {projects.map((project) => 

            <div key={project.id}>
                <Shape  text={project.text} image={project.image} description={project.description} link={project.link} badge={project.badge} tags={project.tags}/>  
            </div>

            )}
        </Container>
      
    )

}
  