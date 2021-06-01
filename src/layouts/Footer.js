import React from 'react';
import '../styles/Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {


    return ( 
        <footer>
            <p className='footer__text'> Strona pokazowa wykonana przez Grzegorza Celek. All rights reserved ! </p>
            <div className='footer__container'>
                <a target="_blank" href='https://www.facebook.com/grzegorz.celek/'><i class="fab fa-facebook-f"></i></a>
                <a target="_blank" href='https://www.linkedin.com/in/grzegorz-celek-777332202/'><i class="fab fa-linkedin-in"></i></a>
                <Link to={'/contact'}><i class="fas fa-envelope-open-text"></i></Link>
            </div>
        </footer>
     );
}
 
export default Footer;