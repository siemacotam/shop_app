import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Panel from './Panel';
import Banner from './Banner';
import Footer from './Footer';
import Page from './Page'

class App extends Component {
  state = { 
    isLoggedIn: false,
   }

  logged = () => {
    this.setState({
      isLoggedIn: true,
  })
}


  render() { 
    return ( 
      <Router>
          <div className='App'>
            <header>
                {<Panel isLoggedIn = {this.state.isLoggedIn}/>}
            </header>
            <aside>
                {<Banner />}
            </aside>
            <section className="page">
                {<Page logged ={this.logged} isLoggedIn = {this.state.isLoggedIn}/>}
              </section>
              <footer>{<Footer />}</footer>
          </div>
      </Router>
     );
  }
}
 
export default App;