import React, { Component } from 'react';       

class Adress extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>adres dostawy {this.props.activeUser.city}</div>
                <div>adres rachunku</div>
                <div>dane kontaktowe</div>
            </div>
         );
    }
}
 
export default Adress;