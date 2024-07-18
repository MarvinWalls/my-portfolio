import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#substack-articles" className="hover:text-yellow-400">Substack Articles</a></li> {/* Update this link */}
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
