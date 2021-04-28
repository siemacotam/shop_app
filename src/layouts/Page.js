import React from 'react';
import Categories from '../pages/Categories'
import Blog from '../pages/Blog'
import ShoppingCart from '../pages/ShoppingCart.js'
import UserAccount from '../pages/UserAccount.js'
import Tv from '../pages/Tv'
import Mp3s from '../pages/Mp3s'
import Phones from '../pages/Phones'
import Laptops from '../pages/Laptops'
import Cars from '../pages/Cars'
import Search from '../pages/Search'
import {Route, Switch} from 'react-router-dom'
import Contact from '../pages/Contact'
import '../styles/Page.css'
import ErrorPage from '../pages/ErrorPage'
import Order from '../pages/Order'

const Page = (props) => {
    return ( 
        <>
            <div className="page__bg"></div>
            <Switch>
                <Route path='/' exact component={Blog}></Route>
                <Route path='/categories' exact component={Categories}></Route>
                <Route path='/shoppingcart' render={() => <ShoppingCart isLoggedIn={props.isLoggedIn} />} ></Route>
                {props.isLoggedIn ?  <Route path='/user' component={UserAccount}></Route> : null }
                {/* <Route path='/categories/:id' component={}  ></Route> */}
                <Route path='/categories/tv'  component={Tv}></Route>
                <Route path='/categories/cars'  component={Cars}></Route>
                <Route path='/categories/laptops'  component={Laptops}></Route>
                <Route path='/categories/mp3s'  component={Mp3s}></Route>
                <Route path='/categories/phones'  component={Phones}></Route>
                <Route path='/search' component={Search}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/order' component={Order}></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
        </>
     );
}
 
export default Page;
