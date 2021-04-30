import React from 'react';
import Categories from '../pages/Categories'
import Blog from '../pages/Blog'
import ShoppingCart from '../pages/ShoppingCart.js'
import UserAccount from '../pages/UserAccount.js'
import Search from '../pages/Search'
import {Route, Switch} from 'react-router-dom'
import Contact from '../pages/Contact'
import '../styles/Page.css'
import ErrorPage from '../pages/ErrorPage'
import Checkout from '../pages/Checkout'
import ItemsList from '../pages/ItemsList'
import {orders} from '../pages/ShoppingCart'

const Page = (props) => {
    return ( 
        <>
            <div className="page__bg"></div>
            <Switch>
                <Route path='/' exact component={Blog}></Route>
                <Route path='/categories' exact component={Categories}></Route>
                <Route path='/categories/:id' component={ItemsList} ></Route>
                <Route path='/shoppingcart' render={() => <ShoppingCart isLoggedIn={props.isLoggedIn} />} ></Route>
                {props.isLoggedIn ?  <Route path='/user' component={UserAccount}></Route> : null }
                <Route path='/search' component={Search}></Route>
                <Route path='/contact' component={Contact}></Route>
                 <Route path='/checkout' render={() => <Checkout isLoggedIn={props.isLoggedIn} logged ={props.logged} isClicked={props.isClicked} handleClick={props.handleClick}/>
                 } ></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
        </>
     );
}
 
export default Page;
