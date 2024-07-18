import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';  // Import the About component
import Projects from './components/Projects';
import SubstackArticles from './components/SubstackArticles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <Home />
        <About />  {/* Add the About component */}
        <Projects />
        <SubstackArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
