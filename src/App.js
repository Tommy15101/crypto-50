import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import NoPage from "./components/pages/noPage/NoPage";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} /> {/* No Page */}
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
