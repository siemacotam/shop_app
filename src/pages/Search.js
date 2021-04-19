import React, { Component } from 'react';

class Search extends Component {
    state = { 
        value: '',
        items: []
     }

     handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }

    handleChange = (e) => {
            this.setState({
                value: e.target.value,
            })
        }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }

    render() { 
        return ( 
            <div className="search">
                <form onSubmit = {this.changeSubmit}>
                    <p>Wyszukaj przedmiotu, który Cię interesuje: </p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="produkt..."></input>
                    <button onClick ={this.handleClick}>znajdź mnie</button>
                </form>
            </div>
         );
    }
}
 
export default Search;