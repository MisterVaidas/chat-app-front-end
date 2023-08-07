import "./App.css";
import React from "react";
import { Nav } from "react-bootstrap";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Chat from "./Components/Chat/MainChat";
import Contact from "./Components/Contact/Contact";
// import LogoutModal from "./Components/Modal/LogoutModal";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Register from "./Components/Modal/RegisterModal";
// import Modal from 'react-modal';


class App extends React.Component {

  render() {
    return (

    <Router>
          <Nav>
            <Link to="/"><img src="https://i.guim.co.uk/img/media/a5fb31e646d2677f9d44104a3b26ee42955f0acc/0_170_5100_3059/master/5100.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=aa3e8bddfcc681ae45c2d642734ccdbc" alt="LOGO" height={75} width={100}></img></Link>
            <Link to="/">Home</Link>
            <Link to="About">About</Link>
            <Link to="Chat">Chat</Link>
            <Link to="Contact">Contact</Link>
            {/* <Link to="Logout">Logout</Link> */}
          </Nav>
      

          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/Modal/RegisterModal" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/logout" element={<LogoutModal />} /> */}
          </Routes>
      
        </Router>
    );
  }
}

export default App;
