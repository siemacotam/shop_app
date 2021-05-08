import React, { Component } from 'react';
import LoginMenu from './LoginMenu'
import '../styles/Login.css'
import {users} from './UserAccount'
import {Link} from 'react-router-dom'

class Login extends Component {
    state = { 
        click: false,
        login: '',
        password: '',
        password2: '',
        name: '',
        surname:'',
        email:'',
        adress: '',
        adressNumber: '',
        city: '',
        postcode: '',
        phone: '',
        logMessage: '',

        errors: {
            login: false,
            loginDouble: false,
            password: false,
            password2: false,
            name: false,
            surname: false,
            email: false,
            adress: false,
            adressNumber: false,
            city: false,
            postcode: false,
            phone: false,
          },
     }

     messages = {
        login_incorrect: ' Nazwa musi mieć minimum 5 znaków i nie może zawierać przerwy.',
        loginDouble_incorrect: ' Login jest juz zajety.',
        password_incorrect: ' Hasło musi posiadać min 5 znaków i nie może zawierać przerwy',
        password2_incorrect: ' Hasło różni się od podanego wyżej',
        name_incorrect: ' Imię musi składać sie z min 3 znaków i nie może zawierać przerwy',
        surname_incorrect: ' Imię musi składać sie z min 3 znaków i nie może zawierać przerwy',
        email_incorrect: ' Adres musi zawierać @ ',
        adress_incorrect: ' Imię musi składać sie z min 3 znaków i nie może zawierać przerwy',
        adressNumber_incorrect: ' Brak podanej wartości',
        city_incorrect: ' Imię musi składać sie z min 3 znaków',
        postcode_incorrect: ' kod musi składać sie z min 3 znaków',
        phone_incorrect: ' Numer musi sie skladac z min 9 cyfr',
      }

     formValidation = () => {
        let login = false;
        let loginDouble = false;
        let password = false;
        let password2 = false;
        let name = false;
        let surname = false;
        let email = false;
        let adress = false;
        let adressNumber = false;
        let city = false;
        let postcode = false;
        let phone = false;
        let correct = false;

       let usedName = users.filter(item => {if(item.login === this.state.login) return 1})

        if(usedName.length === 0){
            loginDouble = true
          }
    
        if(this.state.login.length >=5 && this.state.login.indexOf(' ') === -1 ){
          login = true
        }
        if(this.state.password.length >=5 && this.state.password.indexOf(' ') === -1 ){
          password = true
        }
        if(this.state.password2 === this.state.password){
            password2 = true
        }
        if(this.state.name.length >=3 && this.state.password.indexOf(' ') === -1){
            name = true
          }
        if(this.state.surname.length >=3 && this.state.password.indexOf(' ') === -1 ){
            surname = true
          }
        if (this.state.email.indexOf('@') !== -1) {
            email = true;
          }
          if(this.state.adress.length >=3 ){
            adress = true
          }
          if(this.state.adressNumber>0){
            adressNumber = true
          }
          if(this.state.city.length >=3 ){
            city = true
          }
          if(true){
            postcode = true
          }
          if(this.state.phone >0){
            phone = true
          }


        if(login && loginDouble && password && password2 && name && surname && email && adress && adressNumber && city && postcode && phone){
          correct = true
        }
    
        return ({
          login,
          loginDouble,
          password,
          password2,
          name,
          surname,
          email,
          adress,
          adressNumber,
          city,
          postcode,
          phone,
          correct,
        })
      }

