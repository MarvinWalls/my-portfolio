import React from 'react';

const SubstackArticles = () => {
  return (
    <section id="substack-articles" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Substack Articles</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <a href="https://marvinwalls.substack.com/p/braving-the-storm-my-first-financial" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Braving the Storm: My First Financial Loss</a>
            </li>
            <li className="mb-2">
              <a href="https://substack.com/home/post/p-95514265" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">If you had a different name would your life be different?</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SubstackArticles;
