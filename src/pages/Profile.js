import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Button from "../ui/button/Button";

const Profile = observer(() => {
    const {user, basket} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setRole(null)
        user.setIsAuth(false)
        basket.loadBasket([])
        localStorage.setItem('token', null)
    }

    return (
        <div className="text-white">
            <p>{user.user.email}</p>
            <p>{user.role}</p>
            <Button onClick={() => logOut()}>Выйти</Button>
        </div>
    );
})

export default Profile;