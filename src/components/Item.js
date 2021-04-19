import React from 'react';
import '../styles/Item.css'


const Item = (props) => {

    const data = props.data
    const items = data.map(item => 
        <div key={item.name} className='product'> 
            <h3>{item.name}</h3>
            <img src={item.img} alt="foto"/>
            <p>{item.txt}</p>
            <p>{item.price}</p>
            <button type="button" className="btn btn-success">Dodaj do koszyka</button>
</div> 
    )

    return ( 
        items
     );
}
 
export default Item;
