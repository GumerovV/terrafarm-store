import React from "react";
import Field from "../../ui/form-field/Field";
import {useForm} from "react-hook-form";
import Button from "../../ui/button/Button";
import FieldPhone from "../../ui/form-field/FieldPhone";



function ProfileForm() {
    function handleSubmitForm(data) { console.log(data); }
    const { register: profileForm, handleSubmit, formState: {errors} } = useForm({mode: 'onChange'})

    return (
        <div className="md:pr-64">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="grid md:grid-cols-3 md:gap-20 ">
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
                </div>
                <div className="flex items-center justify-center md:justify-start md:text-2xl mt-10">
                    <Button type='submit' className="md:px-4">
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ProfileForm;