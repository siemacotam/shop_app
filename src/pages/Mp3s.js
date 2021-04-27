import React, { Component } from 'react';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'mp3 1',
        img: '../images/mp3 1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 30000,
        amount: '1',
    },
    {
        name: 'mp3 2',
        img: '../images/mp3 2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 3540000,
        amount: '1',
    },
    {
        name: 'mp3 3',
        img: '../images/mp3 3.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 340000,
        amount: '1',
    },
    {
        name: 'mp3 4',
        img: '../images/mp3 4.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 230000,
        amount: '1',
    },
    {
        name: 'mp3 5',
        img: '../images/mp3 1.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 231110000,
        amount: '1',
    },
    {
        name: 'mp3 6',
        img: '../images/mp3 2.jpg',
        txt: 'fajne tanie auto kupujcie ludzie',
        price: 2321412410000,
        amount: '1',
    },
]

export const mp3 = data

class Mp3s extends Component {
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
 
export default Mp3s;
