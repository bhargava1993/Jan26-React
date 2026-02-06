import React, { useEffect, useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import Navbar from './components/Navbar';

const HomePage = lazy(() => import("./components/HomePage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));

function App() {



  // const [HomePage, setHomePage] = useState(null)
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);

  // useEffect(() => {
  //   import("./components/HomePage").then(
  //     (module) =>
  //       setHomePage(()=>module.default))
  // }, []);

  // const loadHomePage = () => {
  //   import("./components/HomePage").then((module) => 
  //     setHomePage(()=>module.default))
  // }

  // const loadAboutPage = () => {
  //   import("./components/AboutPage").then((module) => 
  //     setAboutPage(()=>module.default))
  // }

  // const loadContactPage = () => {
  //   import("./components/ContactPage").then((module) =>
  //      setContactPage(()=>module.default))
  // }


  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        {/* <nav>
          <ul>
            <li>
              <Link to="/" onClick={loadHomePage}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={loadAboutPage}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={loadContactPage}>Contact</Link>
            </li>
          </ul>
        </nav> */}

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading ....</div>}>
          <Routes>
            <Route path="/"
              element={<HomePage />} />
            <Route path="/about"
              element={<AboutPage />} />
            <Route path="/contact"
              element={<ContactPage />} />

          </Routes>
        </Suspense>

        {/* <Routes>
          <Route path="/"
            element={
              HomePage ? <HomePage /> : <div> Loading....</div>
            } />
          <Route path="/about"
            element={
              AboutPage ? <AboutPage /> : <div> Loading....</div>
            } />
          <Route path="/contact"
            element={
              ContactPage ? <ContactPage /> : <div>Loading....</div>
            } />

        </Routes> */}
      </div>
    </Router>
  )
}

export default App
