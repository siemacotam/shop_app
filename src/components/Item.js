import React, {Component} from 'react';
import '../styles/Item.css'
import { orders } from '../pages/ShoppingCart'
import Swal from 'sweetalert2'


const tv = [
    {
        name: 'tv 1',
        img: '../images/tv1.jpg',
        txt: 'Najnowocześniejszy model. Wyświetlacz LED',
        price: 2999.99 ,
        amount: '1',
        category: 'tv',
    },
    {
        name: 'tv 2',
        img: '../images/tv2.jpg',
        txt: 'Najlepszy model dla wymagających klientów',
        price: 5999.99,
        amount: '1',
        category: 'tv',
    },
    {
        name: 'tv 3',
        img: '../images/tv3.jpg',
        txt: 'Dodatkowo konto na netflix na pół roku za darmo',
        price: 4499.99,
        amount: '1',
        category: 'tv',
    },
    {
        name: 'tv 4',
        img: '../images/tv1.jpg',
        txt: 'Model adekwatny do ceny',
        price: 1499.99,
        amount: '1',
        category: 'tv',
    },
    {
        name: 'tv 5',
        img: '../images/tv2.jpg',
        txt: 'Nic tylko oglądać',
        price: 499.99,
        amount: '1',
        category: 'tv',
    },
    {
        name: 'tv 6',
        img: '../images/tv3.jpg',
        txt: 'Najtańszy model, ale bardzo wydajny. Hit sprzedażowy 2020 roku',
        price: 199.99,
        amount: '1',
        category: 'tv',
    },
]

const phones = [
    {
        name: 'phone 1',
        img: '../images/phone1.jpg',
        txt: 'Model posiada wiele uzytecznych aplikacji',
        price: 499.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 2',
        img: '../images/phone2.jpg',
        txt: 'Model wyposażony w profesjonalny aparat fotograficzny',
        price: 1299.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 3',
        img: '../images/phone3.jpg',
        txt: 'Najbardziej rozchwytywany model w 2020 roku',
        price: 999.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 4',
        img: '../images/phone1.jpg',
        txt: 'Niezniszczalny model',
        price: 199.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 5',
        img: '../images/phone2.jpg',
        txt: 'Najbardziej konkurencyjny model. Podobno sam Musk z niego korzysta',
        price: 449.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 6',
        img: '../images/phone3.jpg',
        txt: 'Zapewnia wspaniałe emocje',
        price: 129.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 7',
        img: '../images/phone1.jpg',
        txt: 'Dzwoni, robi zdjecia - czego więcej chcieć ?',
        price: 99.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 8',
        img: '../images/phone2.jpg',
        txt: 'Niezawdony, twardszy niż nokia',
        price: 149.99,
        amount: '1',
        category: 'phones',
    },
    {
        name: 'phone 9',
        img: '../images/phone3.jpg',
        txt: 'Brak słów by opisać jak wspaniały jest to telefon',
        price: 899.99,
        amount: '1',
        category: 'phones',
    },
]

const mp3s = [
    {
        name: 'mp3 1',
        img: '../images/mp3 1.jpg',
        txt: 'Model wyposażony w ogromną pamięć',
        price: 249.99,
        amount: '1',
        category: 'mp3s',
    },
    {
        name: 'mp3 2',
        img: '../images/mp3 2.jpg',
        txt: 'Najpopularniejszy model',
        price: 249.99,
        amount: '1',
        category: 'mp3s',
    },
    {
        name: 'mp3 3',
        img: '../images/mp3 3.jpg',
        txt: 'Niesamowite odczucia użytkownika',
        price: 49.99,
        amount: '1',
        category: 'mp3s',
    },
    {
        name: 'mp3 4',
        img: '../images/mp3 4.jpg',
        txt: 'Sprawdź, a już nigdy nie zmienisz',
        price: 129.99,
        amount: '1',
        category: 'mp3s',
    },
    {
        name: 'mp3 5',
        img: '../images/mp3 1.jpg',
        txt: 'Promocja',
        price: 249.99,
        amount: '1',
        category: 'mp3s',
    },
    {
        name: 'mp3 6',
        img: '../images/mp3 2.jpg',
        txt: 'Prawie jak za darmo',
        price: 29.99,
        amount: '1',
        category: 'mp3s',
    },
]

const cars = [
    {
        name: 'car1',
        img: '../images/car1.jpg',
        txt: 'Najszybszy model w naszej kolekcji',
        price: 299999.99,
        amount: '1',
        category: 'cars',
    },
    {
        name: 'car2',
        img: '../images/car2.jpg',
        txt: 'Piekny, szybki i niezawodny model',
        price: 599999.99,
        amount: '1',
        category: 'cars',
    },
    {
        name: 'car3',
        img: '../images/car3.jpg',
        txt: 'Każda kobieta oszaleje na jego punkcie. Chcesz sprawdzić ?',
        price: 149999.99,
        amount: '1',
        category: 'cars',
    },
]

const laptops = [
    {
        name: 'laptop1',
        img: '../images/laptop1.jpg',
        txt: 'Posiada sapera i pasjansa !! Nie czekaj z zakupem',
        price: 4999.99,
        amount: '1',
        category: 'laptops',
    },
    {
        name: 'laptop2',
        img: '../images/laptop2.jpg',
        txt: 'Wydajny procesor, setki zadowolonych klientów',
        price: 3499.99,
        amount: '1',
        category: 'laptops',
    },
    {
        name: 'laptop3',
        img: '../images/laptop3.jpg',
        txt: 'Model specjalnie dla gamerów',
        price: 1499.99,
        amount: '1',
        category: 'laptops',
    },
    {
        name: 'laptop4',
        img: '../images/laptop4.jpg',
        txt: 'Bill Gates robił na nim windowsa',
        price: 5499.99,
        amount: '1',
        category: 'laptops',
    },
    {
        name: 'laptop5',
        img: '../images/laptop1.jpg',
        txt: 'Musisz go sprawdzić !',
        price: 3499.99,
        amount: '1',
        category: 'laptops',
    },
    {
        name: 'laptop6',
        img: '../images/laptop2.jpg',
        txt: 'Najpopularniejszy model',
        price: 2999.99,
        amount: '1',
        category: 'laptops',
    },
]

export let products = laptops.concat( mp3s, phones, tv, cars)

class Item extends Component {
    state = { 
        number: '1',
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() { 

const siema = products.filter(item => { if(item.category === this.props.id){
    return item
} })

        const items = siema.map(item => 
            <div key={item.name} className='product'> 
                <h3 className='product__name' >{item.name}</h3>
                <img className='product__img' src={item.img} alt="foto"/>
                <p className='product__description'>{item.txt}</p>
                <label className='product__label'> Ilość:
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
                <p className='product__price'>cena : {item.price * item.amount} zł</p>
                <button id={item.name} type="button" className="product__button btn btn-success" 
                onClick={ (e) =>{ 
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
