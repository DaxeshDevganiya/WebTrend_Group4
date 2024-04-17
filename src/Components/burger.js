// Menu.js
import React from 'react';
import Footer from './Footer'
function burger() {
    return (
        <div>
        
          <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Café Hub</h1>
              <p className="text-lg mb-8">Discover the best Burger </p>
              <a href="#featured" className="bg-white text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-gray-100 transition duration-300 ease-in-out">View Our Menu</a>
            </div>
          </section>
    
         
          <section id="featured" className="py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Burgers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/burger-1.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">MUSHROOM BACON DOUBLE CHEESEBURGER</h3>
                    <p className="text-gray-700">Sauteed Mushrooms + Bacon Double Cheeseburger = a match made in heaven. Topped with lettuce, onions, tomatoes</p>
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out">price: $15.60</button>
                    </div>
                  </div>
                </div>
               
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="../images/burger-2.jpg" alt="Featured Item 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">HOLY SMOKES </h3>
                    <p className="text-gray-700">
                   Double cheeseburger, 'Smoke' [deep fried panko crusted fried jalapeños] topped with lettuce, tomato, onion, pickles and deception sauce.  </p>
                    <div className="mt-4 items-center">
                      
                      <button className="bg-gray-900 text-white px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition duration-300 ease-in-out">price: $10.27</button>
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

export default burger;
