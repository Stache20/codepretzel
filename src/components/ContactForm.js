import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in touch today!</h2>

        <div className="flex items-center justify-center space-x-3 mb-3">
          <Mail size={24} className="text-blue-500" />
          <a
            href="mailto:sstahuber@gmail.com"
            className="text-lg text-white hover:underline"
          >
            sstahuber@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-5">
          <Phone size={24} className="text-white" />
          <a
            href="tel:+2363356526"
            className="text-lg text-white hover:underline"
          >
            +1 236 335 6526
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
