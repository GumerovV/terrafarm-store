import React from "react";
import asi from '../../assets/photo_asi.webp';
import fsi from '../../assets/fsi.webp';

function Partners() {
    return (
        <div className="hidden md:block md:w-[40%]">
            <div className="flex justify-between items-center">
                <div className="w-full">
                    <img src={asi} width="300px" alt=""/>
                </div>
                <div className="w-full">
                    <img src={fsi} alt=""/>
                </div>
            </div>
            <div className="text-[3vw] md:text-[1.5vw] text-center">ПРИ ПОДДЕРЖКЕ ФОНДА СОДЕЙСТВИЯ ИННОВАЦИЯМ, АГЕНСТВА СТРАТЕГИЧЕСКИХ ИНИЦИАТИВ И ФОНДА СКОЛКОВО</div>  
        </div>
    );
}

export default Partners;