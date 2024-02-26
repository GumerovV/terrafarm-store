import React from "react";
import {Modal, Flowbite} from "flowbite-react"
import {useForm} from "react-hook-form";
import FieldPhone from "../../ui/form-field/FieldPhone";
import Field from "../../ui/form-field/Field";
import Button from "../../ui/button/Button";

function BasketModal({show, onHide}) {
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
    function handleSubmitForm(data) { console.log(data); }

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
                        placeholder='Имя'/>
                    <Field
                        {...profileForm('surname', {
                            required: 'Фамилия обязательна!',
                        })}
                        error={errors.surname}
                        type='text'
                        placeholder='Фамилия'/>
                    <Field
                        {...profileForm('country', {
                            required: 'Страна обязательна!',
                        })}
                        error={errors.country}
                        type='text'
                        placeholder='Страна'/>
                    <Field
                        {...profileForm('city', {
                            required: 'Город/Село обязателено!',
                        })}
                        error={errors.city}
                        type='text'
                        placeholder='Город/Село'/>
                    <Field
                        {...profileForm('street', {
                            required: 'Улица обязательна!',
                        })}
                        error={errors.street}
                        type='text'
                        placeholder='Улица'/>
                    <Field
                        {...profileForm('house', {
                            required: 'Дом обязателен!',
                        })}
                        error={errors.house}
                        type='text'
                        placeholder='Дом'/>
                    <Field
                        {...profileForm('apartment', {
                            required: 'Квартира обязательна!',
                        })}
                        error={errors.apartment}
                        type='text'
                        placeholder='Квартира'/>
                    <FieldPhone
                        {...profileForm('Phone', {
                            required: 'Телефон обязателен!',
                        })}
                        error={errors.Phone}
                        type='text'
                        placeholder='Телефон'
                    />

                </form>
            </div>
        </Modal.Body> <Modal.Footer className="w-full flex justify-center bg-bg">
            <Button type="submit" form="ModalForm" className="px-7" handler={close}>Оформить</Button>
        </Modal.Footer> </Modal> </Flowbite>
    );
}

export default BasketModal;