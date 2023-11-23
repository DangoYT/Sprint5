import React from 'react'
import estilos from './nav.module.css'
export default function Nav() {
    return (
        <div className={estilos.header}>
            <img src="../../../public/icons/logo.svg" alt="" />
            <ul className={estilos.nav}>
                <li className={estilos.nav__item}><a className={estilos.nav__link} href="">Features</a></li>
                <li className={estilos.nav__item}><a className={estilos.nav__link} href="">Team</a></li>
                <li className={estilos.nav__item}><a className={estilos.nav__link} href="">Sign In</a></li>
            </ul>
        </div>
    )
}
