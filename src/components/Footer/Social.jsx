import React from "react";
import { socials } from "../../constants";


function Social() {
    return (
        <div>
            <div className="text-[3.4vw] md:text-[1.4vw] uppercase">Мы в соцсетях</div>
            <div className="mt-[8%]">
                     {
                    socials.map(item => (
                        <>
                        <div className={`${item.id === 3 ? '' : 'mb-2'} flex items-center`} key={item.id}>
                        <img src={item.img} className="" alt="" width="25px"/>
                        <a className="ml-[3%] text-white text-[3vw] md:text-[1.1vw] cursor-pointer hover:text-btn transition-colors" href="https://vk.com/terrafarm">{item.name}</a>
                        </div>
                        {item.id === 3 && <p className="block pl-8 font-thin text-[2.5vw] sm:text-[2vw] md:text-[1vw] xl:text-[.9vw]">(Запрещено на территории РФ)</p>}
                        </>
                    ))
                }
            </div>
        </div>
    );
}

export default Social;