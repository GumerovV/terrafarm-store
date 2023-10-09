import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import MenuMobile from './MenuMobile';

function Header() {
    return (
        <header className="md:relative bg-gradient-to-r from-gradientTo to-gradientFrom header-shadow w-full h-auto sticky top-0 p-[1%] z-[999]">
            <div className="flex h-full items-center mx-[5%] justify-between">
                <Logo />
                <NavBar />
                <MenuMobile />
            </div>
        </header>
    );
}

export default Header;