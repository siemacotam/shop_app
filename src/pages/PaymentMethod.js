import React from 'react';
import {selectedPaymentMethod} from '../pages/Payment'
import {Link} from 'react-router-dom'
import '../styles/PaymentMethods.css'

const PaymentMethod = () => {
    window.scrollTo(0,0)
    return ( 
        <div className='paymentMethod'>
            <h3 className='paymentMethod__title'>{selectedPaymentMethod}</h3>
            <h5>Wierze że jesteś właścicielem konta.</h5>
            <p> Potwierdź płatność</p>
            {selectedPaymentMethod === 'BLIK' ? <p>Podaj kod <input type="number" /> </p> : null }
            <Link to='/checkout/ordered'> <button>Akceptuj</button></Link>
            <Link to='/shoppingcart'> <button>Odrzuć</button></Link>
        </div>
     );
}
 
export default PaymentMethod;