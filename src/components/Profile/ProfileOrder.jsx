import {Flowbite, Table, Dropdown} from 'flowbite-react';
import OrderModal from "../Modal/OrderModal";
import React, {useContext, useEffect, useState} from "react";
import {getAllOrders, getAllUserOrders} from "../../api/orderAPI";
import ClassicSpinner from "../../ui/spinner/Spinner";
import {Context} from "../../index";


function ProfileOrder() {
    const {user} = useContext(Context)
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
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentOrder, setCurrentOrder] = useState({})
    const [searchTerm, setSearchTerm] = useState('')



    useEffect(() => {
        {user.role==="USER"?
            getAllUserOrders().then((data)=>setOrders(data)).finally(() => setIsLoading(false))
            :
            getAllOrders().then((data)=>setOrders(data)).finally(() => setIsLoading(false))
        }
    }, []);

    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [searchTerm]);

    const fetchData = () => {
        if (user.role === "USER") {
            getAllUserOrders(searchTerm)
                .then((data) => setOrders(data))
                .finally(() => setIsLoading(false));
        } else {
            getAllOrders(searchTerm)
                .then((data) => setOrders(data))
                .finally(() => setIsLoading(false));
        }
    };

    function getOderPrice (products){
        return products.reduce((acc,item)=>{
            return acc+item.count * item.product.price
        }, 0)
    }
    const modalClickHandle = (order) => {
        setCurrentOrder(order)
        setShowModel(true)
    }
    if(isLoading) return <ClassicSpinner />
    return (
        <>
            <Flowbite theme={{theme: customTheme}}>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Номер заказа</Table.HeadCell>
                        <Table.HeadCell>Сумма</Table.HeadCell>
                        <Table.HeadCell>Дата (UTC +0)</Table.HeadCell>
                        <Table.HeadCell>
                            <Dropdown className="border-none bg-gradientTo text-white" label={"СТАТУС"} inline >
                                <Dropdown.Item className="text-white focus:bg-bg" onClick={()=>setSearchTerm("RECEIVED")}>Отправлен</Dropdown.Item>
                                <Dropdown.Item className="text-white focus:bg-bg" onClick={()=>setSearchTerm("PROCESS")}>Оформляется</Dropdown.Item>
                                <Dropdown.Item className="text-white focus:bg-bg" onClick={()=>setSearchTerm("")}>Все</Dropdown.Item>
                            </Dropdown>
                        </Table.HeadCell>
                        <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {orders.map((item=>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
                                    <Table.Cell className="whitespace-nowrap font-medium text-white dark:text-white ">
                                        №{item.id}
                                    </Table.Cell>
                                    <Table.Cell>{getOderPrice(item.products).toLocaleString('ru', {style: 'currency', currency: 'RUB'})}</Table.Cell>
                                    <Table.Cell>{item.updatedAt.replace(/[a-zA-Z]/g, ' ').slice(0,16)}</Table.Cell>
                                    <Table.Cell className={`${item.status === "PROCESS" ? "text-yellow-400":"text-green-400" }`} >{item.status === "PROCESS"? "Оформляется" : "Отправлен" }</Table.Cell>
                                    <Table.Cell>
                                        <a href="#" className="font-medium text-btn hover:underline dark:text-cyan-500" onClick={()=>modalClickHandle(item)}>
                                            Подробнее
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <OrderModal show={showModel} onHide={() => setShowModel(false)} order={currentOrder} total={getOderPrice} fetchData={fetchData}/>
            </Flowbite>
        </>
    );
}
export default ProfileOrder;