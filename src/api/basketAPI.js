import { $authHost } from "."

export const getBasket = async() => {
    try{
        const response = await $authHost.get('/basket')
        return response.data
    }
    catch(e){
        console.log(e)
    }
}

export const addToBasket = async(productId, dto) => {
    try{
        const response = await $authHost.post(`/basket/addToBasket/${productId}`, dto)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}

export const addItemCount = async(id) => {
    try{
        const response = await $authHost.patch(`/basket/addCountItem/${id}`)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}

export const lessItemCount = async(id) => {
    try{
        const response = await $authHost.patch(`/basket/lessCountItem/${id}`)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}

export const deleteFromBasket = async(id) => {
    try{
        const response = await $authHost.delete(`/basket/deleteFromBasket/${id}`)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}