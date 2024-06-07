'use client'

import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
  } from '@/components/SocialIcons'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundGlow from './BackgroundGlow'
import Lottie from 'react-lottie';

import animationData  from '@/animations/computer.json'



function SocialLink({ icon: Icon, ...props }) {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
    )
  }

export default function Hero() {


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



return (

  <div className='sm:mt-[2rem] mb-30 '>

    <Container>


    <div className="bg-[#fbe2e3] absolute top-[0rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] dark:bg-[#9e6869]"></div>
    <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#141414]"></div> 

    <div className="max-w-none flex flex-col lg:flex-row gap-[10px] ">

      <div className='flex-[70%]'>

  { /*   <motion.div 

      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className='z-20 flex flex-row '>

        <div className='w-4 border-t-2 border-teal-500 border-secondary bottom-[-12px] relative  ' />
        <span className='ml-2 text-teal-500 dark:text-teal-400 text-xl leading-[1.75rem] font-semibold '> Hello </span>

</motion.div> */}

      <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}

      className="mt-8 font-bold tracking-tight text-neutral-950 [text-wrap:balance] text-4xl sm:text-5xl dark:text-zinc-50">
      Hello, I'm  Zakariae belkasmi <span className='web-developer'> frontend web developer.   </span>  

      </motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className="mt-8 text-lg sm:text-xl text-zinc-600 dark:text-white/80">
        I’m a passionate self taught <span className='font-semibold'>Frontend web developer</span> , I enjoy building web projects with cutting edge technologies, I like minimal and clean design, I use mainly <span className='font-semibold'>javascript</span> and frameworks like : <span className='font-semibold'>ReactJs, GatsbyJs, NextJs, tailwindCSS and nodeJs.</span>
      </motion.p>

      <motion.div 

      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}

      className="mt-8 flex gap-6">
        <SocialLink
         href="https://twitter.com/Zakariae_Bl"
         target="_blank"
         aria-label="Follow on X"
         icon={XIcon} />
        <SocialLink
          href="https://github.com/zackthe?tab=repositories"
          target="_blank"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/zakariae-belkasmi-882b34170/"
          target="_blank"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
      }}
      className='mt-8 flex gap-6 '>
        <Link href='/contact' target='_blank'>
         <Button >let's talk</Button>
        </Link>
          
          <Button variant="secondary" className='ring-1 bg-white/40 ring-neutral-950/5 filter backdrop-blur-md transition hover:bg-neutral-50   dark:hover:bg-zinc-800 dark:ring-zinc-700/40'><span className="relative flex h-3 w-3 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
      </span>Open for opportunities</Button>
      </motion.div>


      </div>


    <div className='flex-[40%]'>

    <Lottie
              options={defaultOptions} 

              />
    </div>
    

    </div>

  </Container>
  </div>


)




}