import { element } from "prop-types";
import "./App.css";
import Header from "./components/Header";
import Student from "./components/Student";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Error from "./components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />}/>

          </Route>
          <Route path="/app/:userId" element={<UserDetails />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* contact */}
          <Route path="/contact" element={<Contact />}>
            <Route index path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          {/* error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
