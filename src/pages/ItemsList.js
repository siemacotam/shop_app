import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item'


const ItemsList = ({ match }) => {
  return  ( 
    <>
    <div className="backButton"><Link to="/categories">Powrót do listy produktów</Link></div>
    <Item id={match.params.id} />
    </>
 );

  
}

export default ItemsList;