function Button({ text='', padding='p-[2%] pl-[8%] pr-[8%]', color='bg-btn', tSize='text-[1.35vw]', handler}) {
    return (
        <a 
        className={`flex whitespace-nowrap justify-center btn-shadow font-extralight ${color} border-none text-white rounded-[25px] ${tSize} ${padding} items-center cursor-pointer duration-200 hover:opacity-80`}
        href="/"
        onClick={handler}
         >{text}</a>
    );
}

export default Button;