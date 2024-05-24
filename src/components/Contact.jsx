import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col md:flex-row bg-white py-[20px] pb-[200px]">
      <div className="md:w-1/2 p-8 ">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Welcome to CryptoPlayground! We're here to help you with any questions or concerns you might have about our platform. Whether you're new to crypto trading or an experienced trader, we're committed to providing the support you need.
        </p>
        <p className="mb-4">
          Feel free to reach out to us by filling out the form on the right. Our team will get back to you as soon as possible. We value your feedback and are always looking for ways to improve our services.
        </p>
        <p className="mb-4">
          You can also follow us on our social media channels to stay updated with the latest news and updates from CryptoPlayground.
        </p>
        <p className="font-bold">Thank you for choosing CryptoPlayground!</p>
      </div>
      <div className="md:w-1/2 max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
