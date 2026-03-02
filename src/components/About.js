import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

        <div className="space-y-5">
          <p className="text-lg leading-relaxed">
            I began working at 14 years old and quickly developed a reputation
            for improving the systems around me. Across both operational and
            technical roles, I have consistently identified inefficiencies,
            streamlined processes, and built solutions that scale.
          </p>

          <p className="text-lg leading-relaxed">
            My early career included roles spanning operations, logistics, and
            IT support. In college, I worked IT Help Desk and later managed a
            team responsible for data across more than 2 million customer sites
            at Stanley Security (now Securitas). These experiences strengthened
            my ability to operate in complex data environments and deliver
            reliable reporting at scale.
          </p>

          <p className="text-lg leading-relaxed">
            Today, I am a Data Reporting Analyst at Heartland Dental, the
            largest Dental Support Organization in the world. Heartland operates
            one of the largest SAP Analytics Cloud environments globally and has
            the highest number of concurrent SAC users of any SAP Analytics
            Cloud customer. I design and develop advanced dashboards and
            optimized stories that support large-scale operational reporting
            across the organization, including mobile-ready experiences.
          </p>

          <p className="text-lg leading-relaxed">
            My specialization is SAP Analytics Cloud scripting and advanced
            dashboard development front-end scripting, complex filtering
            behavior, script variables and dynamic text frameworks, blended model
            troubleshooting, and performance optimization. If a reporting
            requirement can be defined, I can architect and deliver it.
          </p>

          <p className="text-lg leading-relaxed">
            In addition to SAC, I leverage SQL and VBA to automate workflows,
            improve data quality, and reduce manual effort across teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;