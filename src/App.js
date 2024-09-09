import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import SubstackArticles from './components/SubstackArticles';
import Contact from './components/Contact';
import Projects from './components/Projects'; // Import the Projects component

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <Home />
        <About />
        <SubstackArticles />
        <Projects />  {/* Add the Projects component here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
