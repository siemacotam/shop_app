import React, { Component } from 'react';
import '../styles/UserAccount.css'

class UserAccount extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='userPanel'>
                <h1>Witaj użytkowniku</h1>
                <p>dane użytkownika</p>
                <p>ustawienia konta</p>
                <p>twoje zakupy</p>
            </div>
         );
    }
}
 
export default UserAccount;