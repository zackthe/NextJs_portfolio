"use client";
 
import React, { useEffect, useState } from "react";
import  InfiniteMovingCards  from "@/components/ui/infinite-moving-cards";
import { Container } from "./Container";
import { SimpleLayout } from "./SimpleLayout";
import { FadeIn } from "./FadeIn";




 
export default function InfiniteMovingCardsDemo () {
  return (
  
  <>

<SimpleLayout 
    title="Testimonials."
    intro="Happy clients with the results they've got. "
    className ='bg-slate-50 dark:bg-zinc-900  mt-16 mb-10 '
  >
  </SimpleLayout>
 
  <div className="h-[30rem] rounded-md flex flex-col antialiased bg-slate-50 dark:dark:bg-zinc-900 dark:bg-grid-white/[0.05] items-center  relative overflow-hidden">



  <FadeIn >
  <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
  />
  </FadeIn>


 
  </div>
  </>
        
  );
}
 
const testimonials = [
  {
    quote: "I had an excellent experience with Zakaria for the development of the showcase website Cloutik.com with Gatsby. The final result is both fast and aesthetic, perfectly meeting my expectations. Zakaria was professional, responsive, and was able to adapt to all of my requests. I highly recommend his services for any web project." ,
    name: "Tarik moussaoui.",
    title: "software engineer, Co-founder of cloutik.com.",
  },
  {
    quote:
    "I love the html design he create for my emailing campaign.",
    name: "morad.",
    title: "client from fiverr.",
  },
  
];