import React from 'react';
import Headshot from '../images/LinkedInHeadshot.jpg';

const Home = () => {
  return (
    <section id="home" className="text-center py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto">
        <img src={Headshot} alt="Marvin Walls" className="rounded-full w-32 h-32 mx-auto my-4 border-4 border-white shadow-lg" />
        <h1 className="text-4xl font-bold text-yellow-500 fade-in">Marvin Walls</h1>
        <p className="text-xl mt-4 fade-in">Purdue University Graduate in Finance and Management</p>
        <p className="text-lg mt-2 fade-in">4 Years of Experience Data Management and Analytics</p>
      </div>
    </section>
  );
}

export default Home;
