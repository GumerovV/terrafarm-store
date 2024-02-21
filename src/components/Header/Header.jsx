import React, { useContext } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import MenuMobile from './MenuMobile';
import {SlBasket} from "react-icons/sl"
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import NavBarItem from './NavBarItem';

const Header = observer(() => {
    const {user, basket} = useContext(Context)
    const count = basket.getTotalCount()

    return (
        <header className="md:relative bg-gradient-to-r from-gradientTo to-gradientFrom header-shadow w-full h-auto sticky top-0 p-[1%] z-[999]">
            <div className="flex h-full items-center mx-[5%] justify-between">
                <Logo />
                <NavBar />
                <MenuMobile />
                   
                <div className='hidden md:relative md:flex justify-center items-center'>
                    {
                        user.isAuth ? 
                            user.role === 'USER' ? 
                                <Link className='text-[1.3vw] xl:text-[1.2vw] uppercase text-white cursor-pointer font-thin hover:text-[#84A07C] transition-colors py-1 mr-4' to='/profile'>Профиль</Link>
                                :
                                <Link className='text-[1.3vw] xl:text-[1.2vw] uppercase text-white cursor-pointer font-thin hover:text-[#84A07C] transition-colors py-1 mr-4' to='/profile'>Административная панель</Link>
                            :
                            <Link className='text-[1.3vw] xl:text-[1.2vw] uppercase text-white cursor-pointer font-thin hover:text-[#84A07C] transition-colors py-1 mr-4' to='/auth'>Войти</Link>
                    }
                    <Link to='/basket'>
                        <SlBasket className='cursor-pointer opacity-80 hover:opacity-100 transition-all' color='white' size={35}/>
                        {count !== 0 && <span className='absolute -top-1 -right-5 w-7 h-7 text-center font-medium text-xl text-white bg-btn rounded-[100%]'>{count}</span>}
                    </Link>
                </div>
            </div>
        </header>
    );
})

export default Header;