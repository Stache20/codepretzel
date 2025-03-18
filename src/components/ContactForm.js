import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

        <div className="flex items-center justify-center space-x-3 mb-3">
          <Mail size={24} className="text-blue-500" />
          <a
            href="mailto:your@email.com"
            className="text-lg text-blue-600 hover:underline"
          >
            your@email.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <Phone size={24} className="text-green-500" />
          <a
            href="tel:+1234567890"
            className="text-lg text-green-600 hover:underline"
          >
            +1 234 567 890
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
