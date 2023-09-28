import React from "react";
import { useParams } from "react-router-dom";
import { clothesData } from "../helper/clothesData";

function ClothesItemDetail() {
    const { id } = useParams()
    
    
    const item = clothesData.find((item) => {
        return item.id === parseInt(id)
    })
    
    return (  
    <>
    <h1 className="text-center text-4xl font-sans relative mt-10">{item.name}</h1>
    <section className='mx-10 flex justify-center mt-6 flex-row'>
        <div className="relative text-center w-2/4 mt-60">
            <h1 className='text-3xl mt-6 font-sans'>Описание:</h1>
            <p className='text-medium-gray text-2xl my-6'>Тип: { item.type }</p>
            <p className='text-medium-gray text-2xl my-6'>
                Цена: { new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(item.price) }
            </p>
        </div>
        <div className="flex w-2/4 mt-20">
            <img src={ item.url } alt="" width={'500px'} height={'550px'}/>
        </div>
    </section>
    </>
    );
}

export default ClothesItemDetail;