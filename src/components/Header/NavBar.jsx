import React from "react";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";
import { NavData } from "./navbar.data";

function NavBar() {
    return (
        <div className='hidden md:flex items-center space-x-12 justify-between ml-2 mr-40 text-white whitespace-nowrap uppercase text-[1.3vw] xl:text-[1.2vw]'>
            {
                NavData.map(item =>  
                    <Link
                        to={item.link}
                        >
                        <NavBarItem text={item.text} link={item.link} key={item.link}/>
                    </Link> )
            }
        </div>
    );
}

export default NavBar;