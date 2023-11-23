import React from 'react'

export default function Nav() {
    return (
        <nav>
            <img class="logo" src="public/icons/logo.svg" alt="" />
            <img onClick={() => setCount(true)} className='menuMobile' src="public/icons/bx-menu-alt-right.svg" alt="" />
            <ul class="navBar">
                <li><a href="">Features</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Sign In</a></li>
            </ul>
            {count === true && (
                <Modal />
            )}
        </nav>
    )
}
