import React, { Component } from 'react';
import '../styles/Home.css'
import {Link} from 'react-router-dom'

const data = [
    {
        src: '../images/11.jpg',
        title: 'Zapraszamy do sekcji Blog',
        text: 'Znajdziecie tam wiele ciekawych artykułów i recenzje produktów',
        button: <Link to='/blog'>Sprawdź</Link>,
    },
    {
        src: '../images/12.jpg',
        title: 'Zapraszamy do sekcji Laptopy',
        text: 'Znajdziecie tam ofertę na najbardziej chwytliwe towary',
        button: <Link to='/categories/laptops'>Sprawdź</Link>,
    },{
        src: '../images/13.jpg',
        title: 'Zapraszamy do sekcji Oferta',
        text: 'Znajdziecie tam nasz asortyment',
        button: <Link to='/categories'>Sprawdź</Link>,
    },{
        src: '../images/14.jpg',
        title: 'Zapraszamy do sekcji Kontakt',
        text: 'Dajcie znać czego szukacie a na pewno wam pomożemy',
        button: <Link to='/contact'>Sprawdź</Link>,
    },
]


class Banner extends Component {
    index = 0;

    state = { 
        pic: data[this.index].src,
        title: data[this.index].title,
        text: data[this.index].text,
        button: data[this.index].button,
        intervalId: '',
        indexNumber: 0,
     }


    bannerChange = ()=>{
        this.index ++
        this.setState({
            pic:data[this.index].src,
            title:data[this.index].title,
            text:data[this.index].text,
            button:data[this.index].button,
            indexNumber: this.index,
        })
        if(this.index === data.length -1){
            this.index = -1
        }
     }

     changeDot = (e) => {
        clearInterval(this.state.intervalId)
         const newIndex = e.target.dataset.index
         this.index = newIndex
         this.setState({
            pic:data[this.index].src,
            title:data[this.index].title,
            text:data[this.index].text,
            button:data[this.index].button,
            indexNumber: this.index
        })
         let intervalId =  setInterval(this.bannerChange, 4000)
         this.setState({
            intervalId: intervalId
        })
     }

     componentDidMount(){
        let intervalId =  setInterval(this.bannerChange, 4000)
        this.setState({
            intervalId: intervalId
        })
     }

     componentWillUnmount(){
         clearInterval(this.state.intervalId)
     }

    render() { 
        console.log(this.state.indexNumber)
        return ( 
            <div className='banner'>
                <div className='banner__wrap bannerDiv'>
                    <img className='banner__img' src={this.state.pic} alt=""/>
                </div>
                <div className="banner__info">
                    <h3>{this.state.title}</h3>
                    <p>{this.state.text}</p>
                    <button>{this.state.button}</button>
                    <div className="dots">
                        <div data-index='0' className={this.state.indexNumber === 0 ? 'circle' : null} onClick={this.changeDot}></div>
                        <div data-index='1' className={this.state.indexNumber === 1 ? 'circle' : null}></div>
                        <div data-index='2' className={this.state.indexNumber === 2 ? 'circle' : null}></div>
                        <div data-index='3' className={this.state.indexNumber === 3 ? 'circle' : null}></div>
                    </div>
                </div>
            </div>
         );
    }
}

export default Banner;