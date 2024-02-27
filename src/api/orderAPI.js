import { $authHost } from "."

export const getUserOrders = async() => {
    const response = await $authHost.get('/basket/getOrders')
    return response.data
}

export const getUserOrdersHistory = async() => {
    const response = await $authHost.get('/basket/getOrdersHistory')
    return response.data
}

export const getAllUserOrders = async(searchTerm='') => {
    const response = await $authHost.get(`/basket/getAllOrders?searchTerm=${searchTerm}`)
    return response.data
}

export const createOrder = async(info) => {
    const response = await $authHost.post('/basket/createOrder', info)
    return response.data
}

export const createNoAuthOrder = async(products, info) => {
    const response = await $authHost.post('/basket/no-auth/createOrder', {products: products, ...info})
    return response.data
}




//O N L Y  A D M I N
export const getAllOrders = async(searchTerm='') => {
    const response = await $authHost.get(`/admin/orders?searchTerm=${searchTerm}`)
    return response.data
}

export const processOrder = async(id) => {
    const response = await $authHost.patch(`/admin/orders/${id}`)
    return response.data
}