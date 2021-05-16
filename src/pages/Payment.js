import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/Payment.css'
import { activeUserIndex } from './LoginMenu';
import {users} from '../pages/UserAccount'
import {orders} from '../pages/ShoppingCart'

export let selectedPaymentMethod = '';

class Payment extends Component {

    state = { 
        value: 1,
     }


     handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        selectedPaymentMethod = e.target.value
     }

     componentDidMount(){
        this.props.step(3)
    }
     
    render() { 
        return ( 
            <div className="payment__wrap">
                <div className='payment__pick'>
                    <form onChange={this.handleChange} className='payment__form'>
                        <select className="selectpicker payment__select select" data-style="btn-success">
                            <option value= "1">Wybierz sposób płatności</option>
                            <option value='BLIK'>Szybki przelew/ BLIK </option>
                            <option value='PayPal'>PayPal </option>
                            <option value='Karta Płatnicza'>Karta Płatnicza </option>
                            <option value='Za pobraniem'>Za pobraniem </option>
                        </select>
                    </form>
                    <div className="payment__data">
                    {this.state.value === "BLIK" ? <p>Po złożeniu zamówienia zostaniesz przekierowany na stronę Przelewy 24, gdzie będziesz mógł zlecić przelew bezpośrednio z Twojego banku. Po pomyślnej realizacji płatności zamówienie zostanie sfinalizowane.</p> : null}
                    {this.state.value === 'PayPal' ? <p>Zostaniesz przeniesiony do strony PayPal, aby dokończyć proces płatności.</p>  : null}
                    {this.state.value === 'Karta Płatnicza' ?  
                    <div className='payment__form'><p>Zasady dotyczące płatności kartą płatniczą w Unii Europejskiej się zmieniają. Wkrótce będziesz musiał/musiała potwierdzić swoją tożsamość przy każdej płatności online. Skonaktuj się ze swoim bankiem, aby to skonfigurować.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label >Imię i nazwisko na karcie<input type="text"/></label>
                        <label >Numer karty płatniczej<input type="text"/></label>
                        <label >Ważność<input type="text"/></label>
                        <label >Numer kontrolny karty płatniczej<input type="text"/></label>
                        <button >dalej</button>
                    </form></div> : null}
                    {this.state.value === 'Za pobraniem' ? 
                    <>
                            <p>Adres dostawy: 
                                <p>{users[activeUserIndex].name} {users[activeUserIndex].surname }</p>
                                <p>{users[activeUserIndex].adress} {users[activeUserIndex].adressNumber }</p>
                                <p>{users[activeUserIndex].postcode} {users[activeUserIndex].city}</p>
                                <p>{ users[activeUserIndex].phone} </p>
                        </p>
                            <p className='payment__text'>Aktualnie staramy się zrobić jak najwięcej, aby ograniczyć osobiste kontakty. Z tego powodu, zachęcamy Cię do wybrania płatności online (bezdotykowych) za Twoje zamówienie. Jeśli jednak zdecydujesz się na płatność „za pobraniem”, prosimy o przygotowanie odliczonej kwoty dla kuriera.</p>
                         </> : null}
                </div></div>
                <div className='pament__summary'>
                    <p>przesyłka</p>  <p>10 zł</p>
                    <p>łączna kwota</p> <p>{orders.length > 0 ? (orders.map(item=>item.price)).reduce((a, b) => a + b) + 10 : 0 } zł</p>
                    <Link to='/checkout/summary'>
                {/* {this.state.value === 'Karta Płatnicza' ? null : */}
                <button disabled={this.state.value == 1} onClick={() => {this.props.step(4)}}> Dalej</button>
                {/* } */}
                </Link></div>
            </div>
         );
    }
}
 
export default Payment;