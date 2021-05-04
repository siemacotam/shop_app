import React, { Component } from 'react';
import {orders} from '../pages/ShoppingCart'
import {users} from '../pages/UserAccount'

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

    render() { 

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
                   <p>sprawdź i potwierdź zamówienie</p>
                   <button>Potwierdź i zapłać wybraną metodą</button>
               </div>
               <div className="summary__shipment">
                   <p>rodzaj przesyłki</p>
                   <p>opcje</p>
               </div>
               <div className="summary__orderDetails">
                   <p>Adres dostawy</p>
                   <p>dane</p>
                    <p>adres rachunku</p>
                    <p>dane</p>
                    <p>metoda płatności</p>
                    <p>metoda</p>
               </div>
               <div className="summary__order">
                   <p>zamówienie</p>
                   <div>
                       <ul>
                           {orderList}
                       </ul>
                   </div>
               </div>
               <div className="summary__orderButton">
                   <p>przesyłka</p>
                   <p>do zapłaty</p>
                   <button >Potwierdź i zapłać wybraną metodą</button>
               </div>
           </div>

         );
    }
}
 
export default Summary;