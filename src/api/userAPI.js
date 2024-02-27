import { jwtDecode } from "jwt-decode"
import { $authHost, $host } from "."


export const register = async (email, password) => {
    const request = await $host.post('auth/register', {email, password})
    localStorage.setItem('token', request.data.accessToken)
    return jwtDecode(request.data.accessToken)
}

export const login = async (email, password) => {
    const request = await $host.post('auth/login', {email, password})
    localStorage.setItem('token', request.data.accessToken)
    return jwtDecode(request.data.accessToken)
}

export const check = async () => {
    let response
    try{
        response = await $authHost.get('/auth/check')
    }
    catch(response){
        console.log(response.response.data.message)
        return null
    }
    localStorage.setItem('token', response.data.accessToken)
    return jwtDecode(response.data.accessToken)
}

export const getProfile = async() => {
    const response = await $authHost.get('/user')
    return response.data
}

export const updateProfile = async(dto) => {

        const response = await $authHost.patch('/user', dto)
        return response.data

}