import { useLocation } from "react-router-dom";

function NavBarItem({ text, link }) {
    const {pathname} =  useLocation()
    const active = pathname === link ? true : false
    return (
        <a className={`${active ? 'border-b-[1px] border-border' : ''} first-line:cursor-pointer font-thin hover:text-[#84A07C] transition-colors py-1`} href='/'>{text}</a>
    );
}

export default NavBarItem;