import React, { useState } from "react";
import { useMemo } from "react";
import { clothesData } from "./helper/clothesData";
import ClothesItem from "./ClothesItem/ClothesItem";
import CreateClothesForm from "./CreateClothesForm/CreateClothesForm";



function Home() {
  const [filter, setFilter] = useState([])
  const filtredClothes = useMemo(() => clothesData.filter(clothes => {

    if (filter[0] === '' && filter[1] === '') return clothesData

    if (filter[0] && filter[1])
        return clothes.price <= filter[0] && clothes.type.toUpperCase() === filter[1].toUpperCase()   

    return filter[0] ? clothes.price <= filter[0] : filter[1] ? clothes.type.toUpperCase() === filter[1].toUpperCase() : clothesData

    }), [filter]);

  return (
    <div className="Home">
    <h1>Clothes catalog</h1>
    <CreateClothesForm setFilter={setFilter}/>
    <div className="items">
        {filtredClothes.length ? (filtredClothes.map(clothes => (
            <ClothesItem key={clothes.id} item={clothes} />
        ))
        ) : ( 
        <p>There are no clothes...</p>
        )}
    </div>
    </div>
  );
}

export default Home;
