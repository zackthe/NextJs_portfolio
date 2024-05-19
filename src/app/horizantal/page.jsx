'use client'

import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'


import spamSimple from '@/images/projects/spamGradient.jpeg'
import portfolioScreen from '@/images/projects/portfolio_mac.jpeg'
import cloutikMap from '@/images/projects/cloutik_mac_gradient.jpeg'

const Example = () => {
  return (
   
      <HorizontalScrollCarousel />

  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });



  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
        style={{ x }} 
  
        
        className="flex gap-16">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
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
      <div className="absolute inset-0 z-10 grid place-content-center">
      {/*  <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Example;

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