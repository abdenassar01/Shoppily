import { Routes, Route } from "react-router-dom";
import {  GlobalStyle, IconButton } from "./utils";

import Home from "./components/pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/account/login/Login";
import Signup from "./components/pages/account/signup/Signup";
import Terms from "./components/pages/account/Terms";
import ContactUs from "./components/pages/contact/ContactUs";
import About from "./components/pages/about/About";
import BecomeSeller from "./components/pages/seller/sell/BecomeSeller";
import Error404 from "./components/error/Error404";
import ListProduct from "./components/pages/seller/listing/ListProduct";

import PrivateRoute from "./components/privateRoute/PrivateRoute";

import { dark, light } from "./utils";
import { ThemeProvider } from "styled-components";
import { useState } from 'react';

import { MdDarkMode } from 'react-icons/md'
import Profile from "./components/pages/profile/Profile";


const App = () => {

  const [ theme, setTheme ] = useState("light")

	const ToggleTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  }

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}  >
          <Navbar />
          <IconButton onClick={ToggleTheme}>
              <MdDarkMode size={30}/>  
          </IconButton>
          <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route 
                  path="/sell" element={ <PrivateRoute Element={ <BecomeSeller /> } /> } 
                /> 
                <Route 
                  path="/me" element={ <PrivateRoute Element={ <Profile /> } /> } 
                />
                <Route 
                  path="/list" element={ <PrivateRoute Element={ <ListProduct /> } /> } 
                />
                <Route path="/*" element={<Error404 />}/> 
            </Routes> 
            <Footer /> 
          <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

