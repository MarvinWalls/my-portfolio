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
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section id="home">
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p>Hi, I'm Marvin Walls. A brief intro about yourself.</p>
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
