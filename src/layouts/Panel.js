import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Panel.css'

const menuList = [
    // {name: 'home', path: '/', exact:true},
    {name: 'oferta', path: '/offer',},
    {name: 'szukaj', path: '/l',},
    {name: 'koszyk', path: '/shop'},
    {name: 'zaloguj', path: '/login',}
]

const Panel = () => {

    return ( 
        <>
            <nav className='mainMenu'>
            <div className="logo"><NavLink to ={'/'} exact ><img src="./images/logo.jpg" alt="logo"/></NavLink></div>
                <ul className='wrap'>
                        <li className=''><NavLink to ={'/a'} exact >kategorie</NavLink></li>
                        <li className=''><NavLink to ={'/b'} exact ><i class="fas fa-search"></i></NavLink></li>
                        <li className=''><NavLink to ={'/c'} exact ><i class="fas fa-shopping-cart"></i></NavLink></li>
                        <li className=''><NavLink to ={'/d'} exact >zaloguj</NavLink></li>
                </ul>
            </nav> 
        </>
            );
}
 
export default Panel;