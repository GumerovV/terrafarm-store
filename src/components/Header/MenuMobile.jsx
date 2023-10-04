import React, { useState } from "react";
import MenuIconOpen from '../../assets/icon-menu.svg';
import MenuIconClose from '../../assets/icon-close-menu.svg';
import NavBarMobile from "./NavBarMobile";

function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? <img src={MenuIconClose} alt='' className='flex relative md:hidden w-[7vw] cursor-pointer z-30'/> 
                : 
            <img src={MenuIconOpen} alt='' className='flex relative md:hidden w-[8vw] cursor-pointer z-30'/> }
        </div>
        <div className={`absolute right-0 top-0 w-full bg-gradient-to-r from-gradientTo to-gradientFrom shadow-xl z-20 justify-center h-screen transition-all ${isOpen ? 'flex' : 'hidden'}`}>
            <NavBarMobile setIsOpen={setIsOpen}/>
        </div>
        </>
    );
}

export default MenuMobile;