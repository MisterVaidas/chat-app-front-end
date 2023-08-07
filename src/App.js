import "./App.css";
import React from "react";
import { Nav } from "react-bootstrap";
import Header from "./Components/Header";
// import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Chat from "./Components/Chat/MainChat";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Nav>
          {/* <Link to="/">Home</Link> */}
          <Link to="About">About</Link>
          <Link to="Chat">Chat</Link>
        </Nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
