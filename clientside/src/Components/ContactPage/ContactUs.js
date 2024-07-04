import React, { useState } from 'react';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formState);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1174585939/photo/pretty-young-woman-gynecologist-using-her-mobile-phone-before-starting-consultation-in-the.jpg?s=612x612&w=0&k=20&c=HVTdKcjZ0SlWn8SsRsxGY9brhPg9rbZBU36x0gcrUQM="
            alt="Doctor Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder='Enter Your Name'
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder='Enter Your Email'
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone No</label>
              <input
                type="number"
                name="number"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                placeholder='Enter Your Mobile Number'
              />
            </div>



            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows="4"
                required
                placeholder='Enter some Here.....'
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full px-4 py-3 text-sm font-medium text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                style={{ backgroundColor: '#0798BC' }}
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
