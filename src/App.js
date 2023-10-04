import React from "react";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Company from "./pages/Company";

function App() {
  return (
    <>
    <Header />
    <Wrapper >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </Wrapper>
    <Footer />
    </>
  );
}

export default App;
