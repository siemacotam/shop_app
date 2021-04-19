import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Panel.css'
import LoginMenu from '../pages/LoginMenu'


class Panel extends Component{
    state = {
        isClicked: false,
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
                        <li className=''><NavLink to ={'/b'} exact ><i className="fas fa-search"></i></NavLink></li>
                        <li className=''><NavLink to ={'/shoppingcart'} exact ><i className="fas fa-shopping-cart"></i></NavLink></li>
                        {/* { this.props.isLoggedIn?  <li className='log'><NavLink to ={'/user'} exact >moje konto</NavLink></li>  : <li className=''><NavLink to ={'/login'} exact >zaloguj</NavLink></li>} */}
                        { this.props.isLoggedIn?  <li className='log'><NavLink to ={'/user'} exact >moje konto</NavLink></li>  : <li className=''><button onClick={this.handleClick} type="button" class="btn btn-primary">zaloguj</button></li>}
                </ul>
            </nav> 
            {this.state.isClicked ? <LoginMenu logged ={this.props.logged} click={this.handleClick}/> : null}
        </>
        )};
}
 
export default Panel;