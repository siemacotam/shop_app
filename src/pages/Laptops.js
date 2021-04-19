import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'laptop1',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'laptop2',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'laptop3',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'laptop4',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'laptop5',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
    {
        name: 'laptop6',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
]

class Laptops extends Component {
    state = {  }

    render() { 
        return ( 
            <Item data={data}/>
         );
    }
}
 
export default Laptops;
