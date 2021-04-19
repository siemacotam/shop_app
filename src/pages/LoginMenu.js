import React, { Component } from 'react';

class LoginMenu extends Component {
    
    state = { 
        username: '',
        password: '',
        validation: false,
        logMessage: '',
        errors: {
            username: false,
            password: false,
          },
     }

     messages = {
        username_incorrect: 'Login nieprawidłowy. Sprawdź poprawność i pamiętaj, że nazwa musi mieć minimum 10 znaków i nie może zawierać przerwy.',
        password_incorrect: 'Hasło nieprawidłowe.Sprawdź poprawność i pamiętaj że hasło musi posiadać min 6 znaków i nie może zawierać przerwy',
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
    
        if(this.state.username.length >=10 && this.state.username.indexOf(' ') === -1 && this.state.username === 'adminadmin'){
          username = true
        }
        if(this.state.password.length >6 && this.state.password.indexOf(' ') === -1 && this.state.password === 'adminadmin'){
          password = true
        }
        if(username && password){
          correct = true
        }
    
        return ({
          username,
          password,
          correct,
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
    
        const validation = this.formValidation()
        console.log(validation)
    
        if(validation.correct){
          this.setState({
            username: '',
            password: '',
            logMessage: 'Login i hasło prawidłowe',
    
            errors: {
              username: false,
              password: false,
            },
          })
          const logged= this.props.logged
            logged()
        } else {
          this.setState({
            errors: {
              username: !validation.username,
              password: !validation.password,
            },
          })
        }
    
    }


    render() { 
        return ( 
            <div className='wrap'>
         <h1>Zaloguj się</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="user"><p>login</p>
             <input type="text" id='user' name='username' value={this.state.username} onChange={this.handleChange}/>
             {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
        </label>
        <label htmlFor="password"><p>password</p>
             <input type="password" id='password' name='password' value={this.state.password} onChange={this.handleChange}/>
             {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
        </label>
        <button disabled={!this.state.username && !this.state.password}>zaloguj</button>
    </form>
    {this.state.logMessage && <h3>{this.state.logMessage}</h3> }
    </div>
         );
    }
}
 
export default LoginMenu;