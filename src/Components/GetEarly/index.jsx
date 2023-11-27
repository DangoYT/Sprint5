import Button from '../Buttons/Button';
import estilos from './getEarly.module.css';
import { useState } from 'react';


export default function GetEarly() {

    const [error, setError] = useState("");
    const [email, setEmail] = useState("")
    const evento = (e) => setEmail(e.target.value)
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(validateEmail(email));
        if (validateEmail(email) == true) {
            setError("")
        } else {
            setError("Please enter a valid email address")
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    return (
        <div className={estilos.getEarly}>
            <div className={estilos.getEarly__content}>
                <h1 className={estilos.getEarly__title}>Get early access today</h1>
                <p className={estilos.getEarly__description}>it only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
                <form className={estilos.getEarly__form} onSubmit={handleOnSubmit} >
                    <input className={estilos.getEarly__input} onChange={evento} type="text" />
                    <span className={estilos.getEarly__error}>{error}</span>
                    <Button estilo="button2" nombre="Get Started for free"/>
                </form>
            </div>
        </div>
    )
}
