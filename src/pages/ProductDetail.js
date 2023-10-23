import React from "react";
import { useParams } from 'react-router-dom';
import CarouselDefualt from "../components/Carousel/CarouselDefualt";
import  Button  from "../components/Button";
import { products } from "../constants";

function ProductDetail({product = []}) {
    const {id} = useParams()
    console.log(id)
    product = products[id-1]

    return (
        <>
        <h1 className="text-center text-white text-[35px]">{product.name}</h1>
        <hr className="mx-4 md:mx-10 xl:mx-11 mb-10"></hr>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 md:mx-10 xl:mx-11">
            <div className="w-full mx-auto">
                <div className="h-[60vw] sm:h-[60vw] md:h-[40vw] xl:h-[30vw]">
                        <CarouselDefualt images={product.images}/>
                </div>
            </div>
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin">

               {product.disc}

                <div className="flex justify-center mt-10">
                    <Button text="Купить сейчас" color="bg-btnBlack" padding="p-[3%] pl-[4%] pr-[4%]" tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"/>
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
                                <ul className="pl-4">
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
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" a
                        llowfullscreen=""
                        key={index}>
                    </iframe>
                ))}
            </div>
        </div>
        </>
    );
}

export default ProductDetail;