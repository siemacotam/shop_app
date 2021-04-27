import React, { Component } from 'react';
import '../styles/Banner.css'

const data = [
    '../images/1.jpg',
    '../images/2.jpg',
    '../images/3.jpg',
    '../images/4.jpg'
]

class Banner extends Component {
    index = 0;

    state = { 
        pic: data[this.index]
     }

     componentDidMount(){
         setInterval(()=>{
            this.setState({
                pic:data[this.index]
            })
            if(this.index === data.length -1){
                this.index = -1
            }
            this.index ++
         },4000)
         
        }

    render() { 
        return ( 
            <div className='banner'>
                <div className='banner__wrap bannerDiv'>
                    <img className='banner__img' src={this.state.pic} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Banner;