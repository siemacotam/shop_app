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
        name:  'radio',
        img: '../images/2.jpg',
        link: '/radio',
    },
    {
        name:  'plasma',
        img: '../images/3.jpg',
        link: '/plasma',
    },
    {
        name:  'eggs',
        img: '../images/4.jpg',
        link: '/eggs',
    },
    {
        name:  'toys',
        img: '../images/1.jpg',
        link: '/toys',
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