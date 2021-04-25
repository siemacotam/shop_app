import React, { Component } from 'react';
import '../styles/Contact.css'
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    state = { 
        note:'',
        username: '',
        email: '',
        isEmpty: true,
        message: '',

        errors:{
            username: false,
            email: false,
            note: false,
        }
     }

     messages = {
         username_incorrect: 'Zbyt krótka nazwa użytkownika',
         email_incorrect: 'Niepoprawny format email',
         note_incorrect: 'Zbyt którka wiadomość'
     }
     
     handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
     }

     handleSubmit = (e) => {
        e.preventDefault()

        const validation= this.formValidation()

        if(validation.correct){
            this.setState({
                username:'',
                email:'',
                note:'',
                message: 'Wiadomość została wysłana',

                errors: {
                username: false,
                email: false,
                note: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email:!validation.email,
                    note: !validation.note,
                }
            })
        }
     }

     formValidation = () => {
        let username = false;
        let note = false;
        let email = false;
        let correct = false;

        if(this.state.username.length> 5){
            username = true;
        }
        if(this.state.note.length > 1){
            note = true;
        }
        if(this.state.email.indexOf('@') !== -1){
            email = true;
        }
        if(username && note && email){
            correct = true;
        }

        return ({
            correct,
            username,
            email,
            note,
        })
     }



    render() { 
        return ( 
        <>
            <form onSubmit={this.handleSubmit} className='contactForm' noValidate>
                <h3>Napisz do nas !</h3>
                <label htmlFor="username"> Imię : <br/>
                    <input id='username' name='username' type="text" value={this.state.username} placeholder='Twoje Imię' onChange={this.handleChange}/>
                    {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                </label>
                <label htmlFor="email"> Twój adres email: <br/>
                    <input id='email' name ='email' type="email" value={this.state.email}
                     onChange={this.handleChange} 
                     placeholder='Twój adres email'/>
                     {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                </label>
                <textarea id='note' name='note' cols="30" rows="10" value={this.state.note} 
                onChange={this.handleChange} 
                placeholder='Wpisz wiadomość...'></textarea>
                 {this.state.errors.note && <span>{this.messages.note_incorrect}</span>}
                <button>Wyślij</button>
                {this.state.message && <h1>{this.state.message}</h1>}
            </form>
            <Prompt
            when={!this.state.isEmpty}
            message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę"
            />
        </>
         );
    }
}
 
export default Contact;