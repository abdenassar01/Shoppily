import { Routes, Route, Navigate } from "react-router-dom";
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
import Logout from "./components/pages/logout/Logout";
import Profile from "./components/pages/profile/Profile";
import Cart from "./components/pages/cart/Cart";
import Listing from "./components/pages/listing/Listing";

import PrivateRoute from "./components/privateRoute/PrivateRoute";


import { dark, light } from "./utils";
import { ThemeProvider } from "styled-components";
import { useState } from 'react';

import { MdDarkMode } from 'react-icons/md'

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useUserStore } from "./models/user";
import { extended } from "./utils/axios/axois";
import Store from "./components/pages/seller/store/Store";
import Search from "./components/pages/listings/search/Search";
import Category from "./components/pages/listings/category/Category";
import Order from "./components/pages/order/Order";


const App = observer(() => {

  const [ theme, setTheme ] = useState("light")
  const [ isAuthentificated, setAuthentificated ] = useState(false)
  
  const user = useUserStore();

	const ToggleTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {

    setAuthentificated(localStorage.getItem("isAuthorized"))

    extended.get("/user/me", {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then(res =>{
      user.setUser(res?.data);
      user.setToken(localStorage.getItem("token"))
      user.setIsAuthorized(true)
    }).catch(ex => {
      user.setIsAuthorized(false)
    })

  },[ user, isAuthentificated ])

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}  >
          <Navbar />
          <IconButton onClick={ToggleTheme}>
              <MdDarkMode size={30}/>  
          </IconButton>
          <Routes >
                <Route path="/" element={<Home />} />
                <Route 
                  path="/login" element={ !user.isAuthentificated ? <Login /> : <Navigate to="/" /> } 
                />
                <Route 
                  path="/signup" element={ !user.isAuthentificated ? <Signup /> : <Navigate to="/" /> }
                />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/search">
                  <Route path=":q" element={<Search />} />
                </Route>
                <Route path="/category">
                  <Route path=":id" element={<Category />} />
                </Route>
                <Route path="/listing">
                  <Route path=":id" element={<Listing />} />
                </Route>
                <Route 
                  path="/sell" element={ <PrivateRoute Element={ <BecomeSeller /> } /> } 
                /> 
                <Route 
                  path="/order" element={ <PrivateRoute Element={ <Order /> } /> } 
                /> 
                <Route path="/store">
                  <Route path=":id" element={ <Store /> } />
                </Route>
                <Route 
                  path="/me" element={ <PrivateRoute Element={ <Profile /> } /> } 
                />
                <Route 
                  path="/cart" element={ <PrivateRoute Element={ <Cart /> } /> } 
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
})

export default App