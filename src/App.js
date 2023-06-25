import React from "react";
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css";


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1D4130',
      darker: '#053e85',
      contrastText: '#FFFFFF',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <ThemeProvider theme={theme}>
                <Navbar />
                <Top />
                <About />
                <Subscription />
              </ThemeProvider>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
