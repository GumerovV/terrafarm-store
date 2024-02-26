import React from "react";
import {Modal, Flowbite} from "flowbite-react"
import Button from "../Button";
import EywaMini_full_stack_dub from "../../assets/EywaMini/dub/full_stack.webp";
import S1 from "../../assets/Eiva/S1.JPG";
import city2 from "../../assets/EivaCity/city2.jpg";
import ProductCard from "../ProductCard";

function OrderModal({show, onHide}) {
    const customTheme = {
        modal: {
            content: {
                base: 'flex items-center h-full w-full p-4 md:h-auto overflow-y-auto',
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

    const close = (e) => {
        e.preventDefault()
        onHide()
    }
    const productsEiva = [
        {
            "id": 1,
            "name": "Eywa Mini",
            "img": EywaMini_full_stack_dub,
            "text": "Eywa Mini topwargwergerw gesrthgser thsrtehrtshsrtyh tsryhtsryh"
        },
        {
            "id": 2,
            "name": "Eywa Standart",
            "img": S1,
            "text": "Eywa Mini top"
        },
        {
            "id": 3,
            "name": "Eywa City",
            "img": city2,
            "text": "Eywa Mini top"
        }
    ]
    const hrefClass = 'text-btn hover:opacity-70 transition-all'

    return (
        <Flowbite theme={{theme: customTheme}}>
            <Modal show={show} onClose={onHide} content="base" he>
                <Modal.Header className="bg-bg">
                    <p className="text-white">Оформление заказа</p>
                </Modal.Header>
                <Modal.Body className="bg-bg">
                    {
                        productsEiva.map(product => (
                            <ProductCard item={product}/>
                        ))
                    }
                </Modal.Body>
                <Modal.Footer className="w-full flex justify-center bg-bg">
                    <Button text={"Оформить"}
                            tSize="text-lg"
                            handler={close}/>
                </Modal.Footer>
            </Modal>
        </Flowbite>
    );
}

export default OrderModal;