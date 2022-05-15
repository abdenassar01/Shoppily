import { Routes, Route } from "react-router-dom";
import {  GlobalStyle } from "./utils";

import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

import { dark, light } from "./utils";
import { ThemeProvider } from "styled-components";
import { useState } from 'react';

const App = () => {

    const [ theme, setTheme ] = useState("light")

	const ToggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
  }

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}  >
          <Navbar />
          <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<h1 >hey</h1>}/> 
            </Routes>
            <Footer />
          <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

