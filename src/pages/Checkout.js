import React, { Component } from 'react';
import LoginMenu from '../pages/LoginMenu'
import '../styles/Checkout.css'

class Checkout extends Component {
    state = {  }

 

    render() { 
        console.log(this.props.logged)
        return ( 
           <div className="checkoutMenu">
                <div className='checkoutMenu__logPanel'>
                    <h4>Witaj ponownie</h4>
                { this.props.isLoggedIn? <p>dane z konta uzytkownika</p>  : <div>
                            <button onClick={this.props.handleClick} type="button" className=" btn btn-primary">zaloguj</button>
                        </div>}
                        {this.props.isClicked ? <LoginMenu logged ={this.props.logged} click={this.props.handleClick}/> : null}
                </div>
                <div className="checkoutMenu__newUserPanel">
                    <p>Jestes nowy ?</p>
                    <button>zarejestruj się</button>
                </div>
           </div>
         );
    }
}
 
export default Checkout;