// AboutUs.js
import React from 'react';
import Footer from'./Footer';

function AboutUs() {
  return (
    <div className="bg-gray-100">
      
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Café Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           
            <div className="md:order-2">
              <img src="../images/about.png" alt="Café Interior" className="rounded-lg shadow-md" />
            </div>
            
            <div className="md:order-1">
              <p className="text-lg text-gray-700 mb-4">
                Café Hub is a cozy café located in the heart of the city. We pride ourselves on serving the best coffee and pastries made from the finest ingredients. 
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our café provides a warm and inviting atmosphere, perfect for catching up with friends, studying, or enjoying a quiet moment alone. 
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a coffee aficionado or just looking for a place to relax, Café Hub has something for everyone. Visit us today and experience the taste of quality and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="../images/memeber.png" alt="Team Member 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Daxeshkumar Devganiya</h3>
                <p className="text-gray-700">Team crew</p>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="../images/memeber-2.jpg" alt="Team Member 2" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Aditi Jha</h3>
                <p className="text-gray-700">Team crew</p>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="../images/memeber.png	" alt="Team Member 3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">kushal Choksi</h3>
                <p className="text-gray-700">Team crew</p>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="../images/memeber.png	" alt="Team Member 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Parth Prajapati</h3>
                <p className="text-gray-700">Team crew</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
