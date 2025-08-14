import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Problem Solver & Code Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I began my programming journey five years ago in technical high school, but my connection to the field started long before—my father has been a developer for over 20 years.
            </p>

            <p className="text-muted-foreground">
              I love solving problems and crafting solutions that make a real difference for people, turning ideas into practical, impactful applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="/contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              
            </div>
          </div>

          <div className="flex justify-center my-12">
            <img
              src="/images/me/me.jpg"
              alt="Profile or Concept"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
