import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Panel.css'

class Panel extends Component{

    render (){ 
        return (
        <>
            <nav className='mainMenu'>
            <div className="logo"><NavLink to ={'/'} exact ><img src="./images/logo.jpg" alt="logo"/></NavLink></div>
                <ul className='wrap'>
                        <li className=''><NavLink to ={'/categories'} exact >kategorie</NavLink></li>
                        <li className=''><NavLink to ={'/b'} exact ><i className="fas fa-search"></i></NavLink></li>
                        <li className=''><NavLink to ={'/shoppingcart'} exact ><i className="fas fa-shopping-cart"></i></NavLink></li>
                        { this.props.isLoggedIn?  <li className='log'><NavLink to ={'/user'} exact >moje konto</NavLink></li>  : <li className=''><NavLink to ={'/login'} exact >zaloguj</NavLink></li>}
                </ul>
            </nav> 
        </>
        )};
}
 
export default Panel;