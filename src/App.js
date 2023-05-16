import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path={"/blogs/:id"} element={<BlogDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
