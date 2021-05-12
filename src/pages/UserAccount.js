import React, { Component } from 'react';
import '../styles/UserAccount.css'
import {Link} from 'react-router-dom'
import UserPanel from '../pages/UserPanel'


export let users = [
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

    getIndex = (login) => {
      return users.findIndex(obj => obj.login === this.props.activeUser.login);
  }


  

    render() {     
      const userIndex = this.getIndex()
     let number = 1
     let dateNumber = 0

     return ( 
      <div className='userPanel'>
          <h1>Witaj {users[userIndex].login} :) </h1>
          <p>Dane użytkownika</p>
          <UserPanel activeUser={this.props.activeUser}/>
          <p>Twoje zamówienia ({users[userIndex].bought.length})</p>
        <div>
          <div>{ users[userIndex].bought.length === 0 ? <p>brak zamówień</p> :
          users[userIndex].bought.map(item =>  
          <div>
            <p>{number++}</p><p>data zamówienia {users[userIndex].date[dateNumber++]}</p><p>{item.map(i => i.price).reduce((a, b) => a + b)}</p>
            <div>{item.map(i => {return (
              <div className='ordered'>
                <p>{i.name }</p>
                <p>{i.price}</p>
              </div> )} )} </div>
          </div>
          
          )}</div> 
        </div>
        

          <button onClick={this.props.unlogged} > <Link to={'/'}>wyloguj</Link></button>
      </div>
   );

        // return ( 
        //     <div className='userPanel'>
        //         <h1>Witaj {this.props.activeUser.name} :) </h1>
        //         <p>Dane użytkownika</p>
        //         <UserPanel activeUser={this.props.activeUser}/>
        //         <p>Twoje zamówienia</p>
        //         <p>{ userOrders.map(item => {return <div className='ordersWrap'> 
        //         siema
        //         <p>{number++}</p> 
        //          <p>{item.map(i=>i.price).reduce((a, b) => a + b)}</p> 
        //          <div>{item.map(i => {return (
        //             <div className='ordered'>
        //               <p>{i.name }</p>
        //               <p>{i.price}</p>
        //             </div> )} )} </div>
        //             <p>data zamówienia {user[0].date[dateNumber++]}</p> 
        //             </div> })
        //           }</p>

              

        //         <button onClick={this.props.unlogged} > <Link to={'/'}>wyloguj</Link></button>
        //     </div>
        //  );
    }
}
 
export default UserAccount;