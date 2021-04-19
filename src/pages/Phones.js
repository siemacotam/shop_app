import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'phone 1',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'phone 2',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'phone 3',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'phone 4',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'phone 5',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
    {
        name: 'phone 6',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
    {
        name: 'phone 7',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
    {
        name: 'phone 8',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
]

class Phones extends Component {
    state = {  }

    render() { 
        return ( 
            <Item data={data}/>
         );
    }
}
 
export default Phones;
