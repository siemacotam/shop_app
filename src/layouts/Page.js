import React from 'react';
import Categories from '../pages/Categories'
import Main from '../pages/Main'
import ShoppingCart from '../pages/ShoppingCart.js'
import UserAccount from '../pages/UserAccount.js'
import Tv from '../pages/Tv'
import Mp3s from '../pages/Mp3s'
import Phones from '../pages/Phones'
import Laptops from '../pages/Laptops'
import Cars from '../pages/Cars'
import {Route} from 'react-router-dom'

const Page = (props) => {
    return ( 
        <>
            <Route path='/' exact component={Main}></Route>
            <Route path='/categories' component={Categories}></Route>
            <Route path='/shoppingcart' render={() => <ShoppingCart isLoggedIn={props.isLoggedIn} />} ></Route>
            {props.isLoggedIn ?  <Route path='/user' component={UserAccount}></Route> : null }
            <Route path='/tv' exact component={Tv}></Route>
            <Route path='/cars' exact component={Cars}></Route>
            <Route path='/laptops' exact component={Laptops}></Route>
            <Route path='/mp3s' exact component={Mp3s}></Route>
            <Route path='/phones' exact component={Phones}></Route>
        </>
     );
}
 
export default Page;
