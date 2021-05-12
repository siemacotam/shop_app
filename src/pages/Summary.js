import React, { Component } from 'react';
import {orders} from '../pages/ShoppingCart'
import {users} from '../pages/UserAccount'
import '../styles/Summary.css'
import {Link} from 'react-router-dom'
import {selectedPaymentMethod} from '../pages/Payment'
import {activeUserIndex} from '../pages/LoginMenu'

class Summary extends Component {
    state = {  }

    // handleClick = (e) => {
    //     const buttonId = e.target.id
    //     const order = [...orders]
    //     const orderItems = order.filter(item => {return ( item.name.indexOf(buttonId))})
    //     console.log(orders)
    //     console.log(orderItems)
    //     orders.splice()
    //     orders = orderItems
    //     this.setState({
    //         orderItems
    //     })
    //  }

    componentDidMount(){
        this.props.step(4)
    }

    render() { 
        console.log(users)

        const orderList = orders.map(item => 
            <li className='orderElement' key={item.name}>
                <div className='orderElement__imgWrap' ><img className='orderElement__img' src={item.img} alt=""/></div>
                <p className='orderElement__name orderElement__text' >{item.name}</p>
                <p className='orderElement__number orderElement__text' >ilość : {item.amount}</p>
                <p className='orderElement__price orderElement__text' >{item.price * item.amount}</p>
                <button className='orderElement__button btn btn-danger' id={item.name} onClick ={this.handleClick}>x</button>
            </li> )


        return ( 
           <div className="summary__wrap">
               <div className="summary__title">
                   <p className='summary__text summary__text--bold summary__text--big'>Sprawdź i potwierdź zamówienie</p>
                   <Link to='/checkout/paymentmethod'><button className='summary__button btn btn-success'>Potwierdź i zapłać wybraną metodą</button></Link>
               </div>
               <div className="summary__shipment">
                   <p className='summary__text summary__text--bold summary__text--border' >Rodzaj przesyłki :</p>
                   <p>opcje</p>
               </div>
               <div className="summary__orderDetails">
                   <p className='summary__text summary__text--bold summary__text--border'>Adres dostawy :</p>
                   <p>{users[activeUserIndex].name} {users[activeUserIndex].surname}</p>
                    <p>{users[activeUserIndex].adress} {users[activeUserIndex].adressNumber}</p>
                    <p>{users[activeUserIndex].postcode} {users[activeUserIndex].city}</p>
                    <p className='summary__text summary__text--bold summary__text--border' >Adres rachunku :</p>
                    <p>Taki sam jak dostawy</p>
                    <p className='summary__text summary__text--bold summary__text--border'>Metoda płatności: </p>
                    <p>{selectedPaymentMethod}</p>
               </div>
               <div className="summary__order">
                   <p className='summary__text summary__text--bold summary__text--border' >zamówienie</p>
                   <div>
                       <ul>
                           {orderList}
                       </ul>
                   </div>
               </div>
               <div className="summary__orderButton">
                   <div className='summary_flex summary__text--border'>
                     <p className='summary__text summary__text--bold'>Przesyłka</p>
                     <p>Gratis</p>
                    </div>
                    <div className='summary_flex'>
                   <p className='summary__text summary__text--bold'>Do zapłaty</p>
                   <p>{orders.length > 0 ? (orders.map(item=>item.price)).reduce((a, b) => a + b) : 0 }</p>
                   </div>
                   <p>Składając zamówienie na Celek.pl, akceptujesz Postanowienia Polityki Prywatności, Regulamin oraz zasady odstąpienia od umowy. Potwierdzasz także, że ten zakup jest przeznaczony wyłącznie do użytku osobistego. Możemy okazjonalnie wysyłać do Ciebie wiadomości e-mail z rekomendacjami dotyczącymi produktów. Nie przejmuj się, możesz w każdym momencie zrezygnować z subskrybcji, klikając w link w wiadomości e-mail.</p>
                   <Link to='/checkout/paymentmethod'><button className='summary__button btn btn-success'>Potwierdź i zapłać wybraną metodą</button></Link> 
               </div>
           </div>

         );
    }
}
 
export default Summary;