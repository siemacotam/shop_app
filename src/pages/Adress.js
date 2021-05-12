import React, { Component } from 'react';    
import '../styles/Adress.css'   
import {users} from '../pages/UserAccount'
import {Link} from 'react-router-dom'
import {activeUserIndex} from '../pages/LoginMenu'

class Adress extends Component {
    state = { 
        phone: users[activeUserIndex].phone
     }

     handleSubmit = (e) => {
         e.preventDefault()

         this.setState({
             phone: '',
         })


         users.map(item => {if(users[activeUserIndex].login === item.login) return item.phone = this.state.phone})
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
                    <p>{users[activeUserIndex].name} {users[activeUserIndex].surname}</p>
                    <p>{users[activeUserIndex].adress} {users[activeUserIndex].adressNumber}</p>
                    <p>{users[activeUserIndex].postcode} {users[activeUserIndex].city}</p>
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
                 ><Link to ='/checkout/payment'>dalej</Link> </button></div>
            </div>
         );
    }
}
 
export default Adress;