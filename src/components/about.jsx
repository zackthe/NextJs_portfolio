'use client'

import { Container } from "./Container";
import { SimpleLayout } from "./SimpleLayout";
import Image from "next/image";
import setup from '@/images/projects/setup.jpg'
import { motion } from 'framer-motion'
import { FadeIn } from "./FadeIn";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import nextlogo from '@/images/projects/nextlogo.png'
import tailwindlogo from '@/images/projects/tailwindlogo.jpg'
import gatsbylogo from '@/images/projects/gatsbylogo.png'
import strapilogo from '@/images/projects/strapilogo.png'
import bootstraplogo from '@/images/projects/bootstraplogo.jpg'
import framerlogo from '@/images/projects/framerlogo.png'
import tail from '@/images/projects/tail.svg'


const people = [
    {
      id: 1,
      name: "Next JS",
      image:
      nextlogo
    },
    {
      id: 2,
      name: "Tailwind css",
      image:
      tailwindlogo
    },
    {
      id: 3,
      name: "Gatsby js",
      image:
      gatsbylogo
    },
    {
      id: 4,
      name: "Strapi cms",
      image:
      strapilogo
    },
    {
      id: 5,
      name: "Bootstrap",
      image:
      bootstraplogo
    },
    {
        id: 6,
        name: "Framer motion",
        image:
        framerlogo
      },
    
  ];


const paragraphs  = 

[ 
  "Hello my name is zakariae belkasmi , I’m a passionate self-taught frontend developer based in Meknes morocco.",
  "I have a diverse skill set within the frontend ecosystem working with javascript and frameworks like react, gatsby and nextjs , I have a good understanding of UI/UX design principles and experience with responsive design. I'm always eager to learn new technologies and strive to improve my skills .",
  "I have worked with multiple clients as freelancer, helping them solve their problems, delivering projects on time and having positive feedbacks.",
  "currently i’m looking for a fulltime job where I can use my expertise and bring value, I believe that continuous learning and collaboration are key to personal growth and technological innovation.",
  "tools I love to work with : "

]

const fadeVariants = {

    open: {
        opacity: 0, y: 60 
    },
    closed: {
        opacity: 1, y: 0,
        transition : {
            duration : 1 
        }
    }

}



function About() {
    return (

            <Container
            
            className="mt-10">

                <SimpleLayout
                    title='A 
                    Little 
                    About 
                    Me .  .'
                    intro='my path to become a succesfull software developer'
                    
                >        
                </SimpleLayout>

                <FadeIn >

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-[25px]">

                    <div
                    className="flex-[60%]"
                
                    >

                        {
                            paragraphs.map(paragraph => (

                                <p key={paragraph} className="mb-2 leading-8 text-lg  text-zinc-600 dark:text-zinc-300">
                                        {paragraph}
                                </p>
                                
                            ))
                        }

                    <div className="flex flex-row items-center w-full">
                       <AnimatedTooltip items={people} />
                    </div>

                   

                    </div>

                 

                     <div 
                     className="inset-0 rounded-md p-5 flex-[40%]"
                 
                     >
                        <Image
                        src={setup}
                        alt='mac imagae'
                        unoptimized
                        className='h-full w-full rounded-md bg-neutral-100 shadow-lg' 
                        style={{objectFit: "cover"}}
                        />

                     </div>

                  </div>
              
                </FadeIn>

            </Container>
      );
}

export default About;