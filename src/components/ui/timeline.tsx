import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TechBadge from "../../_components/TechBadge";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "../..//components/StarBackground";
import { Navbar } from "../..//components/Navbar";
import { Footer } from "../..//components/Footer";

export const Timeline = () => {
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
    <div className="w-full bg-background" ref={containerRef}>
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <div className="h-32"></div>

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          From Disney Dreams to Digital Realities
        </h1>
      </div>
      <p className="text-muted-foreground text-center">
      {" "}
      <span className="font-semibold text-primary">Disney magic</span>{" "}
      meets{" "}
      <span className="font-semibold text-primary">creative coding</span>.<br />
      My journey taught me the importance of attention to detail, creativity, and storytelling, skills I bring to every project{" "}
      <span className="font-semibold text-primary"></span>.<br />
      The mission remains: {" "}
      <span className="font-semibold text-primary">
        seamless experiences, 
      </span>{" "}
       from frontend build  to backend.
    </p>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">

        {/* EXPERIÊNCIA 1 */}
        <div className="flex justify-start pt-10 md:pt-28 md:gap-10">
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 bg-background border flex items-center justify-center">
              <div className="h-4 w-4 bg-secondary p-2 border" />
            </div>
            <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50">
              Feb 23 - May 24
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 md:pr-0 w-full text-left">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
              Feb 23 - May 24
            </h3>
            <p className="mb-8 font-normal text-xl">
              Montreal Informatica IT Support Intern - Level 1
            </p>
            <p className="mb-8 text-muted-foreground">
              Gained hands-on experience troubleshooting hardware and software issues, providing first-level support to end-users, and assisting in maintaining IT infrastructure while developing problem-solving and communication skills.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <TechBadge tech="Troubleshooting" key="troubleshooting" />
              <TechBadge tech="Customer Support" key="customer-support" />
              <TechBadge tech="Networking" key="networking" />
              <TechBadge tech="Problem Solving" key="problem-solving" />
              <TechBadge tech="Communication" key="communication" />
            </div>
            
            <img
              src="/images/experience/montrealexp.jpg"
              alt="Montreal Informatica"
              className="w-full aspect-video object-cover shadow-md my-6"
            />

          </div>
        </div>

        {/* EXPERIÊNCIA 2 */}
        <div className="flex justify-start pt-10 md:pt-28 md:gap-10">
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 bg-background border flex items-center justify-center">
              <div className="h-4 w-4 bg-secondary p-2 border" />
            </div>
            <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50">
              Jan 24 - Jul 27
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 md:pr-0 w-full text-left">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
              Jan 24 - Jul 27
            </h3>
            <p className="mb-8 font-normal text-xl">
              Bachelor's in Software Engineering - PUC Minas
            </p>
            <p className="mb-8 text-muted-foreground">
              Enrolled in a program focused on developing modern software solutions with scalable architectures, practical application of agile methodologies, and strong foundations in software engineering theory and practice.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <TechBadge tech="Scrum" key={""} />
              <TechBadge tech="Architecture" key={""} />
              <TechBadge tech="Agile" key={""} />
              <TechBadge tech="OOP" key={""} />
              <TechBadge tech="DB Design" key={""} />
            </div>

            <img
              src="/images/experience/puc2.jpg"
              alt="PUC Minas"
              className="w-full aspect-video object-cover shadow-md my-6"
            />
            
          </div>
        </div>

        {/* EXPERIÊNCIA 3 */}
        <div className="flex justify-start pt-10 md:pt-28 md:gap-10">
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 bg-background border flex items-center justify-center">
              <div className="h-4 w-4 bg-secondary p-2 border" />
            </div>
            <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50">
              Dec 24 - Feb 25
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 md:pr-0 w-full text-left">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
              Dec 24 - Feb 25
            </h3>
            <p className="mb-8 font-normal text-xl">
              International College Program - Disney World
            </p>
            <p className="mb-8 text-muted-foreground">
              Gained hands-on experience in operations and guest services at Disney Parks, developing strong problem-solving, communication, and teamwork skills while collaborating in a fast-paced, international environment.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <TechBadge tech="Customer Service" key="customer-service" />
              <TechBadge tech="Teamwork" key="teamwork" />
              <TechBadge tech="Problem Solving" key="problem-solving" />
              <TechBadge tech="Communication" key="communication" />
            </div>

            <img
              src="/images/experience/disney.jpeg"
              alt="Disney"
              className="w-full aspect-video object-cover shadow-md my-6"
            />
            <img
              src="/images/experience/disney-2.jpeg"
              alt="Disney"
              className="w-full aspect-video object-cover shadow-md my-6"
            />
            
          </div>
        </div>

        {/* EXPERIÊNCIA 4 */}
        <div className="flex justify-start pt-10 md:pt-28 md:gap-10">
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 bg-background border flex items-center justify-center">
              <div className="h-4 w-4 bg-secondary p-2 border" />
            </div>
            <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50">
              Mar 25 - Present
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 md:pr-0 w-full text-left">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
              Mar 25 - Present
            </h3>
            <p className="mb-8 font-normal text-xl">
              90 TI - Software Development Intern
            </p>
            <p className="mb-8 text-muted-foreground">
              Working on full-stack development projects, creating and maintaining applications using C#, React.js, TypeScript, SQL Server, and TailwindCSS, while improving problem-solving, code quality, and collaboration skills.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <TechBadge tech="C#" key="csharp" />
              <TechBadge tech="React.js" key="react" />
              <TechBadge tech="TypeScript" key="typescript" />
              <TechBadge tech="SQL Server" key="sql-server" />
              <TechBadge tech="TailwindCSS" key="tailwind" />
              <TechBadge tech="Problem Solving" key="problem-solving" />
              <TechBadge tech="Collaboration" key="collaboration" />
            </div>
            
            <img
              src="/images/experience/90exp.jpg"
              alt="90 TI"
              className="w-full aspect-video object-cover shadow-md my-6"
            />
          </div>
        </div>

        {/* Linha vertical animada */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#555555] via-[#777777] to-transparent shadow-[0_0_8px_#A855F7] blur-[0.3px] from-[0%] via-[20%]"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
