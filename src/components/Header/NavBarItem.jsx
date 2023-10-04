function NavBarItem({ text }) {
    return (
        <a className='cursor-pointer font-thin hover:text-[#84A07C] transition-colors' href='/'>{text}</a>
    );
}

export default NavBarItem;