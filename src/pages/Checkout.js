import React, { Component } from 'react';
import Login from '../pages/Login'
import Adress from '../pages/Adress'

class Checkout extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="checkoutMenu__wrap">
                <div className="checkoutMenu__stepsPanel">
                    <ul className="checkoutMenu__nav">
                        <li className={this.props.isLoggedIn ? "checkoutMenu__navElement" : "checkoutMenu__navElement stepActive"}>Zaloguj się</li>
                        <li className="checkoutMenu__navElement">Adres</li>
                        <li className="checkoutMenu__navElement">Metoda płatności</li>
                        <li className="checkoutMenu__navElement">Podsumowanie</li>
                        <li className="checkoutMenu__navElement">Gotowe</li>
                     </ul>
                </div>
                {this.props.isLoggedIn ? <Adress activeUser={this.props.activeUser}/> : <Login user={this.props.user} isLoggedIn={this.props.isLoggedIn} logged ={this.props.logged} isClicked={this.props.isClicked} handleClick={this.props.handleClick}/>}
            </div>
         );
    }
}
 
export default Checkout;