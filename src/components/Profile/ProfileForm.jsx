import React, {useContext, useEffect, useState} from "react";
import Field from "../../ui/form-field/Field";
import {useForm} from "react-hook-form";
import Button from "../../ui/button/Button";
import FieldPhone from "../../ui/form-field/FieldPhone";
import {Context} from "../../index";
import {getProfile, updateProfile} from "../../api/userAPI";
import {data} from "autoprefixer";
import {observer} from "mobx-react-lite";
import ClassicSpinner from "../../ui/spinner/Spinner";
import {errorCatch} from "../../utils/api";



const ProfileForm = observer(() => {
    const {user} = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        getProfile().then((data)=>user.setInfo(data)).finally(() => setIsLoading(false))
    }, []);

    async function handleSubmitForm(data)
    {
        try {
            data = {...data, number: data.number.replace(/[-()]/g, '')}
            await updateProfile(data)
            setError('')
            console.log(data)
        }
        catch (e){
            console.log(data)
            setError(errorCatch(e))
        }
    }

    const { register: profileForm, handleSubmit, formState: {errors} } = useForm({mode: 'onChange'})
    if(isLoading) return <ClassicSpinner />
    return (
        <div className="md:pr-64">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="grid md:grid-cols-3 md:gap-20 ">
                    <Field
                        {...profileForm('name', {
                        })}
                        error={errors.name}
                        type='text'
                        placeholder='Имя'
                        defaultValue={user.info.name}
                    />
                    <Field
                        {...profileForm('surname', {
                        })}
                        error={errors.surname}
                        type='text'
                        placeholder='Фамилия'
                        defaultValue={user.info.surname}
                    />
                    <Field
                        {...profileForm('country', {
                        })}
                        error={errors.country}
                        type='text'
                        placeholder='Страна'
                        defaultValue={user.info.country}
                    />
                    <Field
                        {...profileForm('city', {
                        })}
                        error={errors.city}
                        type='text'
                        placeholder='Город/Село'
                        defaultValue={user.info.city}
                    />
                    <Field
                        {...profileForm('street', {
                        })}
                        error={errors.street}
                        type='text'
                        placeholder='Улица'
                        defaultValue={user.info.street}
                    />
                    <Field
                        {...profileForm('building', {
                        })}
                        error={errors.building}
                        type='text'
                        placeholder='Дом'
                        defaultValue={user.info.building}
                    />
                    <Field
                        {...profileForm('apartment', {
                        })}
                        error={errors.apartment}
                        type='text'
                        placeholder='Квартира'
                        defaultValue={user.info.apartment}
                    />
                    <FieldPhone
                        {...profileForm('number', {
                        })}
                        error={errors.number}
                        type='text'
                        placeholder='Телефон'
                        defaultValue={ user.info.number.slice(2)}
                    />
                </div>
                <div className="flex flex-col items-center justify-center md:justify-start md:text-2xl mt-10">
                    <Button type='submit' className="md:px-4">
                        Сохранить
                    </Button>
                    <p className="text-center text-red-700 font-light text-[0.85rem] md:text-lg">{error}</p>
                </div>
            </form>
        </div>
    );
})

export default ProfileForm;