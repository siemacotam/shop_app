import React, { Component } from 'react';    
import '../styles/Adress.css'   
import {users} from '../pages/UserAccount'

class Adress extends Component {
    state = { 
        phone: this.props.activeUser.phone
     }

     handleSubmit = (e) => {
         e.preventDefault()

         this.setState({
             phone: '',
         })


         users.map(item => {if(this.props.activeUser.login === item.login) return item.phone = this.state.phone})
     }

     handleChange= (e) => {
        let number = e.target.value
         this.setState({
             phone: number
         })
     }

     componentDidMount(){
         this.props.step(2)
     }


    render() { 
        return ( 
            <div className='checkoutMenu__adress'>
                <div className='checkoutMenu__adressElement'>
                    <p className='checkoutMenu__adressTitle'>
                        Adres dostawy
                    </p>
                    <p>{this.props.activeUser.name} {this.props.activeUser.surname}</p>
                    <p>{this.props.activeUser.adress} {this.props.activeUser.adressNumber}</p>
                    <p>{this.props.activeUser.postcode} {this.props.activeUser.city}</p>
                </div>
                <div className='checkoutMenu__adressElement'>
                <p className='checkoutMenu__adressTitle'>
                        Adres rachunku
                    </p>
                    <p>Taki jak adres dostawy.</p>
                </div>
                <div className='checkoutMenu__adressElement'>
                <p className='checkoutMenu__adressTitle'>
                        Dane kontaktowe
                    </p>
                    <p>Podczas dostawy może być potrzebny twój numer telefonu. Jeżeli podany numer nie jest aktualny, prosze wprowadzić nowy numer.</p>
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.props.activeUser.phone} onChange={this.handleChange} value={this.state.phone}/> <button>zmień</button>
                    </form>
                </div >
                <div className='checkoutMenu__buttonDiv' ><button 
                onClick={() => {this.props.step(3)}
                }
                 >dalej</button></div>
            </div>
         );
    }
}
 
export default Adress;