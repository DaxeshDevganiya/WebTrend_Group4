import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/home';
import AboutUs from './Components/about';
import ContactPage from './Components/contact';
import './App.css';
import Menu from './Components/Menu';
import Coffee from './Components/Coffee';
import Croissants from './Components/Croissants';
import Pizza from './Components/pizza';
import Burger from './Components/burger';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          </header>
        <Routes>
      <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/menu/coffee" element={<Coffee/>}/>
              <Route path="/menu/Croissants" element={<Croissants/>}/>
              <Route path="/menu/pizza" element={<Pizza/>}/>
              <Route path="/menu/burger" element={<Burger/>}/>
            </Routes>
      </div>
      
      </Router>
    );
  }
 
}



export default App;
