import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Panel from './Panel';
import Footer from './Footer';
import Page from './Page'

class App extends Component {
  state = { 
    isLoggedIn: false,
    isClicked: false,
    activeUser: {},
   }

  logged = () => {
    this.setState({
      isLoggedIn: true,
  })
}
unlogged = () => {
  this.setState({
    isLoggedIn: false,
})
}
handleActiveUser = (data) => {
  this.setState({
    activeUser: data
  })
}

handleClick = () => {
  this.setState({
      isClicked: !this.state.isClicked
  })
}


  render() { 
    return ( 
      <Router basename={process.env.PUBLIC_URL}>
          <div className='App'>
            <header>
                {<Panel user ={this.handleActiveUser} isLoggedIn = {this.state.isLoggedIn} logged ={this.logged} isClicked={this.state.isClicked} handleClick={this.handleClick} activeUser={this.state.activeUser}/>}
            </header>
            <section className="page">
                {<Page activeUser={this.state.activeUser} user ={this.handleActiveUser} logged ={this.logged} unlogged ={this.unlogged} isLoggedIn = {this.state.isLoggedIn} isClicked={this.state.isClicked} handleClick={this.handleClick}/>}
              </section>
              <footer>{<Footer />}</footer>
          </div>
      </Router>
     );
  }
}
 
export default App;