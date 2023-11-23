import React from 'react'
import estilos from './caracteristicas.module.css'
import Features from '../../../data/features.json'
import CaracteristicasDetalles from './CaracteristicasDetalles'
export default function Caracteristicas() {
    return (
        <div className={estilos.caracteristicas}>
            {
                Features.map(caracteristica => (
                    <CaracteristicasDetalles clase={estilos.caracteristicasDetalle} image={caracteristica.image} title={caracteristica.title} description={caracteristica.description}/>
                ))}
        </div>
    )
}

