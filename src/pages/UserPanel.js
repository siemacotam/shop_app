import React, { Component } from 'react';
import {users} from '../pages/UserAccount'
import {activeUserIndex} from '../pages/LoginMenu'
import '../styles/UserPanel.css'

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
                bought: users[this.userIndex].bought,
                date: users[this.userIndex].date,
              }
              
            console.log(newUser)
            console.log(this.getIndex(this.state.login))
            const userIndex = this.getIndex(this.state.login)

            users.splice(userIndex, 1)
            users.splice(userIndex, 0 ,newUser)

            console.log(users)

            this.props.handleChangeClick()
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
            <div className='userPanel'>
                <form onSubmit={this.handleSubmit} className='userPanel__form'>
                    <div className="userPanel__user">
                        <input className='userPanel__input' type="text" disabled name='login' placeholder={users[this.userIndex].login} onChange={this.handleChange} value={this.state.login}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='name' placeholder={users[this.userIndex].name} onChange={this.handleChange} value={this.state.name}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='surname' placeholder={users[this.userIndex].surname} onChange={this.handleChange} value={this.state.surname}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='phone' placeholder={users[this.userIndex].phone} onChange={this.handleChange} value={this.state.phone}/> <br />
                        <input className='userPanel__input'  disabled={!this.props.changeData} type="text" name='email' placeholder={users[this.userIndex].email} onChange={this.handleChange} value={this.state.email}/> 
                    </div>
                    <div className="userPanel__adress">
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='adress' placeholder={users[this.userIndex].adress} onChange={this.handleChange} value={this.state.adress}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='adressNumber' placeholder={users[this.userIndex].adressNumber} onChange={this.handleChange} value={this.state.adressNumber}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='city' placeholder={users[this.userIndex].city} onChange={this.handleChange} value={this.state.city}/> <br />
                        <input className='userPanel__input' disabled={!this.props.changeData} type="text" name='password' placeholder={users[this.userIndex].password} onChange={this.handleChange} value={this.state.password}/> <br />
                    </div>
                    <div className='userPanel__button'>{this.props.changeData ? <button >zmień</button>: null }</div>
                </form>
                {this.props.changeData ? null : <button onClick={this.props.handleChangeClick}>Edytuj dane</button>}
            </div>
         );
    }
}
 
export default UserPanel;