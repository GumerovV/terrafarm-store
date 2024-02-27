import { makeAutoObservable } from "mobx"

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        this._role = null
        this._info = {}
        makeAutoObservable(this)
    }

    setIsAuth(boll){
        this._isAuth = boll
    }

    setUser(user){
        this._user = user
    }

    setRole(role){
        this._role = role
    }

    setInfo(info){
        this._info = info
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

    get role(){
        return this._role
    }

    get info(){
        return this._info
    }
}
