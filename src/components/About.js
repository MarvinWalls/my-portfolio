import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg leading-relaxed">
          Coming from a tumultuous childhood, I started working as a janitor cleaning up after weddings at the age of 14. It was during this time that I first began to automate and streamline processes. Growing up in financial need, I took on various odd jobs and continuously demonstrated a knack for process improvement and managing others.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          From the simple days of cleaning up after weddings, I went on to make pizzas, ride a trash truck, grind parts on an assembly line, deliver groceries, and drive for Uber. My journey then led to more technical roles, such as working IT Help Desk in college and managing a team of six while overseeing data for over 2 million customer sites for Stanley Security now Securitas.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Today, I am currently building and streamlining processes for Heartland Dental, the largest DSO in the world. I create dashboards with SAP SAC, optimize workflows with VBA and SQL, and handle various other tasks as needed by the organization. In the future, I aim to continue honing my coding skills and potentially return to Purdue for a Master's in Artificial Intelligence.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          As you can see, I have a healthy love for large language models (LLMs). Before today, I had never touched JavaScript, but within hours, I have built this comprehensive website with the help of Claude and ChatGPT.
        </p>
      </div>
    </section>
  );
}

export default About;
