import React from 'react'
import './Card.css'

const Card = ({icon,title,content})=>{
    return (
        <div className='card'>
            <i class={`${icon}`}></i>
            <p className='card-title'>{title}</p>
            <p className="card-content">{content}</p>
        </div>
    )
}
export default Card;
