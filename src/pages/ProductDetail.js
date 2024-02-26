import React, { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import CarouselDefualt from "../components/Carousel/CarouselDefualt";
import  Button  from "../components/Button";
import { products } from "../constants";
import BasketModal from "../components/Modal/BasketModal";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { addToBasket } from "../api/basketAPI";

const ProductDetail = observer(({product = []}) => {
    const {id} = useParams()
    product = products[id-1]

    const {basket} = useContext(Context)
    const [showModel, setShowModel] = useState(false)
    const [selectedMaterial, setSelectedMaterial] = useState({name: 'Дуб', images: product.images.materials[0].img})

    const modalClickHandle = (e) => {
        e.preventDefault()
        setShowModel(true)
    }

    const basketBtnHandler = async(e) => {
        e.preventDefault()
        basket.setDevices({product: {...product}, id: product.id + selectedMaterial.name, color: selectedMaterial.name, img: selectedMaterial.images[0]})
        await addToBasket(product.id, {color: selectedMaterial.name})
    }

    return (
        <>
        <h1 className="text-center text-white text-[35px]">{product.name}</h1>
        <hr className="mx-4 md:mx-10 xl:mx-11 mb-10"></hr>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 md:mx-10 xl:mx-11">
            <div className="h-[60vw] sm:h-[60vw] md:h-[40vw] xl:h-[30vw] overflow-hidden">
                    <CarouselDefualt images={selectedMaterial.images}/>
            </div>
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin">
                {product.disc}

                <div className="flex mt-10 space-x-4 h-auto">
                    <h3>Цвет:</h3>
                    {product.images.materials.map((material, index) => 
                        <div className="p-1 cursor-pointer transition-all" key={index}
                        onClick={() => setSelectedMaterial({name: material.name, images: material.img})}>
                            <div className="flex flex-col justify-center items-center">
                                <img className={`${selectedMaterial.name === material.name ? 'border-4' : ''} border-btn rounded-sm w-[40px] h-[40px] hover:scale-110 transition-all`} 
                                     src={material.materialImg} alt=""/>
                                <p className={`${selectedMaterial.name === material.name ? 'text-btn' : ''} flex justify-center mt-1 text-sm`}>{material.name}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
                    <Button
                    text="Купить сейчас"
                    color="bg-btnBlack"
                    padding="p-4"
                    tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"
                    handler={modalClickHandle}
                    />
                    {
                        basket.devices.some(item => item.product.id === product.id && item.color === selectedMaterial.name) ?
                        <Button
                            text="В корзине"
                            color="bg-btnBlack opacity-80"
                            padding="p-4"
                            tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"
                            handler={(e) => e.preventDefault()}
                        />
                        :
                        <Button
                            text="В корзину"
                            color="bg-btnBlack"
                            padding="p-4"
                            tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"
                            handler={basketBtnHandler}
                    />
                    }
                </div>
            </div>
        </div>
        <h1 className="text-center text-white text-[35px] mt-28">Характеристики</h1>
        <hr className="mx-4 md:mx-10 xl:mx-11 mb-10"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white px-10">
            <div className="text-2xl">
                <div className="mb-20">
                    {
                        product.characteristic.map((item, index) => (
                            <div className="mb-20" key={index}>
                                <h2 className="text-3xl mb-4 text-center md:text-start">{item.name}</h2>
                                <ul className="text-left md:pl-4 space-y-2">
                                {
                                    item.items.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="block items-center space-y-10">
               { product.videos.map((video, index) => (
                <iframe 
                        className="w-full h-[50vw] md:h-[30vw]"
                        width="700px" 
                        height="400px" 
                        src={video}
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
                        key={index}>
                    </iframe>
                ))}
            </div>
        </div>
        <BasketModal show={showModel} onHide={() => setShowModel(false)} />
        </>
    );
})

export default ProductDetail;