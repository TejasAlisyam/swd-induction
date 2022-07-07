import React, { useState, useEffect } from "react";
import "./App.css";
import axios, { Axios } from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Post from "./components/pages/Post";
import Album from "./components/pages/albums";
import Comment from "./components/pages/Comments";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<Post />} />
          <Route path="/users/albums/:id" element={<Album />} />
          <Route path="/posts/:id" element={<Comment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
