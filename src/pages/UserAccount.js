import React, { Component } from 'react';
import '../styles/UserAccount.css'
import {Link} from 'react-router-dom'


export const users = [
    {
      login: 'user1',
      password: '123456',
      name: 'jan',
      surname:'nowak',
      email:'jnowak@wp.pl',
      adress: 'dluga',
      adressNumber: '21',
      city: 'kalisz',
      postcode: 62800,
      phone: 123456789,
      bought: [],
      date: [],
    },
    {
      login: 'adminadmin',
      password: 'adminadmin',
      name: 'Grzegorz',
      surname:'Celek',
      email:'g.celek@gmail.com',
      adress: 'Migdałowa',
      adressNumber: '21',
      city: 'kalisz',
      postcode: 62800,
      phone: 791090708,
      bought: [],
      date: [],
    }
  ]

class UserAccount extends Component {
    state = {  }


    render() {     


     const user = users.filter(item => {if(this.props.activeUser.login === item.login) return item.login})
     const userOrders = user[0].bought
     console.log(userOrders)
     

     let number = 1
     let dateNumber = 0

        return ( 
            <div className='userPanel'>
                <h1>Witaj {this.props.activeUser.name} :) </h1>
                <p>Dane użytkownika</p>




                <p>{this.props.activeUser.login}{this.props.activeUser.email}{this.props.activeUser.city}{this.props.activeUser.surname}</p>
                <p>Twoje zamówienia</p>
                <p>liczba zamówień {userOrders.length}</p>
                <p>{
                  userOrders.map(item => {return <div className='ordersWrap'> <p>{number++}</p>  <p>{item.map(i=>i.price).reduce((a, b) => a + b)}</p> <div>{item.map(i => {return (
                    <div className='ordered'>
                      <p>{i.name }</p>
                      <p>{i.price}</p>
                    </div> )} )} </div>
                    <p>data zamówienia {user[0].date[dateNumber++]}</p> </div> })
                  }</p>

              

                <button onClick={this.props.unlogged} > <Link to={'/'}>wyloguj</Link></button>
            </div>
         );
    }
}
 
export default UserAccount;