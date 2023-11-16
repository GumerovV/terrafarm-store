import React, { useState } from "react";
import Button from "../components/Button";
import PotImage from "../assets/station-eywa.jpg";
import infoLine from '../assets/infoLine.webp';
import modernDesign from '../assets/modernDesign.JPG';
import stationSmog from '../assets/station_smog.jpg';
import BasketModal from "../components/Modal/BasketModal";

function Home({contacts}) {

  const [showModel, setShowModel] = useState(false)

  const modalClickHandle = (e) => {
    e.preventDefault()
    setShowModel(true)
  }

  const scrollHandle = (e) => {
    e.preventDefault()
    contacts.current.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

    return (
      <>
        <div className="flex w-full flex-col items-center px-4 md:px-10 md:flex-row md:items-start md:space-x-10 h-auto text-white mb-10 md:mb-0">
          <div className="w-auto md:w-2/4  md:mx-10 md:my-10 ">
            <div className="font-medium text-center md:text-left text-[10vw] sm:text-[6vw] md:text-[4vw] leading-[1.2] text-balance whitespace-pre-line">{"Будущее в\n каждый дом"}</div>
              <div className="font-extralight text-center md:text-left text-[5vw] sm:text-[4vw] md:text-[1.3vw] leading-[1.2] mt-[3%] text-balance">Производство интелектуальных декоративных устройств по уходу за растениями по России и СНГ</div>
                <div className="flex mb-2 mt-[5%] md:mt-[10%] items-center justify-center md:justify-start space-x-5">
                  <Button text={"Связаться с нами"} color="bg-btnBlack" padding="p-[1%] pl-[4%] pr-[4%]" tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]" handler={scrollHandle}/>
                  <Button
                    text={"Купить"}
                    tSize="text-10xl sm:text-[2.5vw] md:text-[1.3vw]"
                    handler={modalClickHandle}
                    />
                </div>
          </div>
          <div className="flex items-center w-full justify-center mt-5 md:mt-0 md:justify-start md:w-1/2">
            <img src={PotImage} alt=""/>
          </div>
        </div>

        <div className="hidden md:flex justify-center mx-10 my-[5%]">
          <img src={infoLine} alt="" width={'2500px'}/>
        </div>

        <div className="flex w-full flex-col items-center px-4 md:px-10 md:flex-row md:items-start md:space-x-10 h-auto text-white mb-10">
          <div className="flex items-center w-full justify-center mt-5 md:mt-0 md:justify-start md:w-1/2 order-2 md:order-1">
            <img src={stationSmog} alt=""/>
          </div>
          <div className="w-auto md:mx-10 md:my-10 md:w-2/4 md:pl-[10%] order-1 md:order-2">
            <div className="font-medium text-center md:text-left text-[10vw] sm:text-[6vw] md:text-[4vw] leading-[1.2] text-balance whitespace-pre-line">{"Широкий\n функционал"}</div>
            <div className="font-extralight text-center md:text-left text-[5vw] sm:text-[4vw] md:text-[1.3vw] leading-[1.2] mt-[3%] text-balance">Автоматический полив, увлажнение воздуха, мобильное приложение и много чего еще</div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center px-4 md:px-10 md:flex-row md:items-start md:space-x-10 h-auto text-white mb-10">
          <div className="w-auto md:mx-10 md:my-10 md:w-2/4 order-1 md:order-1">
            <div className="font-medium text-center md:text-left text-[10vw] sm:text-[6vw] md:text-[4vw] leading-[1.2] text-balance whitespace-pre-line">{"Современный\n дизайн"}</div>
            <div className="font-extralight text-center md:text-left text-[5vw] sm:text-[4vw] md:text-[1.3vw] leading-[1.2] mt-[3%] text-balance">Наши устройства гармонично впишутся в любой интерьер вашего офиса, дома или кафе</div>
          </div>
          <div className="flex items-center w-full justify-center mt-5 md:mt-0 md:justify-start md:w-1/2 order-2 md:order-2">
            <img src={modernDesign} alt=""/>
          </div>
        </div>

        <div className="flex w-full flex-col items-center px-4 md:px-10 md:flex-row md:items-start md:space-x-10 h-auto text-white mb-10 md:mb-0 md:mt-[5%]">
          <div className="flex items-center w-full justify-center mt-5 md:justify-start order-2 md:order-1">
              <iframe 
                className="w-full h-[50vw] md:h-[30vw]"
                width="700px" 
                height="400px" 
                src="https://www.youtube.com/embed/XT9x64wDcAU" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" a
                llowfullscreen="">
              </iframe>
          </div>
          <div className="w-auto md:w-2/4 md:mx-10 md:my-10 order-1 md:order-2">
            <div className="font-medium text-center md:text-left text-[10vw] sm:text-[6vw] md:text-[4vw] leading-[1.2] whitespace-pre-line">{"Вариативность моделей"}</div>
            <div className="font-extralight text-center md:text-left text-[5vw] sm:text-[4vw] md:text-[1.3vw] leading-[1.2] mt-[3%] text-balance">Различные вариации моделей Станции Эйва позволяют расположить ее как в небольшом офисном кабинете, 
            так и в центральном парке современного мегаполиса! 
            Для более подробного знакомства с Эйвой и полной линейкой продукта рекомендуем просмотреть видео.</div>
          </div>
        </div>

        <BasketModal show={showModel} onHide={() => setShowModel(false)}/>
      </>
    );
}

export default Home;