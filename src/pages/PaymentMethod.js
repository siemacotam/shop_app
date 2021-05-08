import React from 'react';
import {selectedPaymentMethod} from '../pages/Payment'
import {Link} from 'react-router-dom'

const PaymentMethod = () => {
    return ( 
        <div>
            <h5>{selectedPaymentMethod}</h5>
            <h3>Wierze że jesteś właścicielem konta.</h3>
            <p> Potwierdź płatność</p>
            {selectedPaymentMethod === 'BLIK' ? <p>Podaj kod <input type="number" /> </p> : null }
            <Link to='/checkout/ordered'> <button>Akceptuj</button></Link>
            <Link to='/shoppingcart'> <button>Odrzuć</button></Link>
        </div>
     );
}
 
export default PaymentMethod;