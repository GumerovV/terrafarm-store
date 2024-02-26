import React, { useContext } from "react";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";
import { NavData } from "./navbar.data";
import { SlBasket } from 'react-icons/sl'
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const NavBarMobile = observer(({ setIsOpen }) => {
    const {user, basket} = useContext(Context)
    const count = basket.getTotalCount()

    return (
        <div className='flex items-center justify-center flex-col space-y-10 text-white whitespace-nowrap uppercase text-[5vw]'>
            {
                NavData.map(item =>  
                    <Link to={item.link} onClick={() => setIsOpen(false)}>
                        <NavBarItem text={item.text} key={item.link} />
                    </Link>
                )
            }
            {
                user.isAuth ? 
                    user.role === 'USER' ?
                        <Link to='/profile' onClick={() => setIsOpen(false)}><NavBarItem text='Профиль'/></Link>
                        :
                        <Link to='/profile' onClick={() => setIsOpen(false)}><NavBarItem text='Административная панель'/></Link>
                    :
                    <Link to='/auth' onClick={() => setIsOpen(false)}><NavBarItem text='Войти'/></Link>
            }
            <div className='flex items-center justify-center gap-8'>
                <div className="relative">
                        <SlBasket className='cursor-pointer' color='white' size={35}/>
                        {count !== 0 && <span className='absolute -top-1 -right-5 w-7 h-7 text-center font-medium text-xl text-white bg-btn rounded-[100%]'>{count}</span>}
                </div>
                <Link to='/basket' onClick={() => setIsOpen(false)}>
                    <NavBarItem text={'Корзина'} key={'/basket'} />
                </Link>
            </div>
        </div>
    );
})

export default NavBarMobile;