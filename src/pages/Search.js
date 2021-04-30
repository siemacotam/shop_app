import React, { Component } from 'react';
import {products} from '../components/Item'
import '../styles/Search.css'
import ItemSearch from '../components/ItemSearch'

class Search extends Component {

    state = { 
        value: '',
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

    componentDidMount() {
        window.scrollTo(0,400)
      }

    render() { 
        const data = products.filter(item => {return !( item.name.indexOf(`${this.state.value}`))})
        const data2 = products.filter(item => {return ( item.name.indexOf(`${this.state.value}`))})
        
        return ( 
            <>
                <form className='searchForm'>
                    <p className='searchForm__title' >Wyszukaj przedmiotu, który Cię interesuje: </p>
                    <input className='searchForm__input input'  type="text" value={this.state.value} onChange={this.handleChange} placeholder="produkt..."></input>
                    <button className='searchForm__button btn btn-dark'  onClick ={this.prevent}>Znajdż mnie</button>
                    <button className='searchForm__button btn btn-dark' onClick ={this.handleClick}>Wyczyść wyszukiwanie</button>
                    {(this.state.value && products.length === data2.length) ? <p className='searchForm__info' >Nie znaleziono wyszukiwanych produktów</p> : null }
                </form>
                {this.state.value && data.length > 0 ? <ItemSearch data={data}/> : null}
               
            </>
         );
    }
}
 
export default Search;