import React, { Component } from 'react';
import Item from '../components/Item'
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'car1',
        img: '../images/car1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
    {
        name: 'car2',
        img: '../images/car2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'car3',
        img: '../images/car3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
]
export const cars = data

class Cars extends Component {
    state = {  }

    componentDidMount() {
        window.scrollTo(0,400)
      }


    render() { 
        return ( 
            <>
            <div className="backButton"><Link to="/categories">Powrót do listy produktów</Link></div>
            <Item data={data}/>
            </>
         );
    }
}
 
export default Cars;
