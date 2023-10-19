function NavBarItem({ text, active }) {
    return (
        <a className={`${active === text ? 'border-b-[1px] border-border' : ''} first-line:cursor-pointer font-thin hover:text-[#84A07C] transition-colors py-1`} href='/'>{text}</a>
    );
}

export default NavBarItem;