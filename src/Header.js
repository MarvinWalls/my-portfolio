// src/components/Header.js
import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPenFancy, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline"><FaHome className="inline-block mr-2" />Home</a></li>
          <li><a href="#about" className="hover:underline"><FaUser className="inline-block mr-2" />About</a></li>
          <li><a href="#projects" className="hover:underline"><FaProjectDiagram className="inline-block mr-2" />Projects</a></li>
          <li><a href="#substack" className="hover:underline"><FaPenFancy className="inline-block mr-2" />Substack Articles</a></li>
          <li><a href="#contact" className="hover:underline"><FaEnvelope className="inline-block mr-2" />Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
