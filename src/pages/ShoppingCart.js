import React, { Component } from 'react';
import '../styles/ShoppingCart.css'
import '../styles/ShoppingCart.css'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

export let orders = []

class ShoppingCart extends Component {

    state = { 
        isLoggedIn: this.props.isLoggedIn,
        orderItems: orders,
     }

     handleRemoveClick = () => {
        orders = []
         this.setState({
             orderItems: [],
         })
     }

     handleClick = (e) => {
        const buttonId = e.target.id
        const order = [...this.state.orderItems]
        const orderItems = order.filter(item => {return ( item.name.indexOf(buttonId))})
        orders =orderItems
        this.setState({
            orderItems
        })
        Swal.fire('Usunieto produkt z koszyka')
     }

     componentDidMount() {
        window.scrollTo(0,400)
        setInterval(() => {
            this.setState({
                isLoggedIn: this.props.isLoggedIn,
        }) },1)
      }



    render() { 

        const orderList = this.state.orderItems.map(item => 
            <li className='orderElement' key={item.name}>
                <div className='orderElement__imgWrap' ><img className='orderElement__img' src={item.img} alt=""/></div>
                <p className='orderElement__name orderElement__text' >{item.name}</p>
                <p className='orderElement__number orderElement__text' >ilość : {item.amount}</p>
                <p className='orderElement__price orderElement__text' >{item.price * item.amount}</p>
                <button className='orderElement__button btn btn-danger' id={item.name} onClick ={this.handleClick}>x</button>
            </li> )

        return ( 
            <div className='shoppingCart'>
                <h2 className='shoppingCart__title'>Status koszyka</h2>
                <p className='shoppingCart__text'>Podsumowanie</p>
                <ul className='shoppingCart__container'>
                    {orderList}
                </ul>
                <p className='shoppingCart__text'>W sumie <span className='shoppingCart__span'>{this.state.orderItems.length}</span> przedmiotów. Łączna kwota do zapłaty to <span className='shoppingCart__span'>
                    {this.state.orderItems.length > 0 ? (this.state.orderItems.map(item=>item.price)).reduce((a, b) => a + b) : 0 }</span></p>
                <button className='shoppingCart__button btn btn-danger' disabled={this.state.orderItems.length === 0} onClick={ () => {Swal.fire({
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

                {this.state.isLoggedIn && orders.length > 0? <Link to ={'/user/orders'} exact ><button className='shoppingCart__button btn btn-success'>przejdź do zamówienia </button></Link> : (this.state.isLoggedIn ? <button className='shoppingCart__button btn btn-success' disabled>Dodaj produkty do koszyka</button> :<button className='shoppingCart__button btn btn-success' disabled> zaloguj sie zaby kontynuować</button>) } 
        
                
            </div>
         );
    }
}
 
export default ShoppingCart;