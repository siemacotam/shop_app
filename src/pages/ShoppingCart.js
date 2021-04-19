import React, { Component } from 'react';
import '../styles/ShoppingCart.css'

class ShoppingCart extends Component {
    state = { 
        isLoggedIn: this.props.isLoggedIn,
        order: []
     }
    render() { 
        return ( 
            <div className='shoppingCart'>
                <h3>Status koszyka</h3>
                {this.state.order}
                <p>podsumowanie</p>
                <button disabled={!this.state.isLoggedIn}>{this.state.isLoggedIn ? 'przejdź do zamówienia' : 'zaloguj sie zaby kontynuować'}</button>
            </div>
         );
    }
}
 
export default ShoppingCart;