import React, { Component } from 'react';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'phone 1',
        img: '../images/phone1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
    {
        name: 'phone 2',
        img: '../images/phone2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'phone 3',
        img: '../images/phone3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
    {
        name: 'phone 4',
        img: '../images/phone1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
        amount: '1',
    },
    {
        name: 'phone 5',
        img: '../images/phone2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
        amount: '1',
    },
    {
        name: 'phone 6',
        img: '../images/phone3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'phone 7',
        img: '../images/phone1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
    {
        name: 'phone 8',
        img: '../images/phone2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
        amount: '1',
    },
    {
        name: 'phone 9',
        img: '../images/phone3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
        amount: '1',
    },
]
export const phones = data


class Phones extends Component {
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
 
export default Phones;
