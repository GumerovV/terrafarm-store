import React, {useContext, useState} from "react";
import {Modal, Flowbite} from "flowbite-react"
import Button from "../Button";
import {Context} from "../../index";
import {processOrder} from "../../api/orderAPI";
import {errorCatch} from "../../utils/api";


function OrderModal({show, onHide, order, total, fetchData}) {
    const {user} = useContext(Context)
    const customTheme = {
        modal: {
            content: {
                base: 'flex items-center h-full p-4 md:h-auto overflow-y-auto',
                inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[70vh]',
            },
            header: {
                close: {
                    base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
                    icon: 'h-5 w-5',
                }
            }
        }
    }

    const [error, setError] = useState('')

    const close = (e) => {
        e.preventDefault()
        onHide()
    }

    async function process(e){
        e.preventDefault()
        try {
            await processOrder(order.id)
            fetchData()
            setError('')
            onHide()
        }
        catch (e){
            setError(errorCatch(e))
        }
    }

    const hrefClass = 'text-btn hover:opacity-70 transition-all'

    return (
        <Flowbite theme={{theme: customTheme}}>
            <Modal show={show} onClose={onHide} content="base" he>
                <Modal.Header className="bg-bg">
                    <h1 className="text-white font-semibold text-3xl text-center">Заказ № {order.id}</h1>
                </Modal.Header>
                <Modal.Body className="bg-bg text-white">
                    <h2 className="text-2xl font-bold mb-5 text-center">Товары</h2>
                    <div className="text-lg font-thin">
                        {
                            order && order.products ?
                                order.products.map((item) =>
                                    <div className="grid grid-cols-5 justify-between gap-5 text-center mb-5">
                                        <p className="text-start col-span-2 font-semibold">{item.product.name}</p>
                                        <p className="text-start italic">{item.color}</p>
                                        <p>{item.count} шт.</p>
                                        <p>{item.product.price.toLocaleString('ru', {style: 'currency', currency: 'RUB'})}</p>
                                    </div>
                                )
                                : null
                        }
                        <div className="flex items-end justify-end h-full ">
                            <p className="mr-1 font-bold">Итог </p>
                            <p>{ order && order.products ? total(order.products).toLocaleString('ru', {style: 'currency', currency: 'RUB'}) : null}</p>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-3 mb-5 text-center">Заявка</h2>
                    {
                        order && order.info ?
                            <div className="text-lg ml-2 space-y-1">
                                <p>Имя: {order.info.name}</p>
                                <p>Фамилия: {order.info.surname}</p>
                                <p>Страна: {order.info.country}</p>
                                <p>Город: {order.info.city}</p>
                                <p>Улица: {order.info.street}</p>
                                <p>Дом: {order.info.building}</p>
                                <p>Квартира: {order.info.apartment}</p>
                                <p>Номер: {order.info.number}</p>
                            </div>
                            :
                            null
                    }
                </Modal.Body>
                <Modal.Footer className="w-full flex flex-col justify-center bg-bg">
                    { user.role==="ADMIN"?
                        <Button text={"Оформить"}
                                tSize="text-lg"
                                handler={process}/>
                        :
                        <Button text={"Закрыть"}
                             tSize="text-lg"
                             handler={close}/>
                    }
                    <p className="text-center text-red-700 font-light text-[0.85rem] md:text-lg">{error}</p>
                </Modal.Footer>
            </Modal>
        </Flowbite>
    );
}

export default OrderModal;