import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { IoTrashOutline } from 'react-icons/io5'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { Context } from "..";
import { addItemCount, deleteFromBasket, lessItemCount } from "../api/basketAPI";

const BasketItem = observer(({ device }) => {
    const {basket} = useContext(Context)
    
    const deleteDevice = async() => {
        basket.deleteDevice(device.id)
        await deleteFromBasket(device.id)
    }

    const addDevice = async() => {
        basket.plusDevice(device.id)
        await addItemCount(device.id)
    }

    const minusDevice = async() => {
        basket.lessDevice(device.id)
        lessItemCount(device.id)
    }

    return (
        <div className="relative bg-zinc-800 rounded-lg p-4 justify-between shadow-xl">
            <div className="absolute top-0 right-0">
                <IoTrashOutline
                    className='m-4 cursor-pointer opacity-80 hover:opacity-100 transition-all' 
                    size={25} 
                    color="white"
                    onClick={() => deleteDevice(device.id)}
                    />
            </div>
            <div className="h-full flex flex-col justify-center items-center sm:flex-row mx-10">
                <div className="w-[200px] h-[200px] sm:w-[100px] sm:h-[100px] overflow-hidden sm:mr-10 select-none">
                    <img src={`${process.env.REACT_APP_URL}/media/${device.product.name}/${device.color}.webp`} alt=""></img>
                </div>
                <div className="flex flex-col space-y-2 items-center justify-center sm:items-start">
                    <h2 className="md:text-3xl text-white">{device.product.name}</h2>
                    <span className="text-white md:text-lg font-thin">Цвет: {device.color}</span>
                </div>
                <div className="flex items-center justify-center sm:ml-auto space-x-4 text-white text-xl">
                    <AiFillMinusCircle 
                        size={30} 
                        className='cursor-pointer opacity-80 hover:opacity-100 transition-all' 
                        color="white"
                        onClick={() => minusDevice()}
                        />
                    <p className="text-3xl select-none">{device.count}</p>
                    <AiFillPlusCircle 
                        size={30} 
                        className='cursor-pointer opacity-80 hover:opacity-100 transition-all' 
                        color="white"
                        onClick={() => addDevice()}
                        />
                </div>
            </div>
        </div>
    );
})

export default BasketItem;