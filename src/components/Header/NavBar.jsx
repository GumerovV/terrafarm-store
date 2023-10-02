function NavBar() {
    return (
        <div className='flex items-center justify-between ml-2 mr-40 text-white whitespace-nowrap uppercase text-[1.3vw]'>
            <a className='cursor-pointer pr-7 font-extralight hover:text-[#84A07C] transition-colors' href='/'>Наши продукты</a>
            <a className='cursor-pointer font-extralight hover:text-[#84A07C] transition-colors' href='/'>О компании</a>
        </div>
    );
}

export default NavBar;