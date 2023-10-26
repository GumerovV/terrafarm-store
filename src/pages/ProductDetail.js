import React from "react";
import CarouselDefualt from "../components/Carousel/CarouselDefualt";
import  Button  from "../components/Button";


const products = [
    {
        "id": 1,
        "name": "Станция Эйва Mini",
        "desc": "Станция Эйва Mini имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий.Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            "Функционал", "- Автополив", "- Туман", "- Веб-интерфейс", "- Интерактивный логотип", "- Датчики температуры",
        ]
    }
]

function ProductDetail() {
    return (
    <div>
        <h1 className="text-center text-white text-[35px]">Станция Эйва Mini</h1>
        <hr className="mx-4 md:mx-10 xl:mx-11 mb-10"></hr>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 md:mx-10 xl:mx-11">
            <div className="h-[60vw] sm:h-[60vw] md:h-[40vw] xl:h-[30vw] overflow-hidden">
                    <CarouselDefualt />
            </div> 
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin">
            Станция Эйва Mini имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий.
            Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер.
            Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха.
            А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. 
            За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.
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
                    <h2 className="text-3xl mb-4 text-center md:text-start">Функционал:</h2>
                    <ul className="pl-4">
                        <li>- Автополив</li>
                        <li>- Туман</li>
                        <li>- Веб-интерфейс</li>
                        <li>- Интерактивный логотип</li>
                        <li>- Датчики температуры</li>
                    </ul>
                </div>
                <div className="mb-20">
                    <h2 className="text-3xl mb-4 text-center md:text-start">Технические характеристики:</h2>
                    <ul className="pl-4">
                        <li>- Габариты устройства: 285x180x180 мм</li>
                        <li>- Масса станции: 1.3 кг</li>
                        <li>- Веб-интерфейс</li>
                        <li>- Интерактивный логотип</li>
                        <li>- Датчики температуры</li>
                    </ul>
                </div>
                <div className="mb-20">
                    <h2 className="text-3xl mb-4 text-center md:text-start">Условия эксплуатации:</h2>
                    <ul className="pl-4">
                        <li>- Температура: 10-30 °C</li>
                        <li>- Влажность: 70%</li>
                    </ul>
                </div>
            </div>
            <div className="block items-center space-y-10">
                <iframe 
                    className="w-full h-[50vw] md:h-[30vw]"
                    width="700px" 
                    height="400px" 
                    src="https://www.youtube.com/embed/YNstjSvrsPw" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" a
                    llowfullscreen="">
                </iframe>
                <iframe 
                    className="w-full h-[50vw] md:h-[30vw]"
                    width="700px" 
                    height="400px" 
                    src="https://www.youtube.com/embed/rUNovkiVOdE" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" a
                    llowfullscreen="">
                </iframe>
            </div>
        </div>
    </div>
    );
}

export default ProductDetail;