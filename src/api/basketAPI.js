import { $authHost } from "."

export const getBasket = async() => {
    const response = await $authHost.get('/basket')
    return response.data
}