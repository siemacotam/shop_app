import React, { Component } from 'react';
import {orders} from '../pages/ShoppingCart'
import {users} from '../pages/UserAccount'
import {activeUserIndex} from '../pages/LoginMenu'

class Ordered extends Component {
    state = {  }

    kupione = () => {

        const today = Date.now();
        let date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)

        const user =users.filter(item => {if(users[activeUserIndex].login === item.login) return item
        })
        const order = [...orders] 
        user[0].bought.push(order)
        user[0].date.push(date)
    }

    componentDidMount(){
        this.props.step(5)
        this.kupione()
        orders.splice(0,orders.length)
        window.scrollTo(0,0)
    }

    render() { 
        return ( 
            <div>
            zamówienie zostało zrealizowane. aby zobaczyć szczegóły sprawdź zakładkę moje konto
            </div>
         );
    }
}
 
export default Ordered;