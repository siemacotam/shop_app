import React, { Component } from 'react';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'tv 1',
        img: '../images/tv1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
    {
        name: 'tv 2',
        img: '../images/tv2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'tv 3',
        img: '../images/tv3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
    {
        name: 'tv 4',
        img: '../images/tv1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
        amount: '1',
    },
    {
        name: 'tv 5',
        img: '../images/tv2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
        amount: '1',
    },
    {
        name: 'tv 6',
        img: '../images/tv3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
]

export const tv = data

class Tv extends Component {
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
 
export default Tv;
