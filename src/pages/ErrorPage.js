import React from 'react';
import '../styles/ErrorPage.css'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (    
    <>
        <div className='errorPage'>
            <h2 className='errorPage__title'> <i class="fas fa-exclamation-triangle"></i> Error 404 <i class="fas fa-exclamation-triangle"> </i></h2>
            <h3 className='errorPage__text'>Page not found !</h3>
            <Link to ={'/'} className='errorPage__link'> Powrót do strony głównej </Link>
        </div>
    </>
     );
}
 
export default ErrorPage;