import React from "react";
import logo from '../../assets/logo.webp';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link
         to={'/'}
         >
            <div className="grid grid-cols-6 sm:flex sm:grid-cols-1 w-full items-center cursor-pointer">
                <img src={logo} className="flex w-[10vw] sm:w-[8vw] md:w-[4vw]" alt="" width="90px"></img>
                <div className='text-[10vw] col-span-5  sm:text-6xl md:text-[64px] text-white pl-5 pb-[1%] font-black'>TerraFarm</div>
            </div>
        </Link>
    );
}

export default Logo;