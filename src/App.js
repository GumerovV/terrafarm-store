import React, { useContext, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Company from "./pages/Company";
import NotFound404 from "./pages/NotFound404";
import ProductDetail from "./pages/ProductDetail";
import { useRef } from "react";
import Basket from "./pages/Basket";
import { Context } from ".";
import { check } from "./api/userAPI";
import { observer } from "mobx-react-lite";
import Auth from "./pages/Auth";
import { getBasket } from "./api/basketAPI";
import Profile from "./pages/Profile";


const App = observer(() => {
  const {user, basket} = useContext(Context)
  const contacts = useRef()

  const fetchData = async () => {
    try {
      const isAuthenticated = await check();
      
      if (isAuthenticated) {
        const devices = await getBasket()

        user.setIsAuth(true)
        user.setUser(isAuthenticated)
        user.setRole(isAuthenticated.role)

        basket.loadBasket(devices.products)
      }
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
    <Header />
    <Wrapper >
      <Routes>
        <Route path="/" element={<Home contacts={contacts }/>}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/basket" element={<Basket />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFound404 />}/>
      </Routes>
    </Wrapper>
    <Footer scroll={contacts}/>
    </>
  );
})

export default App;