    handleRegisterClick= () => {
      this.setState({
        click: !this.state.click
      })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        const validation = this.formValidation()
    
        if(validation.correct){
          this.setState({
        login: '',
        password: '',
        password2: '',
        name: '',
        surname:'',
        email:'',
        adress: '',
        adressNumber: null,
        city: '',
        postcode: null,
        phone: null,
        logMessage: 'konto zostało założone',

        errors: {
            login: false,
            loginDouble: false,
            password: false,
            password2: false,
            name: false,
            surname: false,
            email: false,
            adress: false,
            adressNumber: false,
            city: false,
            postcode: false,
            phone: false,
          }})
          const newUser = {
            login: this.state.login,
            password: this.state.password,
            password2: this.state.password2,
            name: this.state.name,
            surname:this.state.surname,
            email:this.state.email,
            adress: this.state.adress,
            adressNumber: this.state.adressNumber,
            city: this.state.city,
            postcode: this.state.postcode,
            phone: this.state.phone,
          }
          users.push(newUser);
          this.props.logged()
          this.props.user(newUser)
          
        } else {
          this.setState({
            errors: {
                login: !validation.login,
                loginDouble: !validation.loginDouble,
                password: !validation.password,
                password2: !validation.password2,
                name: !validation.name,
                surname: !validation.surname,
                email: !validation.email,
                adress: !validation.adress,
                adressNumber: !validation.adressNumber,
                city: !validation.city,
                postcode: !validation.postcode,
                phone: !validation.phone,
              },
          })
        }
    
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
          [name]: value
        })
      }

      componentDidMount(){
        this.props.step(1)
    }


    render() { 
        return ( 
           <div className="checkoutMenu">
                <div className='checkoutMenu__logPanel'>
                { this.props.isLoggedIn? 
                <div>
                  <h4>Witaj {this.props.activeUser.name}</h4>
                  <p>Kliknij aby kontynuować zamówienie</p>
                  <button className='btn btn-success'><Link to='/checkout/adress'>Dalej</Link></button>
                </div> : <div>
                            <h4>Witaj ponownie</h4>
                            <button onClick={this.props.handleClick} type="button" className=" btn btn-primary">zaloguj</button>
                        </div>}
                        {this.props.isClicked ? <LoginMenu  user={this.props.user} logged ={this.props.logged} click={this.props.handleClick}/> : null}
                </div>
                <div className="checkoutMenu__newUserPanel">
                    <div className={this.state.click ? "checkoutMenu__head" : null}>
                    <p className='checkoutMenu__title'>Jestes nowy ?</p>
                    <button disabled ={this.props.isLoggedIn} onClick={this.handleRegisterClick} className=" btn btn-primary">zarejestruj się</button>
                    </div>
                    <div className={this.state.click ? "checkoutMenu__register" : "checkoutMenu__register hide"}>
                        <form className="checkoutMenu__form" onSubmit={this.handleSubmit}>
                            <label htmlFor="name" className="checkoutMenu__label">name 
                                <input type="text" className="checkoutMenu__input input" id='name' name='name' value={this.state.name} placeholder='name' onChange={this.handleChange}/><br/>
                                {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
                            </label>
                            <label htmlFor="surname" className="checkoutMenu__label">surname 
                                <input type="text" className="checkoutMenu__input input" id='surname' name='surname' value={this.state.surname} placeholder='surname' onChange={this.handleChange}/><br/>
                                {this.state.errors.surname && <span>{this.messages.surname_incorrect}</span>}
                            </label>
                            <label htmlFor="login" className="checkoutMenu__label">Login 
                                <input type="text" className="checkoutMenu__input input" id='login' name='login' value={this.state.login} placeholder='login' onChange={this.handleChange}/><br/>
                                {this.state.errors.login && <span>{this.messages.login_incorrect}</span>}
                                {this.state.errors.loginDouble && <span>{this.messages.loginDouble_incorrect}</span>}
                            </label>
                            <label htmlFor="password" className="checkoutMenu__label">password 
                                <input type="password" className="checkoutMenu__input input" id='password' name='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/><br/>
                                {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
                            </label>
                            <label htmlFor="password2" className="checkoutMenu__label">repeat password
                                <input type="password" className="checkoutMenu__input input" id='password2' name='password2' value={this.state.password2} placeholder='password' onChange={this.handleChange}/><br/>
                                {this.state.errors.password2 && <span>{this.messages.password2_incorrect}</span>}
                            </label>
                            <label htmlFor="email" className="checkoutMenu__label">email 
                                <input type="email" className="checkoutMenu__input input" id='email' name='email' value={this.state.email} placeholder='email' onChange={this.handleChange}/><br/>
                                {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                            </label>
                            <label htmlFor="phone" className="checkoutMenu__label">phone 
                                <input type="number" className="checkoutMenu__input input" id='phone' name='phone' value={this.state.phone} placeholder='phone' onChange={this.handleChange}/><br/>
                                {this.state.errors.phone && <span>{this.messages.phone_incorrect}</span>}
                            </label>
                            <label htmlFor="adress" className="checkoutMenu__label">adress 
                                <input type="text" className="checkoutMenu__input input" id='adress' name='adress' value={this.state.adress} placeholder='adress' onChange={this.handleChange}/><br/>
                                {this.state.errors.adress && <span>{this.messages.adress_incorrect}</span>}
                            </label>
                            <label htmlFor="adressNumber" className="checkoutMenu__label">adressNumber 
                                <input type="number" className="checkoutMenu__input input" id='adressNumber' name='adressNumber' value={this.state.adressNumber} placeholder='adressNumber' onChange={this.handleChange}/><br/>
                                {this.state.errors.adressNumber && <span>{this.messages.adressNumber_incorrect}</span>}
                            </label>
                            <label htmlFor="city" className="checkoutMenu__label">city 
                                <input type="text" className="checkoutMenu__input input" id='city' name='city' value={this.state.city} placeholder='city' onChange={this.handleChange}/><br/>
                                {this.state.errors.city && <span>{this.messages.city_incorrect}</span>}
                            </label>
                            <label htmlFor="postCode" className="checkoutMenu__label">postCode 
                                <input type="text" pattern="[0-9]{5}" title="Five digit zip code" className="checkoutMenu__input input" id='postCode' name='postCode' value={this.state.postCode} placeholder='postCode' onChange={this.handleChange}/><br/>
                                {this.state.errors.postcode && <span>{this.messages.postcode_incorrect}</span>}
                            </label><br/>
                            <button className=" btn btn-primary">załóż konto</button><br/>
                            {this.state.logMessage && <h3>{this.state.logMessage}</h3> }
                        </form>
                        {this.props.isLoggedIn ? null : <button onClick={this.handleRegisterClick} className=" btn btn-primary">powrót</button>}
                    </div>
                </div>
           </div>
         );
    }
}
 
export default Login;