import React, { Component } from 'react';
import {orders} from '../pages/ShoppingCart'
import {users} from '../pages/UserAccount'

class Ordered extends Component {
    state = {  }

    kupione = () => {
        const boughtItems = orders
        users.map(item => {if(this.props.activeUser.login === item.login) return 
            item.bought=[1,2,3];
            console.log(item.bought)
        })
    }

    componentDidMount(){
        this.props.step(5)
        this.kupione()
        orders.splice(0,orders.length)
        // console.log(users)
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