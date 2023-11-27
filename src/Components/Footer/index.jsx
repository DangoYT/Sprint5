import React from 'react'
import estilos from './footer.module.css'
export default function Footer() {
  return (
    <div className={estilos.footer}>
      <div className={estilos.footer__section__about}>
          <img className={estilos.footer__logo} src="public/icons/logo.svg" alt="" />
          <img src="public/icons/icon-location.svg" alt="" className={estilos.footer__icon} />
          <p className={estilos.footer__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magma aliqua</p>
        </div>
        <div className={estilos.footer__section__contact}>
          <img src="public/icons/icon-phone.svg" alt="" className={estilos.footer__icon__phone} />
          <img src="public/icons/icon-email.svg" alt="" className={estilos.footer__icon__email} />
          <p className={estilos.footer__text__phone}>+1-543-123-4567</p>
          <p className={estilos.footer__text__email}>example@fylo.com</p>
        </div>
        <div className={estilos.footer__section__links}>
          <a className={estilos.footer__link} href="">About Us</a>
          <a className={estilos.footer__link} href="">Contact Us</a>
          <a className={estilos.footer__link} href="">Jobs</a>
          <a className={estilos.footer__link} href="">Terms</a>
          <a className={estilos.footer__link} href="">Press</a>
          <a className={estilos.footer__link} href="">Privacy</a>
          <a className={estilos.footer__link} href="">Blog</a>
        </div>
        <div className={estilos.footer__section__social}>
          <img src="public/icons/bxl-facebook.svg" alt=""  className={estilos.footer__social_icon_facebook}/>
          <img src="public/icons/bxl-twitter.svg" alt=""   className={estilos.footer__social_icon_twitter}/>
          <img src="public/icons/bxl-instagram.svg" alt="" className={estilos.footer__social_icon_instagram} />
        </div>
    </div>
  )
}
