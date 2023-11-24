import React from 'react'
import estilos from './button.module.css'
export default function Button(props) {
    return (
        <button className={props.estilo}>{props.nombre}</button>
    )
}
