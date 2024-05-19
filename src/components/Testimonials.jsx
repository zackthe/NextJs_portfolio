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
    quote: "J'ai eu une excellente expérience avec Zakaria pour le développement du site vitrine Cloutik.com avec Gatsby. Le résultat final est à la fois rapide et esthétique, répondant parfaitement à mes attentes. Zakaria a été professionnel, réactif et a su s'adapter à toutes mes demandes. Je recommande vivement ses services pour tout projet web.    " ,
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