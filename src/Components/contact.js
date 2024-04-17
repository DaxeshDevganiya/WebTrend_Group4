// ContactUs.js
import React from 'react';
import Footer from'./Footer';

function ContactUs() {
  return (
    <div className="bg-gray-100">
   
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" placeholder="Enter your name" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-400" placeholder="Enter your message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 ease-in-out">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-700">Kitchener</p>
              <p className="text-gray-700">Doon valley</p>
            </div>
           
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Email: Café Hub@cafehub.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;
