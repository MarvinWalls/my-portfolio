import React from 'react';
import Headshot from '../images/LinkedInHeadshot.jpg';

const Home = () => {
  return (
    <section id="home">
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <img src={Headshot} alt="Marvin Walls" className="rounded-full w-32 h-32 mx-auto my-4" />
      <p>I am a Purdue University graduate with dual majors in Finance and Management, complemented by a Certificate in Entrepreneurship. With 4 years of experience in data management and analytics, I have a proven track record of leveraging advanced tools and methodologies to optimize processes, enhance data visibility, and drive significant cost savings. My expertise spans SAP Analytics Cloud, SQL, VBA, and project management, underscoring my passion for harnessing data to unlock future possibilities.</p>
    </section>
  );
}

export default Home;
