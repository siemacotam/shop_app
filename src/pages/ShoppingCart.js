import React, { Component } from 'react';
import '../styles/ShoppingCart.css'

class ShoppingCart extends Component {
    state = { 
        isLoggedIn: this.props.isLoggedIn,
        orders: [
            {
                name: 'car',
                price: 100,
            },
            {
                name: 'laptop',
                price: 1323900,
            },
            {
                name: 'tv',
                price: 110000,
            },
        ]
     }
    render() { 
        const order = [...this.state.orders]

        return ( 
            <div className='shoppingCart'>
                <h3>Status koszyka</h3>
                {this.state.order}
                <p>podsumowanie</p>
                <div className="orderList">
                    {order.map(item => 
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    )}
                </div>
                <p>W sumie <span>{order.length}</span> przedmiotów. Łączna kwota do zapłaty to <span>{(order.map(item=>item.price)).reduce((a, b) => a + b)
                }</span></p>
                <button disabled={!this.state.isLoggedIn}>{this.state.isLoggedIn ? 'przejdź do zamówienia' : 'zaloguj sie zaby kontynuować'}</button>
            </div>
         );
    }
}
 
export default ShoppingCart;