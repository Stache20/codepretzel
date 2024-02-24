import React, { useState } from "react";
import { send } from "emailjs-com";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);

    e.preventDefault();

    send("service_f7sixkt", "template_9c986ml", toSend, "sVgJIAbmWtknlbMGD")
      .then((response) => {
        console.log("Sucess!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className=""
      >
        <div className="mb-3 pt-0 ">
          <input
            type="text"
            name="first_name"
            value={toSend.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-black rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="text"
            value={toSend.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            name="last_name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-black rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            value={toSend.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-black rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>

        <div className="mb-3 pt-0">
          <input
            type="tel"
            maxLength={13}
            pattern="{13}"
            value={toSend.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            name="phone_number"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-black rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>

        <div className="mb-3 pt-0">
          <select
            className="px-3 py-3 relative bg-black  rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            placeHolder="Select Service"
            id="service"
            name="service"
          >
            <option style={{color: "grey"}} value="" disabled selected>
              Select Service
            </option>
            <option value="website">Website</option>
            <option value="webApp">Web Application</option>
            <option value="mercedes">Code adjustment</option>
          </select>
        </div>
        <div className="mb-3 pt-0 ">
          <textarea
            placeholder="Please describe as best as you can what you are looking for. Please let me know your preferred way of contact and availabilty"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            className="request px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-black rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-black  active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            style={{ color: "white" }}
          >
            Submit here
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
