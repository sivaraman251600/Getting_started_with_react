import React  from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./fourthAssignment.css"
import Home from './pages/home';
import About from './pages/about';

 function RouterExample (){

    return(
        <div>
            <h2>React - Router Example</h2>
            <Router>
                <nav>
                    <Link to="/" id="home">Home</Link>
                    <Link to="/aboutus" id="home">About Us</Link>
                </nav>
                <Routes>
                    <Route path="/"  element= {<Home/>}/>
                    <Route path="/aboutus" element = {<About/>}/>
                </Routes>
            </Router>
        </div>
    )
 }

 export default RouterExample