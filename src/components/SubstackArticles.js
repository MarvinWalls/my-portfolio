// src/components/SubstackArticles.js
import React from 'react';

const SubstackArticles = () => {
  return (
    <section id="substack" className="mt-8">
      <h2 className="text-xl font-semibold">Substack Articles</h2>
      <ul className="list-disc pl-5 mt-2">
        <li><a href="https://marvinwalls.substack.com/p/braving-the-storm-my-first-financial" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Braving the Storm: My First Financial Loss</a></li>
        <li><a href="https://substack.com/home/post/p-95514265" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">If you had a different name would your life be different?</a></li>
        {/* Add more links as needed */}
      </ul>
    </section>
  );
}

export default SubstackArticles;
