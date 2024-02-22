import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Button from "../ui/button/Button";
import { getProfile } from "../api/userAPI";

const Profile = observer(() => {
    const {user, basket} = useContext(Context)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile().then(data => setProfile(data))
    }, [])

    const logOut = () => {
        user.setUser({})
        user.setRole(null)
        user.setIsAuth(false)
        basket.loadBasket([])
        localStorage.setItem('token', null)
        setProfile({})
    }

    return (
        <div className="text-white">
            <p>{user.user.email}</p>
            <p>{user.role}</p>
            {profile.name && <p>{profile.name}</p>}
            {profile.name && <p>{profile.surname}</p>}
            {profile.name && <p>{profile.country}</p>}
            {profile.name && <p>{profile.city}</p>}
            {profile.name && <p>{profile.street}</p>}
            {profile.name && <p>{profile.building}</p>}
            {profile.name && <p>{profile.apartment}</p>}
            {profile.name && <p>{profile.number}</p>}
            <Button onClick={() => logOut()}>Выйти</Button>
        </div>
    );
})

export default Profile;