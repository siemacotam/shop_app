import React, { Component } from 'react';
import Login from '../pages/Login'
import Adress from '../pages/Adress'
import Payment from '../pages/Payment'
import Summary from '../pages/Summary'

class Checkout extends Component {
    state = { 
        activeStep: 1,
     }

     changeStep = (number) => {
        this.setState({
            activeStep: number
        })
     }


    render() { 
        return ( 
            <div className="checkoutMenu__wrap">
                <div className="checkoutMenu__stepsPanel">
                    <ul className="checkoutMenu__nav">
                        <li className={this.state.activeStep === 1 ? 'checkoutMenu__navElement stepActive' : 'checkoutMenu__navElement'}>Zaloguj się</li>
                        <li className={this.state.activeStep === 2 ? 'checkoutMenu__navElement stepActive' : 'checkoutMenu__navElement'}>Adres</li>
                        <li className={this.state.activeStep === 3 ? 'checkoutMenu__navElement stepActive' : 'checkoutMenu__navElement'}>Metoda płatności</li>
                        <li className={this.state.activeStep === 4 ? 'checkoutMenu__navElement stepActive' : 'checkoutMenu__navElement'}>Podsumowanie</li>
                        <li className={this.state.activeStep === 5 ? 'checkoutMenu__navElement stepActive' : 'checkoutMenu__navElement'}>Gotowe</li>
                     </ul>
                </div>
                {this.props.isLoggedIn ? (this.state.activeStep < 3 ? <Adress step={this.changeStep} activeUser={this.props.activeUser}/> : null) : <Login step={this.changeStep} user={this.props.user} isLoggedIn={this.props.isLoggedIn} logged ={this.props.logged} isClicked={this.props.isClicked} handleClick={this.props.handleClick}/>}
                {this.state.activeStep === 3 ? <Payment step={this.changeStep}/> : null}
                {this.state.activeStep === 4? <Summary step={this.changeStep}/> : null}
            </div>
         );
    }
}
 
export default Checkout;