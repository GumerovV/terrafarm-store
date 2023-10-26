import React from "react";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";

function NavBar({active, setActive}) {
    return (
        <div className='hidden md:flex items-center space-x-12 justify-between ml-2 mr-40 text-white whitespace-nowrap uppercase text-[1.3vw] xl:text-[1.2vw]'>
            <Link
             to={'/products'}
             onClick={() => setActive('Наши продукты')}
             >
                <NavBarItem text={'Наши продукты'} active={active}/>
            </Link> 
            <Link
             to={'/company'}
             onClick={() => setActive('О компании')}
             >
                <NavBarItem text={'О компании'} active={active}/>
            </Link>
        </div>
    );
}

export default NavBar;