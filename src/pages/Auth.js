import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "..";
import Field from "../ui/form-field/Field";
import Button from '../ui/button/Button'
import { useForm } from "react-hook-form";
import { validEmail } from "../utils/validEmail";
import { login, register } from "../api/userAPI";
import { getBasket } from "../api/basketAPI";
import { useNavigate } from 'react-router-dom';
import { errorCatch } from "../utils/api";

const Auth = observer(() => {
    const {user, basket} = useContext(Context)
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { register: registerForm, handleSubmit, formState: {errors} } = useForm({mode: 'onChange'})

    const onSubmit = async(data) => {
        if (isLogin){
            try{
                const res = await login(data.email, data.password)
                const devices = await getBasket()

                user.setIsAuth(true)
                user.setUser(res)
                user.setRole(res.role)

                basket.loadBasket(devices.products)
                setError('')
                navigate('/')
            }
            catch(e){
                console.log(e)
                setError(errorCatch(e))
            }
        }
        else{
            try{
                const res = await register(data.email, data.password)
                user.setIsAuth(true)
                user.setUser(res)
                user.setRole(res.role)
                setError('')
                navigate('/')
            }
            catch(e){
                setError(e.response.data.message)
            }
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="bg-zinc-800 rounded-xl shadow-xl w-96 p-1 py-4" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center text-white font-medium text-2xl mb-2">{isLogin ? 'Вход' : 'Регистрация'}</h1>
                    <hr className="mx-auto w-4/5 text-center color-white mb-10"/>

                    <div className="mx-auto w-4/5 mb-14">
                        <Field 
                            {...registerForm('email', {
                                required: 'Email обязателен!',
                                pattern: {
                                    value: validEmail,
                                    message: 'Введите правильный email!',
							    },
                            })} 
                            error={errors.email}
                            placeholder='Введите email' />
                        <Field 
                            {...registerForm('password', {
                                required: 'Пароль обязателен!',
                            })} 
                            error={errors.password}
                            type='password'
                            placeholder='Введите пароль'/>
                    </div>

                    <div className="flex justify-center items-center gap-4 mb-2 text-white">
                        <p>{isLogin ? 'Нет учетной записи?' : 'Есть учетная запись?'}</p>
                        <p className="font-semibold text-xl hover:text-btn transition-all duration-300 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Создать!' : 'Войти!'}</p>
                    </div>
                    <hr className="mx-auto w-4/5 text-center color-white mb-4"/>
                    <div className="flex justify-center">
                        <Button type='submit' className={`py-2 text-xl ${!isLogin ? 'px-14' : 'px-24'}`}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                    </div>
                    <p className="text-center text-red-700 font-light text-[0.85rem]">{error}</p>
            </form>
        </div>
       
    );
})

export default Auth;