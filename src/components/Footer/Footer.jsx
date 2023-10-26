import React from "react";
import Contacts from "./Contacts";
import Partners from "./Partners";
import Social from "./Social";

function Footer({scroll}) {
    return (
        <footer className="absolute w-full bg-gradient-to-r from-gradientTo to-gradientFrom shadow-xl mt-auto text-white font-extralight h-auto p-[4%]">
            <div className="flex justify-between">
                <Contacts scroll={scroll}/>
                <Partners />
                <Social />
            </div>
            
        </footer>
    );
}

export default Footer;