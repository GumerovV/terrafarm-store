import {Flowbite, Table} from 'flowbite-react';
import BasketModal from "../Modal/OrderModal";
import React, {useState} from "react";

function ProfileOrder() {
    const customTheme = {
        table: {
            root: {
                base: "w-full text-left text-sm text-white dark:text-gray-400 ",
                shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
                wrapper: "relative"
            },
            body: {
                base: "group/body",
                cell: {
                    base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4 bg-zinc-800"
                }
            },
            head: {
                base: "group/head text-xs uppercase text-white dark:text-gray-400 text-sm md:text-xl",
                cell: {
                    base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-zinc-800 dark:bg-gray-700 px-6 py-3"
                }
            },
            row: {
                base: "group/row text-sm md:text-lg",
                hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
                striped: "odd:bg-black even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            }
        }
    }
    const [showModel, setShowModel] = useState(false)
    const modalClickHandle = (e) => {
        e.preventDefault()
        setShowModel(true)
    }
    const orders = [
        { id: 1, orderNumber: '001', status: 'PROCESS', price: '$50', quantity: 3 },
        { id: 2, orderNumber: '002', status: 'RECEIVED', price: '$100', quantity: 5 },
        { id: 3, orderNumber: '003', status: 'Отменен', price: '$25', quantity: 1 },
    ];
    return (
        <>
            <Flowbite theme={{theme: customTheme}}>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Номер заказа</Table.HeadCell>
                        <Table.HeadCell>Количество товаров</Table.HeadCell>
                        <Table.HeadCell>Сумма</Table.HeadCell>
                        <Table.HeadCell>Статус</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {orders.map((item=>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-white dark:text-white">
                                        №{item.id}
                                    </Table.Cell>
                                    <Table.Cell>{item.quantity}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell className={`${item.status === "PROCESS" ? "text-yellow-400":"text-green-400" }`} >{item.status === "PROCESS"? "Оформляется" : "Отправлен" }</Table.Cell>
                                    <Table.Cell>
                                        <a href="#" className="font-medium text-btn hover:underline dark:text-cyan-500" onClick={modalClickHandle}>
                                            Подробнее
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <BasketModal show={showModel} onHide={() => setShowModel(false)} />
            </Flowbite>
        </>
    );
}
export default ProfileOrder;