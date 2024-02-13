import React, { useContext, useState } from "react";
import MenuIconOpen from '../../assets/icon-menu.svg';
import MenuIconClose from '../../assets/icon-close-menu.svg';
import NavBarMobile from "./NavBarMobile";
import { Context } from "../..";

function MenuMobile() {
    const {basket} = useContext(Context)
    const count = basket.getTotalCount()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className="relative flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? <img src={MenuIconClose} alt='' className='flex relative md:hidden w-[7vw] cursor-pointer z-30'/> 
                : 
            <img src={MenuIconOpen} alt='' className='flex relative md:hidden w-[8vw] cursor-pointer z-30'/> 
            }
            {count !== 0 && !isOpen && <span className='absolute -top-4 -right-5 z-40 w-7 h-7 text-center font-medium text-xl text-white bg-btn rounded-[100%]'>{count}</span>}
        </div>
        <div className={`absolute right-0 top-0 w-full truncate bg-gradient-to-r from-gradientTo to-gradientFrom z-20 justify-center h-screen transition-all ${isOpen ? 'flex' : 'hidden'}`}>
            <NavBarMobile setIsOpen={setIsOpen}/>
        </div>
        </>
    );
}

export default MenuMobile;