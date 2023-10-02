import React from "react";
import logo from '../../assets/logo.webp';

function Logo() {
    return (
        <div className="flex w-full ml-24 items-center">
            <img src={logo} className="flex w-[8%]" alt="" width="90px"></img>
            <div className='text-[3.8vw] text-white pl-5 pb-1 font-black'>TerraFarm</div>
        </div>
    );
}

export default Logo;