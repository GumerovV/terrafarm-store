import React from "react";
import { Modal, Flowbite } from "flowbite-react"
import Button from "../Button";

function BasketModal({show, onHide}) {
    const customTheme = {
        modal:{
            content:{
                base: 'flex items-center h-full w-full p-4 md:h-auto',
                inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]',
            },
            header:{
                close:{
                    base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
                    icon: 'h-5 w-5',                }
            }
        }
    }
    const close = (e) => {
        e.preventDefault()
        onHide()
    }
    return ( 
        <Flowbite theme={{ theme: customTheme }}>
            <Modal show={show} onClose={onHide} content="base" he>
            <Modal.Header className="bg-bg"><p className="text-white">Корзина в разработке</p></Modal.Header>
            <Modal.Body className="bg-bg">
            <div className="space-y-6 text-white">
                <p className="text-base leading-relaxed">
                В данный момент все заказы обрабатываются следующим образом:
                </p>
                <ul className="a whitespace-pre space-y-4">
                    <li>1.   Можно написать на почту...</li>
                    <li>2.   Можно написать в группу вконтакте...</li>
                    <li>3.   Связаться по телефону ...</li>
                </ul>
                <p className="text-center">Спасибо за понимание!</p>
            </div>
            </Modal.Body>
            <Modal.Footer className="w-full flex justify-center bg-bg">
            <Button
                        text={"Понятно"}
                        tSize="text-lg"
                        handler={close}
                        />
            </Modal.Footer>
        </Modal>
      </Flowbite>
    );
}

export default BasketModal;