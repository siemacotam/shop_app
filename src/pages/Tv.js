import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'tv 1',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'tv 2',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'tv 3',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'tv 4',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'tv 5',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
]

class Tv extends Component {
    state = {  }

    render() { 
        return ( 
            <Item data={data}/>
         );
    }
}
 
export default Tv;
