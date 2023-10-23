import React from "react";
import { socials } from "../../constants";


function Social() {
    return (
        <div>
            <div className="text-[3.4vw] md:text-[1.4vw] uppercase">Мы в соцсетях</div>
            <div className="mt-[8%]">
                     {
                    socials.map(item => (
                        <div className="flex items-center mb-2" key={item.id}>
                        <img src={item.img} className="" alt="" width="25px"/>
                        <a className="ml-[3%] text-white text-[3vw] md:text-[1.1vw] cursor-pointer hover:text-btn transition-colors" href="https://vk.com/terrafarm">{item.name}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Social;