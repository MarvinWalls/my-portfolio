import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubstackArticles from './components/SubstackArticles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <Home />
        <SubstackArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;