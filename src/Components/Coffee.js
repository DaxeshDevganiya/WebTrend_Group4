// Menu.js
import React from 'react';
import Footer from'./Footer';
function Coffee() {
    return (
        <div>
        
          <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Café Hub</h1>
              <p className="text-lg mb-8">Discover the best coffee </p>
              <a href="#featured" className="bg-white text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-gray-100 transition duration-300 ease-in-out">View Our Menu</a>
            </div>
          </section>
    
          
          <section id="featured" className="py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Coffee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/coffee-1.jpg" alt="Featured Item 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Latte</h3>
                    <p className="text-gray-700">Experience the sublime harmony of freshly brewed espresso and creamy milk in every sip of our Heavenly Latte.</p>
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out">price: $3.65</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/coffee-2.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Americano</h3>
                    <p className="text-gray-700">Savor the robust simplicity of our Americano, a perfect harmony of rich espresso and pure hot water.</p>
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out">price: $3.65</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/coffee-3.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">cappuccinos</h3>
                    <p className="text-gray-700">
Embrace the velvety delight of our Cappuccino, where rich espresso meets silky steamed milk in a blissful union of flavor and texture.</p>
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out">price: $5.65</button>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </section>
    
         
          <Footer />
        </div>
      );
}

export default Coffee;
