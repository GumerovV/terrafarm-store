import React from "react";

export const Person = ({person}) =>{

    return (
        <div className="w-[350px] md:w-[400px] rounded-lg">
            <div className="flex flex-col items-center pb-10">
                <img className="w-60 sm:w-40 h-60 sm:h-40 mb-3 rounded-full shadow-lg" src={person.img} alt=""/>
                <h5 className="text-3xl text-center">{person.name}</h5>
                <span className="whitespace-pre text-xl text-center font-thin">{person.content}</span>
            </div>
        </div>
    );
}

