"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { StarIcon } from '@heroicons/react/20/solid'


const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-xl  flex-shrink-0 px-8 py-6 md:w-[450px] ring-1 bg-white/90 ring-neutral-950/5 filter backdrop-blur-md transition hover:bg-white dark:bg-zinc-800/50 dark:hover:bg-zinc-800 dark:ring-zinc-700/40"
            style={{
            /*  background:
                "linear-gradient(180deg, var(--gray-800), var(--gray-900)",
            */}}
            key={item.name}
          >
               <div className="flex gap-x-1 text-teal-700 mb-4">
                <StarIcon className="h-5 w-5 flex-none " aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              </div>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-lg leading-[1.6] text-neutral-700 dark:text-zinc-200 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-md leading-[1.6] text-neutral-600 dark:text-zinc-400 font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-neutral-600 dark:text-zinc-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default InfiniteMovingCards