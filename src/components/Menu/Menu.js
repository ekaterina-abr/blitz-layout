import React from 'react'
import './Menu.scss'

const menuItems = ['HOME', 'ABOUT ME', 'PORTFOLIO', 'CONTACT']

const Menu = () => {
    return (
        <nav className='Menu'>
            <span>∞ MENU</span>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <hr/>
        </nav>
    )
}

export default Menu