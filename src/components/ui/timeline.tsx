import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TechBadge from "../../../app/_components/TechBadge";
import { Experience } from "../../lib/definitions";

import {ThemeToggle} from "../../components/ThemeToggle";
import {StarBackground} from "../..//components/StarBackground";
import { Navbar } from "../..//components/Navbar";

interface TimelineProps {
  data: Experience[];
}

export const Timeline = ({ data = [] }: TimelineProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === element) {
          setHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

 return (
    <div className="w-full bg-background " ref={containerRef}>
        {/* ThemeToggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          From Air Force to Front-end: Why the Switch?
        </h1>
      </div>
      <p className="text-muted-foreground text-center">
        My path—
        <span className="font-semibold text-primary">military discipline</span>{" "}
        meets{" "}
        <span className="font-semibold text-primary">creative coding</span>.
        After leading teams in the Air Force, I now craft digital experiences
        with{" "}
        <span className="font-semibold text-primary">
          React (2yrs) and Next.js (1yr)
        </span>
        . The mission remains: build{" "}
        <span className="font-semibold text-primary">
          intuitive, elegant solutions
        </span>{" "}
        that solve real problems—just with fewer push-ups.
      </p>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10  bg-background border  flex items-center justify-center">
                <div className="h-4 w-4 bg-secondary p-2 border" />
              </div>
              <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50 ">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 md:pr-0 w-full text-left">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {item.date}
              </h3>
              <div>
                <p className="mb-8 font-normal text-xl">{item.title}</p>
                <p className="mb-8 text-muted-foreground">{item.description}</p>
                <div className="flex flex-wrap gap-2 items-center ">
                  {item.badges.map((i) => (
                    <TechBadge key={i} tech={i}/>
                  ))}
                </div>
                {item.img_url && (
                  <Image
                    src={item.img_url}
                    alt={item.img_url}
                    width={500}
                    height={500}
                    onLoad={() => {
                      if (ref.current) {
                        const rect = ref.current.getBoundingClientRect();
                        setHeight(rect.height);
                      }
                    }}
                    className="w-full aspect-video object-cover shadow-md my-6"
                  />
                )}
                {item.img_url_2 && (
                  <Image
                    src={item.img_url_2}
                    alt={item.img_url_2}
                    width={500}
                    height={500}
                    onLoad={() => {
                      if (ref.current) {
                        const rect = ref.current.getBoundingClientRect();
                        setHeight(rect.height);
                      }
                    }}
                    className="w-full aspect-video object-cover shadow-md my-6"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#555555] via-[#777777] to-transparent shadow-[0_0_8px_#A855F7] blur-[0.3px] from-[0%] via-[20%] "
          />
        </div>
      </div>
    </div>
  );
};
