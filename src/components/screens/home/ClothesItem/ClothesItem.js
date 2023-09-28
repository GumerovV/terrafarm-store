import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

function ClothesItem({ item }) {
    return ( 
            <Link to={`/clothe/${item.id}`} className="clothes-item">
                <div className='clothes-img' style={{
                    backgroundImage: `url(${item.url})`,}}
                    onMouseOver= {event => (event.target.style.backgroundImage = `url(${item.url2})`)}
                    onMouseOut= {event => (event.target.style.backgroundImage = `url(${item.url})`)}
                    />
                <div className="clothes-info">
                    <p>{ item.name }</p>
                    <p>{ new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(item.price) }</p>
                </div>
            </Link>
     );
}

export default ClothesItem;