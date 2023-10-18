import React from "react";
import asi from '../../assets/photo_asi.webp';
import fsi from '../../assets/fsi.webp';
import skolkovo from '../../assets/skolkovo.png';

function Partners() {
    return (
        <div className="hidden md:block md:w-[40%]">
            <div className="text-[3vw] md:text-[1.5vw] text-center">ПАРТНЕРЫ</div>  
            <div className="flex space-x-10 items-center mt-4">
                <div className="w-full">
                    <img src={asi} width="300px" alt=""/>
                </div>
                <div className="w-[80%]">
                    <img src={skolkovo} alt=""/>
                </div>
                <div className="w-full">
                    <img src={fsi} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Partners;