import React from "react";
import logo from '../../assets/logo.webp';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={'/'}>
            <div className="flex w-full items-center cursor-pointer">
                <img src={logo} className="flex w-[8vw] md:w-[8%]" alt="" width="90px"></img>
                <div className='text-[6vw] md:text-[3.8vw] text-white pl-5 pb-[1%] font-black'>TerraFarm</div>
            </div>
        </Link>
    );
}

export default Logo;