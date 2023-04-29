import * as React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Top from './components/Top';
import About from './components/About';
import Subscription from './components/Subscription';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <Top />
              <About />
              <Subscription />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;