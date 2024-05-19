'use client'

import { Button } from "./Button"
import {RoughNotation} from "react-rough-notation"

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import Link from 'next/link'
import { FadeIn } from "./FadeIn"



function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


  
export default function SimpleFooter() {
    return (
      <FadeIn >
      <footer className="bg-slate-100 dark:bg-zinc-800/90 relative">
        <div className=" mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">

          <div className="flex flex-col justify-center items-center mb-16 gap-[20px] "> 

          <h1 className="text-4xl sm:text-5xl max-w-3xl font-bold text-center">Got a <RoughNotation  type="underline" animate=' true' show="false" color="gray"  strokeWidth="2.9"  animationDuration="300" className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent"> project </RoughNotation>  ?   Let's dive in and make it happen!  </h1>
          <p className="text-base text-center text-zinc-600 dark:text-zinc-400">
           Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>

          <Link href='/contact' target='_blank'>
          <Button variant="secondary" className='ring-1 bg-white/40 ring-neutral-950/5 filter backdrop-blur-md transition hover:bg-neutral-50   dark:hover:bg-zinc-800 dark:ring-zinc-700/40'><span className="relative flex h-3 w-3 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
      </span>Let's get started</Button>
        </Link>

          

          </div>

      <div 
      className=" flex justify-center space-x-10">
        <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
        <SocialLink
          href="#"
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        <SocialLink
          href="#"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="#"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>

        </div>
      </footer>
      </FadeIn>
    )
  }
  