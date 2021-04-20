import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Panel.css'
import LoginMenu from '../pages/LoginMenu'


class Panel extends Component{
    state = {
        isClicked: false,
        shopItems: 0,
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render (){ 

        return (
        <>
            <nav className='mainMenu'>
            <div className="logo"><NavLink to ={'/'} exact ><img src="./images/logo.jpg" alt="logo"/></NavLink></div>
                <ul className='wrap'>
                        <li className=''><NavLink to ={'/categories'} exact >kategorie</NavLink></li>
                        <li className=''><NavLink to ={'/search'} exact ><i className="fas fa-search"></i></NavLink></li>
                        <li className=''><NavLink to ={'/shoppingcart'} exact ><i className="fas fa-shopping-cart"> ({this.state.shopItems})</i></NavLink></li>
                        { this.props.isLoggedIn? <li className='log'><NavLink to ={'/user'} exact >moje konto</NavLink></li>  : <li className='button'><button onClick={this.handleClick} type="button" className="btn btn-primary">zaloguj</button></li>}
                </ul>
            </nav> 
            {this.state.isClicked ? <LoginMenu logged ={this.props.logged} click={this.handleClick}/> : null}
        </>
        )};
}
 
export default Panel;