import React from 'react'
import estilos from './header.module.css'
export default function Header() {
    return (
        <div className={estilos.header}>
            <img className={estilos.header__image} src="public/images/illustration-intro.png" alt="" />
            <div className={estilos.header__content}>
                <h1 className={estilos.header__title}>All your files in one secure location, accesible anywhere</h1>
                <div className={estilos.header__description}>
                    <p className={estilos.header__text}>Fylo stores all your most important files in one secure location.</p>
                    <p className={estilos.header__text}>Access them wherever you need, share and collaborate with friends, family and co-workers.</p>
                </div>
            </div>
            {/* <Button nombre="Get Started" /> */}
        </div>
    )
}
