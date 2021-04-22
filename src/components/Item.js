import React, {Component} from 'react';
import '../styles/Item.css'
import { orders } from '../pages/ShoppingCart'
import Swal from 'sweetalert2'

class Item extends Component {
    state = { }

    data = this.props.data

    items = this.data.map(item => 
        <div key={item.name} className='product'> 
            <h3>{item.name}</h3>
            <img src={item.img} alt="foto"/>
            <p>{item.txt}</p>
            <p>cena : {item.price}</p>
            <button id={item.name} type="button" className="btn btn-success" 
            onClick={ 
            (e) =>{ 

            const buttonId = e.target.id
            const itemId = orders.map( i => {return i.name})

            for(let i=0; i<= orders.length; i++){
                if(itemId[i] === buttonId){
                    Swal.fire('Produkt znajduje się już w koszyku')
                    return
                } else {
                    console.log('siema')
                }
            }
            Swal.fire('Dodano produkt do koszyka')
            orders.push(item)

            }}>Dodaj do koszyka</button>
        </div> )

    render() { 

        return ( 
            this.items
         );
    }
}
 
export default Item;