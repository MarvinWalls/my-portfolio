import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <p className="text-lg leading-relaxed text-center">
          Feel free to reach out to me:
        </p>
        <ul className="mt-4 text-center space-y-2">
          <li>Email: <a href="mailto:marvinwalls@marvinwalls.com" className="text-blue-500 hover:underline">marvinwalls777@gmail.com</a></li>
          <li>Phone: 812-619-1517</li>
          <li>Location: Lafayette, IN</li>
          <li><a href="https://www.linkedin.com/in/marvinwalls/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
