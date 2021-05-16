import React from 'react';
import '../styles/Categories.css';
import {Link} from 'react-router-dom';

const data = [
    {
        name:  'tv',
        img: '../images/tv2.jpg',
    },
    {
        name:  'phones',
        img: '../images/phone1.jpg',
    },
    {
        name:  'mp3s',
        img: '../images/mp3 1.jpg',
    },
    {
        name:  'cars',
        img: '../images/car1.jpg',
    },
    {
        name:  'laptops',
        img: '../images/laptop1.jpg',
    },
]

const Categories = () => {

const items = data.map(item => 
<div key={item.name} className='item'> 
    <Link to ={`/categories/${item.name}`} >
    <p className='item__name'><span className='item__span'>{item.name}</span></p>
    <img className='item__img' src={item.img} alt="foto"/>
    </Link>
</div> )

    window.scrollTo(0,0)

    return ( 
        <>
        <div className="bg"></div>
        {items}
        </>
     );
}
 
export default Categories;