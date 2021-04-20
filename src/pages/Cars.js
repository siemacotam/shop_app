import React, { Component } from 'react';
import Item from '../components/Item'

const data = [
    {
        name: 'car1',
        img: '../images/car1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
    },
    {
        name: 'car2',
        img: '../images/car2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
    },
    {
        name: 'car3',
        img: '../images/car3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
    },
]
export const cars = data

class Cars extends Component {
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
 
export default Cars;
