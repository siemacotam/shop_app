import React, { Component } from 'react';
import '../styles/ShoppingCart.css'
import '../styles/ShoppingCart.css'
import Swal from 'sweetalert2'

export let orders = []

class ShoppingCart extends Component {

    state = { 
        isLoggedIn: this.props.isLoggedIn,
        orderItems: orders,
     }

     handleRemoveClick = () => {
         this.setState({
             orderItems: ''
         })
         orders = []
     }

     handleClick = (e) => {
        const buttonId = e.target.id
        const order = [...orders]
        const index = order.filter(item => {return ( item.name.indexOf(buttonId))})
        orders =index
        this.setState({
            orderItems: index,
        })
        Swal.fire('Usunieto produkt z koszyka')
     }


     orderList = this.state.orderItems.map(item => 
        <li key={item.name}>
            <div><img src={item.img} alt=""/></div>
            <p>{item.name}</p>
            <p>ilość : {item.amount}</p>
            <p>{item.price * item.amount}</p>
            <button id={item.name} onClick ={this.handleClick}>x</button>
        </li> )



    render() { 

        return ( 
            <div className='shoppingCart'>
                <h3>Status koszyka</h3>
                <p>podsumowanie</p>
                <ul>
                    {this.orderList}
                </ul>
                <p>{this.state.count}</p>
                <p>W sumie <span>{this.state.orderItems.length}</span> przedmiotów. Łączna kwota do zapłaty to <span>
                    {this.state.orderItems.length > 0 ? (this.state.orderItems.map(item=>item.price)).reduce((a, b) => a + b) : 0 }</span></p>
                <button onClick={ () => {Swal.fire({
                        title: 'Jesteś pewny że chcesz wyczyścić koszyk ?',
                        showCancelButton: true,
                        confirmButtonText: `Wyczyść`,
                        cancelButtonText: `Cofnij`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire('Koszyk wyczyszczony :)', '', 'success');
                          this.handleRemoveClick()
                        }
                      })} 
                    }>Wyczyść koszyk</button>
                <button disabled={!this.state.isLoggedIn}>{this.state.isLoggedIn ? 'przejdź do zamówienia' : 'zaloguj sie zaby kontynuować'}</button>
            </div>
         );
    }
}
 
export default ShoppingCart;