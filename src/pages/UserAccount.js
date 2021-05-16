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
    state = { 
      showData: false,
      changeData: false,
     }

    getIndex = (login) => {
      return users.findIndex(obj => obj.login === this.props.activeUser.login);
  }


  handleChangeClick = () => {
    this.setState({
      changeData: !this.state.changeData
    })
  }

  handleShowClick = () => {
    this.setState({
      showData: !this.state.showData
    })
  }
  

    render() {     
      const userIndex = this.getIndex()
     let number = 1
     let dateNumber = 0

     return ( 
      <div className='userAccount'>
          <h1>Witaj {users[userIndex].login} :) </h1>
          <p className='userAccount__text text text--bold text--medium'>Dane użytkownika</p>
          <button onClick={this.handleShowClick}>pokaż /edytuj</button>
          {this.state.showData ? <UserPanel handleChangeClick={this.handleChangeClick} changeData={this.state.changeData} activeUser={this.props.activeUser}/> : null}
          <p className='userAccount__text text text--bold text--medium'>Twoje zamówienia ({users[userIndex].bought.length})</p>
        <div>
          <div>
            
          <div className='userAccount__orderElement'>
            <p>numer zamówienia</p>
            <p>data zamówienia</p>
            <p>kwota zamówienia</p>
          <div>
            <div className='ordered'>
              <p>zamówienie</p>
              <p>cena</p>
            </div> </div>
            <p>status zamówienia:</p>
          </div>


            { users[userIndex].bought.length === 0 ? <p>brak zamówień</p> :
        
          users[userIndex].bought.map(item =>  
          <div className='userAccount__orderElement'>
            <p>{number++}</p><p> {users[userIndex].date[dateNumber++]}</p><p>{item.map(i => i.price).reduce((a, b) => a + b)}</p>
            <div>{item.map(i => {return (
              <div className='ordered'>
                <p>{i.name }</p>
                <p>{i.price}</p>
              </div> )} )} </div>
              <p> opłacono / w realizacji</p>
          </div>
          
          )}</div> 
        </div>
        

          <button onClick={this.props.unlogged} > <Link to={'/'}>wyloguj</Link></button>
      </div>
   );
    }
}
 
export default UserAccount;