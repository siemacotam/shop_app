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
      postcode: 62-800,
      phone: 123456789,
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
      postcode: 62-800,
      phone: 791090708,
    }
  ]

class UserAccount extends Component {
    state = {  }


    render() { 

        const user = users.filter(item => {if(item.login === this.state.username) return 1})

    
       

        return ( 
            <div className='userPanel'>
                <h1>Witaj  :) </h1>
                <p>dane użytkownika</p>
                <p>ustawienia konta</p>
                <p>twoje zakupy</p>
                <button onClick={this.props.unlogged} > <Link to={'/'}>wyloguj</Link></button>
            </div>
         );
    }
}
 
export default UserAccount;