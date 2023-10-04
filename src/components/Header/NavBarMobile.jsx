import React from "react";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";

function NavBarMobile({ setIsOpen }) {
    return (
        <div className='flex items-center justify-center flex-col space-y-10 text-white whitespace-nowrap uppercase text-[5vw]'>
            <Link to={'/products'} onClick={() => setIsOpen(false)}>
                <NavBarItem text={'Наши продукты'}/>
            </Link>
            <Link to={'/company'} onClick={() => setIsOpen(false)}>
                <NavBarItem text={'О компании'}/>
            </Link>
        </div>
    );
}

export default NavBarMobile;