import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
    return (
        <header className="absolute bg-gradient-to-r from-gradientTo to-gradientFrom shadow-xl w-full h-auto py-[1%] z-[999]">
            <div className="flex w-full h-full items-center">
                <Logo />
                <NavBar />
            </div>
        </header>
    );
}

export default Header;