import React from "react";
import vk from '../../assets/vk.webp';
import yt from '../../assets/youtube.webp';
import tg from '../../assets/telegram.webp';

var socials = [{
        'id': 1,
        'name': "VK",
        'img': vk
    },
    {
        'id': 2,
        'name': "YouTube",
        'img': yt
    },
    {
        'id': 3,
        'name': "Telegram",
        'img': tg
    }
]

function Social() {
    return (
        <div className="w-[15%]">
            <div class="text-[1.4vw] uppercase">Мы в соцсетях</div>
            <div className="mt-[8%]">
                     {
                    socials.map(item => (
                        <div className="flex items-center mb-2">
                        <img src={item.img} className="" alt="" width="25px"/>
                        <a className="ml-[3%] text-white text-[1.1vw] cursor-pointer hover:text-btn transition-colors" href="https://vk.com/terrafarm">{item.name}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Social;