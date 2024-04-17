// Menu.js
import React from 'react';
import Footer from'./Footer';

function Menu() {
    return (
        <div>
          
          <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Café Hub</h1>
              <p className="text-lg mb-8">Discover the best coffee and pastries in town</p>
              <a href="#featured" className="bg-white text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-gray-100 transition duration-300 ease-in-out">View Our Menu</a>
            </div>
          </section>
    
          
          <section id="featured" className="py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/coffee.jpg" alt="Featured Item 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Specialty Coffee</h3>
                   
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out"><a href="/menu/coffee">Explore</a></button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/cro.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Croissants</h3>
                    
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out"><a href="/menu/Croissants">Explore</a></button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/pizza.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Pizza</h3>
                   
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out"><a href="/menu/pizza">Explore</a></button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/burger.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Burgers</h3>
                    
                    <div className="mt-4 items-center">
                      
                    <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out"><a href="/menu/burger">Explore</a></button>
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

export default Menu;
