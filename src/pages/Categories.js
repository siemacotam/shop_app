import React from 'react';
import '../styles/Categories.css';
import {NavLink} from 'react-router-dom';

const data = [
    {
        name:  'tv',
        img: '../images/1.jpg',
        link: '/tv',
    },
    {
        name:  'phones',
        img: '../images/2.jpg',
        link: '/phones',
    },
    {
        name:  'mp3s',
        img: '../images/3.jpg',
        link: '/mp3s',
    },
    {
        name:  'cars',
        img: '../images/4.jpg',
        link: '/cars',
    },
    {
        name:  'laptops',
        img: '../images/1.jpg',
        link: '/laptops',
    },
]

const Categories = () => {

const items = data.map(item => 
<div key={item.name} className='item'> 
    <NavLink to ={item.link} >
    <p>{item.name}</p>
    <img src={item.img} alt="foto"/>
    </NavLink>
</div> )

    return ( 
        items
     );
}
 
export default Categories;