// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components-main/navbar';
import Social from './components-main/social';
import Footer from './components-main/footer';
import Home from './home-page/home';
import Contact from './contact-page-comp/Contact';
import Policy from './Policy/policy';
import { Fragment } from 'react';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Fragment>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policy" element={<Policy />} />
            </Routes>
          </Fragment>
          <Navbar className="navbar" />
          <Social className="social" />
          <Footer className="footer" />
        </header>
      </div>
    </Router>
  );
}

export default App;
