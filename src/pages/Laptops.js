import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'laptop1',
        img: '../images/laptop1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'laptop2',
        img: '../images/laptop2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'laptop3',
        img: '../images/laptop3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'laptop4',
        img: '../images/laptop4.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'laptop5',
        img: '../images/laptop1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
    {
        name: 'laptop6',
        img: '../images/laptop2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
]

export const laptops = data

class Laptops extends Component {
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
 
export default Laptops;
