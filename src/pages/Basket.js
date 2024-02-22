import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import BasketItem from '../components/BasketItem';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Flowbite } from 'flowbite-react'
import { getBasket } from '../api/basketAPI';
import ClassicSpinner from '../ui/spinner/Spinner';
import { toJS } from 'mobx';

const customTheme = {
    button: {
        color: {
          primary: 'bg-btn transition-all',
        },
    }
}

const Basket = observer(() => {
    const {user, basket} = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(user.isAuth){
            basket.loadBasket([])
            getBasket().then(data => basket.loadBasket(data.products)).finally(() => setIsLoading(false))
        }
        else{
            setIsLoading(false)
        }
    }, [])

    if(isLoading) return <ClassicSpinner />

    console.log(toJS(basket.devices))

    return (  
        <div className="px-4 md:mx-10 xl:mx-11">
            <h1 className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5">Корзина</h1>
            <hr className="mx-auto text-center color-white mb-10"/>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                {basket.devices.length ?
                    <div className='md:col-span-2 felx flex-cols items-center justify-center space-y-4'>
                        {basket.devices.map(device => <BasketItem device={device} key={device.id}/>)}     
                    </div>
                    :
                    <div className='md:col-span-2 flex flex-col items-center justify-center'>
                        <p className="text-2xl text-white font-bold">Пока пусто</p>
                        <p className="text-lg text-white mt-1">Воспользуйтесь <NavLink className="font-medium text-btn hover:underline transition-all" to='/products'>каталогом</NavLink></p>
                    </div>
                }
                <div className='bg-zinc-800 rounded-lg shadow-xl p-4 text-white sm:h-[300px]'>
                    <h2 className='text-3xl text-white font-normal text-center'>Условия заказа</h2>
                    <hr></hr>
                    <p className="text-xs mt-10">Итого:</p>
                    <div className="flex justify-between font-bold text-sm">
                        <p>Количество товаров: {basket.getTotalCount()}</p>
                        <p>{basket.getTotalPrice().toLocaleString('ru', {style: 'currency', currency: 'RUB'})}</p>
                    </div>
                    <Flowbite theme={{theme: customTheme}}>
                        <Button
                            color='primary'
                            disabled={basket.getTotalCount() === 0}
                            className={`bg-btn w-full mt-10 py-4 text-xl font-bold ${basket.getTotalCount() !== 0 ? 'hover:opacity-90' : ''} transition-all`}
                        >
                                Перейти к оформлению
                        </Button>
                    </Flowbite>
                </div>
            </div>
        </div>
    );
})

export default Basket;