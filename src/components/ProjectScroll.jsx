'use client'

import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { useRef , useEffect} from "react";
import Image from 'next/image'


import spamSimple from '@/images/projects/spamGradient.jpeg'
import portfolioScreen from '@/images/projects/portfolio_mac.jpeg'
import cloutikMap from '@/images/projects/cloutik_mac_gradient.jpeg'
import Lenis from '@studio-freight/lenis'
import { SimpleLayout } from "./SimpleLayout";
import { FadeIn } from "./FadeIn";


export default function ProjectScroll () {



  return (

    <HorizontalScrollCarousel />

  );
};

const HorizontalScrollCarousel = () => {


  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

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


  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (

    <FadeIn >

        <section ref={targetRef} className="relative h-[200vh] bg-white/20 dark:bg-black/20">        

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div 
            style={{ x }} 
    
            className="flex gap-20">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
            </motion.div>
        </div>
        </section>
        
    </FadeIn>

  );
};

const Card = ({ card }) => {
  return (

    <div
      key={card.id}
      className="group relative h-[400px] w-[600px] overflow-hidden bg-neutral-200"
    >

      <div
     
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
          <Image
                    
                    className="rounded-lg w-full"
                    src={card.url}
                    width={700}
                    height={600}
                     />

      </div>
      <div className="absolute inset-0 z-10 grid place-content-start h-2">
        <p className="bg-gradient-to-br from-white/10 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-xl">
          {card.title}
        </p> 
      </div>
    </div>
  );
};


const cards = [
  {
    url: spamSimple,
    title: "spam checker",
    id: 1,
  },
  {
    url: portfolioScreen,
    title: "Portfolio V1",
    id: 2,
  },
  {
    url: cloutikMap,
    title: "Cloutik",
    id: 3,
  },

];