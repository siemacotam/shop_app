import React, {Component} from 'react';
import '../styles/Item.css'
import { orders } from '../pages/ShoppingCart'
import Swal from 'sweetalert2'

class Item extends Component {
    state = { 
        number: '1',
    }

    data = this.props.data
    
    // items = this.data.map(item => 
    //     <div key={item.name} className='product'> 
    //         <h3>{item.name}</h3>
    //         <img src={item.img} alt="foto"/>
    //         <p>{item.txt}</p>
    //         <label> Ilość:
    //             <select onChange={(e) => {
    //                         this.setState({ number: e.target.value})
    //                         item.amount = e.target.value
    //                         }}>
    //                 <option value="1">1</option>
    //                 <option value="2">2</option>
    //                 <option value="3">3</option>
    //                 <option value="4">4</option>
    //                 <option value="5">5</option>
    //             </select>
    //         </label>
    //         <p>cena : {item.price} * {this.state.number}</p>
    //         <button id={item.name} type="button" className="btn btn-success" 
    //         onClick={ 
    //         (e) =>{ 

    //         const buttonId = e.target.id
    //         const itemId = orders.map( i => {return i.name})

    //         for(let i=0; i<= orders.length; i++){
    //             if(itemId[i] === buttonId){
    //                 Swal.fire('Produkt znajduje się już w koszyku')
    //                 return
    //             } 
    //         }
    //         Swal.fire('Dodano produkt do koszyka')
    //         orders.push(item)
    //         item.amount = this.state.number
    //         }}>Dodaj do koszyka</button>
    //     </div> )


    render() { 

        const items = this.data.map(item => 
            <div key={item.name} className='product'> 
                <h3>{item.name}</h3>
                <img src={item.img} alt="foto"/>
                <p>{item.txt}</p>
                <label> Ilość:
                    <select onChange={(e) => {
                                this.setState({ number: e.target.value})
                                item.amount = e.target.value
                                }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <p>cena : {item.price * item.amount}</p>
                <button id={item.name} type="button" className="btn btn-success" 
                onClick={ 
                (e) =>{ 
    
                const buttonId = e.target.id
                const itemId = orders.map( i => {return i.name})
    
                for(let i=0; i<= orders.length; i++){
                    if(itemId[i] === buttonId){
                        Swal.fire('Produkt znajduje się już w koszyku')
                        return
                    } 
                }
                Swal.fire('Dodano produkt do koszyka')
                orders.push(item)
                item.amount = this.state.number
                }}>Dodaj do koszyka</button>
            </div> )



        return ( 
            items
         );
    }
}
 
export default Item;