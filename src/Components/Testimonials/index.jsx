import React from 'react'
import Testimonios from '../../../data/testimonials.json'
import estilos from './testimonials.module.css'
export default function Testimonials() {
  return (
    <div className={estilos.testimonial}>
      <div className={estilos.testimonialsContainer}>
                <img className={estilos.imgQuotes} src="public/images/bg-quotes.png" alt="" />
                {Testimonios.map(testimonios => (
                    <div className={estilos.testimonialCard}>
                        <h3 className={estilos.cardName}>{testimonios.name}</h3>
                        <p className={estilos.cardTitle}>{testimonios.title}</p>
                        <p className={estilos.cardQuote}>{testimonios.quote}</p>
                        <img className={estilos.cardImg} src={testimonios.image} alt={testimonios.name} />
                    </div>
                ))}
            </div>
    </div>
  )
}
