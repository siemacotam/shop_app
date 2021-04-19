import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'mp3 1',
        img: '../images/mp3 1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'mp3 2',
        img: '../images/mp3 2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'mp3 3',
        img: '../images/mp3 3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
    {
        name: 'mp3 4',
        img: '../images/mp3 4.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
    },
    {
        name: 'mp3 5',
        img: '../images/mp3 1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
    },
    {
        name: 'mp3 6',
        img: '../images/mp3 2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
    },
]

class Mp3s extends Component {
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
 
export default Mp3s;
