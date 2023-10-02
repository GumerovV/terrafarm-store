import React from "react";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Header />
    <Wrapper >
      <Home />
    </Wrapper>
    <Footer />
    </>
  );
}

export default App;
