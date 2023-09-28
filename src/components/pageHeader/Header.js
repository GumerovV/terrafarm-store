import React from "react";

function Header() {
    return (  
        <header>
            <nav className="navbar">
            <div className="container">
                <a className="logo" href="/catalog">P R E M I U M</a>

                <div className="navbar-wrap">
                    <ul className="navbar-menu">
                        <li><a href="/catalog">Каталог</a></li>
                        <li><a href="/creat">Создать</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Header;