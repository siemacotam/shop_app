import React, { Component } from 'react';
import {users} from '../pages/UserAccount'
import {activeUserIndex} from '../pages/LoginMenu'

class UserPanel extends Component {

    userIndex = activeUserIndex

    state = { 
        login: users[this.userIndex].login,
        password: users[this.userIndex].password,
      name: users[this.userIndex].name,
      surname:users[this.userIndex].surname,
      email: users[this.userIndex].email,
      adress: users[this.userIndex].adress,
      adressNumber:users[this.userIndex].adressNumber,
      city: users[this.userIndex].city,
      postcode: users[this.userIndex].postcode,
      phone: users[this.userIndex].phone,
      bought: users[this.userIndex].bought,
      date: users[this.userIndex].date,
    }


    getIndex = (login) => {
        return users.findIndex(obj => obj.login === this.props.activeUser.login);
    }


    handleSubmit = (e) => {
        e.preventDefault()

            const newUser = {
                login: this.props.activeUser.login,
                password: this.state.password,
                name: this.state.name,
                surname:this.state.surname,
                email:this.state.email,
                adress: this.state.adress,
                adressNumber: this.state.adressNumber,
                city: this.state.city,
                postcode: this.state.postcode,
                phone: this.state.phone,
                bought: [],
                date: [],
              }
              
            console.log(newUser)
            console.log(this.getIndex(this.state.login))
            const userIndex = this.getIndex(this.state.login)

            users.splice(userIndex, 1)
            users.splice(userIndex, 0 ,newUser)

            console.log(users)
    }



    handleChange= (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name , value)
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    componentDidMount(){
        let number = this.getIndex()
        this.userIndex = number
    }
   

    render() { 

        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" disabled name='login' placeholder={users[this.userIndex].login} onChange={this.handleChange} value={this.state.login}/>
                    <input type="text" name='name' placeholder={users[this.userIndex].name} onChange={this.handleChange} value={this.state.name}/> 
                    <input type="text" name='surname' placeholder={users[this.userIndex].surname} onChange={this.handleChange} value={this.state.surname}/> 
                    <input type="text" name='phone' placeholder={users[this.userIndex].phone} onChange={this.handleChange} value={this.state.phone}/> 
                    <input type="text" name='email' placeholder={users[this.userIndex].email} onChange={this.handleChange} value={this.state.email}/> 
                    <input type="text" name='adress' placeholder={users[this.userIndex].adress} onChange={this.handleChange} value={this.state.adress}/> 
                    <input type="text" name='adressNumber' placeholder={users[this.userIndex].adressNumber} onChange={this.handleChange} value={this.state.adressNumber}/> 
                    <input type="text" name='city' placeholder={users[this.userIndex].city} onChange={this.handleChange} value={this.state.city}/> 
                    <input type="text" name='password' placeholder={users[this.userIndex].password} onChange={this.handleChange} value={this.state.password}/> 
                    <input type="text" name='password2' placeholder={users[this.userIndex].password2} onChange={this.handleChange} value={this.state.password2}/> <button>zmień</button>
                </form>
            </div>
         );
    }
}
 
export default UserPanel;
<div></div>