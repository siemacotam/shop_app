import React, { Component } from 'react';
import {laptops} from '../pages/Laptops';
import {mp3} from '../pages/Mp3s';
import {phones} from '../pages/Phones';
import {tv} from '../pages/Tv';
import {cars} from '../pages/Cars';
import Item from '../components/Item'
import '../styles/Search.css'

let products = laptops.concat( mp3, phones, tv, cars);


class Search extends Component {


    state = { 
        value: '',
        items: []
     }

    handleChange = (e) => {
            this.setState({
                value: e.target.value,
            })
        }

        prevent = (e) => {
            e.preventDefault();
        }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }

    render() { 
        const data = products.filter(item => {return !( item.name.indexOf(this.state.value))})
        const data2 = products.filter(item => {return ( item.name.indexOf(this.state.value))})
        
        return ( 
            <>
                <form className='searchForm'>
                    <p>Wyszukaj przedmiotu, który Cię interesuje: </p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="produkt..."></input>
                    <button onClick ={this.prevent}>Znajdż mnie</button>
                    <button onClick ={this.handleClick}>wyczyść wyszukiwanie</button>
                    {(this.state.value && products.length === data2.length) ? <p>nie znaleziono wyszukiwanych produktów</p> : null }
                </form>
                {this.state.value ? <Item data={data}/> : null}
               
            </>
         );
    }
}
 
export default Search;