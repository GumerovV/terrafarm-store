import React from 'react';
import logo from '../assets/logo.webp';

function Header() {
    return (
        <header className="absolute bg-gradient-to-r from-gradientTo to-gradientFrom shadow-xl w-full h-auto py-[1%] z-[999]">
            <div className="flex w-full h-full items-center">
                <div className="flex w-full ml-24 items-center">
                    <img src={logo} className="flex w-[7%]" alt="" width="90px"></img>
                    <div className='text-[3.8vw] text-white pl-5 pb-1 font-black'>TerraFarm</div>
                </div>
                <div className='flex items-center justify-between ml-2 mr-40 text-white whitespace-nowrap uppercase text-[1.3vw]'>
                    <a className='cursor-pointer pr-7 font-extralight hover:text-[#84A07C] transition-colors' href='/'>Наши продукты</a>
                    <a className='cursor-pointer font-extralight hover:text-[#84A07C] transition-colors' href='/'>О компании</a>
                </div>
            </div>
        </header>
    );
}

export default Header;