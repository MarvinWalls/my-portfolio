import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#substack" className="hover:underline">Substack Articles</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section id="home">
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p>I am a Purdue University graduate with dual majors in Finance and Management, complemented by a Certificate in Entrepreneurship. With 4 years of experience in data management and analytics, I have a proven track record of leveraging advanced tools and methodologies to optimize processes, enhance data visibility, and drive significant cost savings. My expertise spans SAP Analytics Cloud, SQL, VBA, and project management, underscoring my passion for harnessing data to unlock future possibilities.</p>
        </section>
        <section id="substack" className="mt-8">
          <h2 className="text-xl font-semibold">Substack Articles</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><a href="https://marvinwalls.substack.com/p/braving-the-storm-my-first-financial" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Braving the Storm: My First Financial Loss</a></li>
            <li><a href="https://substack.com/home/post/p-95514265" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">If you had a different name would your life be different?</a></li>
            {/* Add more links as needed */}
          </ul>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Marvin Walls. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;