import React from "react";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='hidden md:flex items-center space-x-12 justify-between ml-2 mr-40 text-white whitespace-nowrap uppercase text-[1.3vw] xl:text-[1.2vw]'>
            <Link to={'/products'}>
                <NavBarItem text={'Наши продукты'}/>
            </Link>
            <Link to={'/company'}>
                <NavBarItem text={'О компании'}/>
            </Link>
        </div>
    );
}

export default NavBar;