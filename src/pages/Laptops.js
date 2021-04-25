import React, { Component } from 'react';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'laptop1',
        img: '../images/laptop1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
    {
        name: 'laptop2',
        img: '../images/laptop2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'laptop3',
        img: '../images/laptop3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
    {
        name: 'laptop4',
        img: '../images/laptop4.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
        amount: '1',
    },
    {
        name: 'laptop5',
        img: '../images/laptop1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
        amount: '1',
    },
    {
        name: 'laptop6',
        img: '../images/laptop2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
        amount: '1',
    },
]

export const laptops = data

class Laptops extends Component {
    state = {  }

    render() { 
        return ( 
            <>
            <div className="backButton"><Link to="/categories">Powrót do listy produktów</Link></div>
            <Item data={data}/>
            </>
         );
    }
}
 
export default Laptops;
