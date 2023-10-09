import React from "react";
import CarouselDefualt from "../components/Carousel/CarouselDefualt";
import  Button  from "../components/Button";

function ProductDetail() {
    return (
        <>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4">
            <div className="h-96 sm:h-[60vw] md:h-[40vw] overflow-hidden">
                    <CarouselDefualt />
            </div>
            <div className="text-xl leading-normal xl:text-3xl text-white xl:leading-10 text-justify font-thin">
                Станция Эйва Q-1 имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. 
                Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. 
                Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. 
                А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. 
                За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.
                <div className="flex justify-center mt-10">
                    <Button text="Купить сейчас" color="bg-btnBlack" padding="p-[3%] pl-[4%] pr-[4%]" tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"/>
                </div>
          </div>
        </div>
        </>
    );
}

export default ProductDetail;