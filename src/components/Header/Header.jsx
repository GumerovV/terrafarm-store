import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import MenuMobile from './MenuMobile';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState('')

    return (
        <header className="md:relative bg-gradient-to-r from-gradientTo to-gradientFrom header-shadow w-full h-auto sticky top-0 p-[1%] z-[999]">
            <div className="flex h-full items-center mx-[5%] justify-between">
                <Logo setActive={setActive}/>
                <NavBar active={active} setActive={setActive}/>
                <MenuMobile />
            </div>
        </header>
    );
}

export default Header;