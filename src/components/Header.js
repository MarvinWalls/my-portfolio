import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-2 shadow-md">
      <nav className="container mx-auto">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#substack" className="hover:text-yellow-500">Substack Articles</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
