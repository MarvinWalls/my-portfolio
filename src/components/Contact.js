import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Correct import for LinkedIn icon

const Contact = () => {
  return (
    <section id="contact" className="mt-8 py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p>Feel free to reach out to me:</p>
        <ul className="list-none mt-2 space-y-4">
          <li><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:marvinwalls777@gmail.com" className="text-blue-500 hover:underline">marvinwalls777@gmail.com</a></li>
          <li><FontAwesomeIcon icon={faPhone} /> Phone: 812-619-1517</li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: Lafayette, IN</li>
          <li><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/marvinwalls/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
