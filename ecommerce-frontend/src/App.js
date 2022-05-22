import { Routes, Route } from "react-router-dom";
import {  GlobalStyle, IconButton } from "./utils";

import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer'
import Login from './components/account/login/Login'
import Signup from './components/account/signup/Signup'
import Terms from './components/account/Terms'

import { dark, light } from "./utils";
import { ThemeProvider } from "styled-components";
import { useState } from 'react';

import { MdDarkMode } from 'react-icons/md'

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
                <Route path="/*" element={<h1 >Error 404</h1>}/> 
            </Routes> 
            <Footer /> 
          <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

