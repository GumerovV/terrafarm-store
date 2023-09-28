import React from "react";
import Header from "./components/pageHeader/Header";
import Home from "./components/screens/home/Home";
import { Routes, Route} from "react-router-dom";
import ClothesItemDetail from "./components/screens/home/ClothesItemDetail/ClothesItemDetail";

function App() {
    return ( 
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/clothe/:id" element={<ClothesItemDetail />}/>
            </Routes>
        </>
     );
}

export default App;