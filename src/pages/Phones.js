import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'phone 1',
        img: '../images/phone1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'phone 2',
        img: '../images/phone2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'phone 3',
        img: '../images/phone3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'phone 4',
        img: '../images/phone1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'phone 5',
        img: '../images/phone2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
]
export const phones = data

class Phones extends Component {
    state = {  }

    render() { 
        return ( 
            <>
            <div className="bg"></div>
            <Item data={data}/>
            </>
         );
    }
}
 
export default Phones;
