import React from 'react';
import Categories from '../pages/Categories'
import Main from '../pages/Main'
import LoginMenu from '../pages/LoginMenu'
import ShoppingCart from '../pages/ShoppingCart.js'
import UserAccount from '../pages/UserAccount.js'
import {Route} from 'react-router-dom'

const Page = (props) => {
    return ( 
        <>
            <Route path='/' exact component={Main}></Route>
            <Route path='/categories' component={Categories}></Route>
            <Route path='/shoppingcart' render={() => <ShoppingCart isLoggedIn={props.isLoggedIn} />
            } ></Route>
            {props.isLoggedIn ? 
                <Route path='/user' component={UserAccount}></Route> 
                : <Route path='/login' render={() => <LoginMenu logged ={props.logged}/>
            } ></Route>}
        </>
     );
}
 
export default Page;
