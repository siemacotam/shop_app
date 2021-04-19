import React from 'react';
import '../styles/Categories.css';
import {NavLink} from 'react-router-dom';

const data = [
    {
        name:  'tv',
        img: '../images/tv1.jpg',
        link: '/tv',
    },
    {
        name:  'phones',
        img: '../images/phone1.jpg',
        link: '/phones',
    },
    {
        name:  'mp3s',
        img: '../images/mp3 1.jpg',
        link: '/mp3s',
    },
    {
        name:  'cars',
        img: '../images/car1.jpg',
        link: '/cars',
    },
    {
        name:  'laptops',
        img: '../images/laptop1.jpg',
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
        <>
        <div className="bg"></div>
        {items}
        </>
     );
}
 
export default Categories;