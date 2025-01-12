"use client"
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Save the form data to local storage
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Your message has been saved!");
    
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mt-10 ml-10 flex justify-evenly items-center flex-wrap">
      <div>
        <h1 className="text-orange-700 text-3xl font-extrabold">Get in Touch</h1>
        <p className="text-xl text-gray-500 mt-4">
          Feel free to ask questions, feedback, and collaboration opportunities.
        </p>
        <div className="mt-12">
          <h2 className="text-orange-700 text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a
                href="javascript:void(0)"
                className="text-gray-500 text-sm ml-4"
              >
                <small className="block text-gray-500">Mail</small>
                <strong>mahadusman2008@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-orange-700 text-base font-bold">Contact</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a4.5 4.5 0 0 1-4.5 4.5H8.5A4.5 4.5 0 0 1 4 15.5V8.5A4.5 4.5 0 0 1 8.5 4h7A4.5 4.5 0 0 1 20 8.5v7ZM6.5 10a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2h-11Z" />
                </svg>
              </div>
              <a href="tel:03333210922" className="text-gray-500 text-sm ml-4">
                <small className="block text-gray-500">Call</small>
                <strong>03333210922</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form className="mt-3 space-y-4 w-[300px]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
}
