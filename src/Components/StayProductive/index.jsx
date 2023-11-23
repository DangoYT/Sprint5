import React from 'react'
import estilos from './stayProductive.module.css'
export default function StayProductive() {
    return (
        <div className={estilos.stayProductive}>
            <img className={estilos.stayProductive__img} src="public/images/illustration-stay-productive.png" alt="" />
            <div className={estilos.stayProductive__text}>
                <h1 className={estilos.stayProductive__title}>Stay productive, wherever you are</h1>
                <p className={estilos.stayProductive__paragraph}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className={estilos.stayProductive__paragraph}>Securely share files and folders with friends, family and colleagues for live collaboration. No emailattachments required.</p>
                <a className={estilos.stayProductive__link} href="" >See how Fylo works <img src="public/icons/icon-arrow.svg" alt="" /> <hr /> </a>
            </div>
        </div>
    )
}
