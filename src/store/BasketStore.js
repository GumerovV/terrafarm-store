import { makeAutoObservable } from "mobx"

export default class BasketStore{
    constructor(){
        this._devices = []
        makeAutoObservable(this)
    }

    loadBasket = (devices) => {
      this._devices = devices
    }

    setDevices = (item) => {
        let exists = false;

        exists = this._devices.some(device => device.id === item.id);
    
        if (exists) {
          this._devices = this._devices.map(device =>
            device.id === item.id ? { ...device, count: device.count + 1 } : device
          );
        } else {
          this._devices = [...this._devices, { ...item, count: 1 }];
        }
    }

    deleteDevice = (id) => {
        this._devices = this._devices.filter(item => item.id !== id)
    }

    plusDevice = (id) => {
      this._devices = this._devices.map(item => {
        return item.id === id ? {...item, count: item.count + 1} : item
      })
    }

    lessDevice = (id) => {
      this._devices = this._devices.map(item => {
        return item.id === id ? {...item, count: item.count !== 1 ? item.count - 1 : item.count} : item
      })
    }

    getTotalPrice = () => {
        return this._devices.reduce((item, acc) => {
          return acc + item.count * item.price
        }, 0)
    }

    getTotalCount = () => {
      return this._devices.reduce((acc, device) => {
        return acc + device.count
      }, 0)
    }

    get devices(){
        return this._devices
    }
}