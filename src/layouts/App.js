import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Panel from './Panel';
import Banner from './Banner';
import ItemList from './ItemList';
import Footer from './Footer';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
          <div className='App'>
            <header>
                {<Panel />}
            </header>
            <aside>
                {<Banner />}
            </aside>
            <section className="page">
                {<ItemList/>}
              </section>
              <footer>{<Footer />}</footer>
          </div>
      </Router>
     );
  }
}
 
export default App;