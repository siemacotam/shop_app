import React, { Component } from 'react';
import '../styles/ShoppingCart.css'
import '../styles/ShoppingCart.css'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

export let orders = []
let deliveryPrice = 10


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
                <div className="shoppingCart__orders">
                    <h2 className='shoppingCart__title'>Status koszyka ({orders.length})</h2>
                    <p className='shoppingCart__text'>Podsumowanie</p>
                    <ul className='shoppingCart__container'>
                        {orderList}
                    </ul>
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
                </div>
                <div className="shoppingCart__summary">
                    <h3 className='shoppingCart__title'>Kasa</h3>
                    <div className='shoppingCart__values'>
                        <p className='shoppingCart__details' >Wartość produktów</p>
                        <p className='shoppingCart__detailsValue'> {this.state.orderItems.length > 0 ? (this.state.orderItems.map(item=>item.price)).reduce((a, b) => a + b) : 0 }</p>
                        <p className='shoppingCart__details'>Przesyłka</p>
                        <p className='shoppingCart__detailsValue'>{orders.length >0 ? deliveryPrice : 0}</p>
                    </div>
                    <div className='shoppingCart__values'>
                        <p className='shoppingCart__details'>Do zapłaty (w tym VAT)</p>
                        <p className='shoppingCart__detailsValue'>{this.state.orderItems.length > 0 ? (this.state.orderItems.map(item=>item.price)).reduce((a, b) => a + b) + deliveryPrice : 0 }</p>
                    </div>

                {/* <p className='shoppingCart__text'>W sumie <span className='shoppingCart__span'>{this.state.orderItems.length}</span> przedmiotów. Łączna kwota do zapłaty to <span className='shoppingCart__span'>
                    {this.state.orderItems.length > 0 ? (this.state.orderItems.map(item=>item.price)).reduce((a, b) => a + b) : 0 }</span></p> */}

                {orders.length > 0? <Link to ={'/order'} exact ><button className='shoppingCart__button btn btn-success'>przejdź do kasy </button></Link> : <button className='shoppingCart__button btn btn-success' disabled>Koszyk jest pusty</button> } 
                </div>
                <div className="shoppingCart__flexStart">
                    <div className="shoppingCart__termin">
                            <p>Przewidywana data dostawy :</p>
                            <p>13.13.2013</p>
                    </div>
                    <div className="shoppingCart__payment">
                        <p>Sposoby płatności</p>
                        <div className="shoppingCart__paymentCards">
                            <i class="fab fa-cc-visa"></i>
                            <i class="fab fa-cc-mastercard"></i>
                            <i class="fas fa-network-wired"></i>
                            <i class="fas fa-wallet"></i>
                            <i class="fas fa-mail-bulk"></i>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ShoppingCart;