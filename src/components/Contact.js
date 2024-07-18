// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mt-8">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p>Feel free to reach out to me:</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Email: <a href="mailto:marvinwalls777@gmail.com" className="text-blue-500 hover:underline">marvinwalls777@gmail.com</a></li>
        <li>Phone: 812-619-1517</li>
        <li>Location: Indianapolis, IN</li>
      </ul>
    </section>
  );
}

export default Contact;
