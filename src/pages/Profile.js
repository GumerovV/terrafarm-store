import {useContext, useState} from "react";
import {Context} from "..";
import {observer} from "mobx-react-lite";
import ProfileForm from "../components/Profile/ProfileForm";
import ProfileOrder from "../components/Profile/ProfileOrder";


const Profile = observer(() => {
    const {user, basket} = useContext(Context)
    const [showForm, setShowForm] = useState(false)
    const [showOrder, setShowOrder] = useState(false)

    const logOut = () => {
        user.setUser({})
        user.setRole(null)
        user.setIsAuth(false)
        basket.loadBasket([])
        localStorage.setItem('token', null)
        setProfile({})
    }
    const handleFillProfileClick = () => {
        setShowForm(!showForm);
        setShowOrder(false);
    };
    const handleFillOrderClick = () => {
        setShowOrder(!showOrder);
        setShowForm(false);
    };

    return (
        <div className="text-white px-4">
            <h1 className="flex justify-center items-center mt-10 text-3xl">Добро пожаловать,</h1>
            <h1 className="flex justify-center items-center my-10 text-3xl">{user.user.email}</h1>
            <hr className="mx-auto text-center color-white mb-10 "/>
            <div className="grid md:grid-cols-10 gap-10">
                <div className="md:h-[200px] p-4 md:col-span-3 bg-zinc-800 rounded-xl shadow-lg text-center md:text-start space-y-8">
                    <div>
                        <button
                            className={`${showForm ? `text-btn`:``} mt - 3 text-2xl uppercase cursor-pointer border-none bg-none no-underline hover:text-btn transition-color duration-300`}
                            onClick={handleFillProfileClick}
                        >
                            Заполнить профиль
                        </button>
                    </div>
                    <div>
                        <button className={`${showOrder ? `text-btn`:``} mt - 3 uppercase cursor-pointer border-none bg-none no-underline text-2xl hover:text-btn transition-color duration-300`}
                                onClick={handleFillOrderClick}
                        >
                            Мои заказы
                        </button>
                    </div>
                    <div>
                        <button
                            className="uppercase cursor-pointer border-none bg-none no-underline text-2xl hover:text-btn transition-color duration-300"
                            onClick={logOut}
                        >
                            Выйти
                        </button>
                    </div>
                </div>
                <div className="md:col-span-7">
                    {showForm &&<div className="animate-fade ">
                        <ProfileForm></ProfileForm>
                    </div>}
                    {showOrder &&<div className="grid grid-cols-1 animate-fade overflow-x-auto">
                        <ProfileOrder></ProfileOrder>
                    </div>}
                </div>
            </div>
        </div>
    );
});

export default Profile;