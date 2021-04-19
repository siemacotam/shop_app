import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'car1',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'car2',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'car3',
        img: '../images/logo.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
]

class Cars extends Component {
    state = {  }

    render() { 
        return ( 
            <Item data={data}/>
         );
    }
}
 
export default Cars;
