import React from 'react'

export default function CaracteristicasDetalles(props) {
    return (
        <div className={props.clase}>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
