import React, { useState } from "react";
import './style.css'

const clearData = {
    price: '',
    type: ''
}

function CreateClothesForm({ setFilter }) {
    const [data, setData] = useState(clearData);

    const createFilter = e => {
        e.preventDefault()
        setFilter([data.price, data.type])
    }
        
    return ( 
        <form className="form">
            <input 
                placeholder="Price" 
                onChange={e => setData(prev => ({
                    ...prev,
                    price: e.target.value
                }))}
                value={data.price}
                />
            <input 
                placeholder="Type"
                onChange={e => setData(prev => ({
                    ...prev,
                    type: e.target.value
                }))}
            value={data.type}
            />
            <button className="btn" onClick={e => createFilter(e)}>Find</button>
        </form>
     );
}

export default CreateClothesForm;