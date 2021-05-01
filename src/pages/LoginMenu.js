import React, { Component } from 'react';
import '../styles/LoginMenu.css'
import {users} from '../pages/UserAccount'



class LoginMenu extends Component {
    
    state = { 
        username: '',
        password: '',
        validation: false,
        logMessage: '',
        errors: {
            username: false,
            password: false,
            loginPass: false,
          },
     }

     messages = {
        username_incorrect: ' Nazwa musi mieć minimum 3 znaków i nie może zawierać przerwy.',
        password_incorrect: ' Hasło musi posiadać min 3 znaków i nie może zawierać przerwy',
        loginPass_incorrect: 'Login lub hasło nieprawidłowe'
      }

    
      handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
          [name]: value
        })
      }
    
      formValidation = () => {
        let username = false;
        let password = false;
        let correct = false;
        let loginPass = false;

        const user = users.filter(item => {if(item.login === this.state.username) return 1})
        const userData = user[0]    
        console.log(userData)
    
        if(this.state.username.length >4 && this.state.username.indexOf(' ') === -1 ){
          username = true
        }
        if(this.state.password.length >4 && this.state.password.indexOf(' ') === -1 ){
          password = true
        }
        if(user.length !== 0){
          if(this.state.username === userData.login && this.state.password === userData.password){
            loginPass = true
          }}
        if(username && password && loginPass){
          correct = true
        }
    
        return ({
          username,
          password,
          correct,
          loginPass,
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
    
        const validation = this.formValidation()
    
        if(validation.correct){
          this.setState({
            username: '',
            password: '',
            logMessage: 'Login i hasło prawidłowe',
    
            errors: {
              username: false,
              password: false,
              loginPass: false,
            },
          })
          const logged= this.props.logged
            logged()

            this.props.click()
        } else {
          this.setState({
            errors: {
              username: !validation.username,
              password: !validation.password,
              loginPass: !validation.loginPass,
            },
          })
        }
    
    }

    render() { 

      
        return ( 
            <div className='loginMenu'>
                  <h1 className='loginMenu__h1'>Zaloguj się</h1>
                  <form className='loginMenu__form' onSubmit={this.handleSubmit}>
                    <label htmlFor="user">
                        <input className='loginMenu__input input' type="text" id='user' name='username' value={this.state.username} placeholder='login' onChange={this.handleChange}/><br/>
                        {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                    </label>
                    <label htmlFor="password">
                        <input className='loginMenu__input input' type="password" id='password' name='password' placeholder='haslo' value={this.state.password} onChange={this.handleChange}/><br/>
                        {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
                    </label>
                    <button className="btn btn-success loginMenu__btn" disabled={!this.state.username && !this.state.password}>zaloguj</button>
                  </form>
                  {this.state.logMessage && <h3>{this.state.logMessage}</h3> }
                  {this.state.errors.loginPass && <span>{this.messages.loginPass_incorrect}</span>}
                  <button type="button" className="btn-close loginMenu__btn" aria-label="Close" onClick={this.props.click}></button>
             </div>
         );
    }
}
 
export default LoginMenu;