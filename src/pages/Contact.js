import React, { Component } from 'react';
import '../styles/Contact.css'
import { Prompt } from 'react-router-dom';
import Mapa from '../pages/Mapa'


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

        if(value.length > 0 ){
            this.setState({
                isEmpty: false
            })
        } else {
            this.setState({
                isEmpty: true
            })
        }

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
                isEmpty: true,

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
        <div className="contact__wrap">
            <div className="about">
                <h3>Celek.pl</h3>
                <p>Migdałowa 21 62-800 Kalisz</p>
                <p>791 090 708</p>
                <p>g.celek@gmail.com</p>
                <p>NIP 8942911622</p>
                <div className='about__map'><Mapa /></div>



            </div>
            <form className="contactForm" onSubmit={this.handleSubmit} noValidate>
                <h3 className='contactForm__title'>Napisz do nas !</h3>
                <label className='contactForm__label' htmlFor="username"> Imię : <br/>
                    <input className='contactForm__input input' id='username' name='username' type="text" value={this.state.username} placeholder='Twoje Imię' onChange={this.handleChange}/><br/>
                    {this.state.errors.username && <span className='contactForm__validation'>{this.messages.username_incorrect}</span>}
                </label>
                <label className='contactForm__label' htmlFor="email"> Twój adres email: <br/>
                    <input className='contactForm__input input' id='email' name ='email' type="email" value={this.state.email}
                     onChange={this.handleChange} 
                     placeholder='Twój adres email'/> <br/>
                     {this.state.errors.email && <span className='contactForm__validation'>{this.messages.email_incorrect}</span>}
                </label>
                <textarea className="contactForm__text textarea" id='note' name='note' cols="30" rows="10" value={this.state.note} 
                onChange={this.handleChange} 
                placeholder='Wpisz wiadomość...'></textarea>
                 {this.state.errors.note && <span className='contactForm__validation' >{this.messages.note_incorrect}</span>}
                <button className="contactForm__button btn btn-success">Wyślij</button>
                {this.state.message && <span className='contactForm__validation contactForm__validation--sent'>{this.state.message}</span>}
            </form>
            <Prompt
            when={!this.state.isEmpty}
            message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę"
            />
        </div>
         );
    }
}
 
export default Contact;
