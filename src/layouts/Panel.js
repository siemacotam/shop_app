import React, {Component} from 'react';
import {NavLink , Link} from 'react-router-dom'
import '../styles/Panel.css'
import LoginMenu from '../pages/LoginMenu'
import {orders} from '../pages/ShoppingCart'

class Panel extends Component{
    state = {
        isClicked: false,
        orders: 0,
        isHovered: false,
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleMenuHover = () => {
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
            orders: orders.length
        }) },1)

    }


    render (){ 

        const items = ['Cars', 'Phones', 'Mp3s', 'Tv','Laptops']
        const categories = items.map(item=> <li className='slideMenu__element'><Link to ={`/categories/${item.toLowerCase()}`} className='slideMenu__link'>{item}</Link></li>  )

        return (
        <>
            <nav className='mainMenu'>
                <div className="mainMenu__logo">
                    <NavLink to ={'/'} exact ><img src="./images/logo.jpg" alt="logo"/></NavLink>
                </div>
                <ul className='mainMenu__wrap menuList'>
                        <li 
                        onMouseEnter={this.state.isHovered ? null : this.handleMenuHover} 
                        onClick={this.state.isHovered? this.handleMenuHover : null } 
                        onMouseLeave={this.state.isHovered ? this.handleMenuHover : null}

                        // onClick={this.handleMenuHover} 
                        // onMouseLeave={this.state.isHovered? this.handleMenuHover : null } 
                        className='mainMenu__element shopLi'>
                             <NavLink to ={'/categories'} exact >
                                shop
                            </NavLink>
                            <ul className={this.state.isHovered? "slideMenu": "slideMenu hide"} >
                                <li className='slideMenu__element'><Link to ={`/categories`} className='slideMenu__link'>{'All categories'}</Link></li>
                                 {categories}
                            </ul>
                        </li>
                        <li className='mainMenu__element'>
                            <NavLink to ={'/search'} exact >
                                <i className="fas fa-search"></i>
                            </NavLink>
                        </li>
                        <li className='mainMenu__element'>
                            <NavLink to ={'/shoppingcart'} exact >
                                <i className="fas fa-shopping-cart"> ({orders.length})
                            </i></NavLink>
                        </li>
                        <li className='mainMenu__element'>
                            <NavLink to ={'/contact'} exact>
                                <i className="fas fa-envelope"></i>
                            </NavLink>
                        </li>
                        { this.props.isLoggedIn? <li className='mainMenu__element'><NavLink to ={'/user'} exact >moje konto</NavLink></li>  : <li className='mainMenu__element'>
                            <button onClick={this.handleClick} type="button" className=" btn btn-primary">zaloguj</button>
                        </li>}
                </ul>
            </nav> 
            {this.state.isClicked ? <LoginMenu logged ={this.props.logged} click={this.handleClick}/> : null}
        </>
        )};
}
 
export default Panel;