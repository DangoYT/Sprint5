import React from 'react'
import estilos from './getEarly.module.css'
export default function GetEarly() {
    return (
        <div className={estilos.getEarly}>
            <div className={estilos.getEarly__content}>
                <h1 className={estilos.getEarly__title}>Get early access today</h1>
                <p className={estilos.getEarly__description}>it only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
                <form className={estilos.getEarly__form} onSubmit={handleOnSubmit} >
                    <input className={estilos.getEarly__input} onChange={evento} type="text" />
                    <span className={estilos.getEarly__error}>{error}</span>
                    <Button nombre="Get Started for free" />
                </form>
            </div>
        </div>
    )
}
