import React, {useContext, useEffect, useState} from "react";
import {Modal, Flowbite} from "flowbite-react"
import {useForm} from "react-hook-form";
import FieldPhone from "../../ui/form-field/FieldPhone";
import Field from "../../ui/form-field/Field";
import Button from "../../ui/button/Button";
import {errorCatch} from "../../utils/api";
import {Context} from "../../index";
import {create} from "axios";
import {createNoAuthOrder, createOrder} from "../../api/orderAPI";
import {toJS} from "mobx";
import {getProfile} from "../../api/userAPI";
import {observer} from "mobx-react-lite";

const BasketModal = observer(({show, onHide})=>{
    const {user, basket} = useContext(Context)
    useEffect(() => {
        getProfile().then((data)=> user.setInfo(data))
    }, []);

    const [error, setError] = useState('')
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

    const close = (e) => {
        e.preventDefault()
        onHide()

    }
    async function handleSubmitForm(data)
    {
        try {
            data = {...data, number: data.number.replace(/[-()]/g, '')}
            const devices = basket.devices.map((item) =>({
                id: item.product.id,
                count: item.count,
                color: item.color,
            }))
            user.isAuth?
            await createOrder(data)
            :
            await createNoAuthOrder(devices,data)
            setError('')
            basket.loadBasket([])
            onHide()

        }
        catch (e){
            console.log(data)
            setError(errorCatch(e))
        }
    }

    const hrefClass = 'text-btn hover:opacity-70 transition-all'
    const { register: profileForm, handleSubmit, formState: {errors} } = useForm({mode: 'onChange'})


    return (
        <Flowbite theme={{theme: customTheme}}> <Modal show={show} onClose={onHide} content="base" he> <Modal.Header
            className="bg-bg"><p className="text-white">Оформление заказа</p></Modal.Header> <Modal.Body
            className="bg-bg">
            <div className="space-y-6 text-white">
                <p className="text-base leading-relaxed"> Заполните все поля для успешного оформления заказа </p>
                <form className="flex flex-col" onSubmit={handleSubmit(handleSubmitForm)} id="ModalForm" >
                    <Field
                        {...profileForm('name', {
                            required: 'Имя обязателено!',
                        })}
                        error={errors.name}
                        type='text'
                        placeholder='Имя'
                        defaultValue={user.info.name}
                    />
                    <Field
                        {...profileForm('surname', {
                            required: 'Фамилия обязательна!',
                        })}
                        error={errors.surname}
                        type='text'
                        placeholder='Фамилия'
                        defaultValue={user.info.surname}
                    />
                    <Field
                        {...profileForm('country', {
                            required: 'Страна обязательна!',
                        })}
                        error={errors.country}
                        type='text'
                        placeholder='Страна'
                        defaultValue={user.info.country}
                    />
                    <Field
                        {...profileForm('city', {
                            required: 'Город/Село обязателено!',
                        })}
                        error={errors.city}
                        type='text'
                        placeholder='Город/Село'
                        defaultValue={user.info.city}
                    />
                    <Field
                        {...profileForm('street', {
                            required: 'Улица обязательна!',
                        })}
                        error={errors.street}
                        type='text'
                        placeholder='Улица'
                        defaultValue={user.info.street}
                    />
                    <Field
                        {...profileForm('building', {
                            required: 'Дом обязателен!',
                        })}
                        error={errors.building}
                        type='text'
                        placeholder='Дом'
                        defaultValue={user.info.building}
                    />
                    <Field
                        {...profileForm('apartment', {
                            required: 'Квартира обязательна!',
                        })}
                        error={errors.apartment}
                        type='text'
                        placeholder='Квартира'
                        defaultValue={user.info.apartment}
                    />
                    <FieldPhone
                        {...profileForm('number', {
                            required: 'Телефон обязателен!',
                        })}
                        error={errors.number}
                        type='text'
                        placeholder='Телефон'
                        defaultValue={user.info.number ? user.info.number.slice(2) : ''}
                    />

                </form>
            </div>
        </Modal.Body> <Modal.Footer className="w-full flex flex-col justify-center bg-bg">
            <Button type="submit" form="ModalForm" className="px-7" handler={close}>Оформить</Button>
            <p className="text-center text-red-700 font-light text-[0.85rem] md:text-lg">{error}</p>
        </Modal.Footer> </Modal> </Flowbite>
    );
})

export default BasketModal;