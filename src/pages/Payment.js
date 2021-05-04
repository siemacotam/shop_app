import React, { Component } from 'react';

class Payment extends Component {
    state = { 
        value: 1,
     }

     handleChange = (e) => {
        //  console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
     }
     
    render() { 
        return ( 
            <div>
                <form onChange={this.handleChange}>
                    <select className="selectpicker" data-style="btn-success">
                        <option value='1'>Wybierz sposób płatności</option>
                        <option value='2'>Szybki przelew/ BLIK </option>
                        <option value='3'>PayPal </option>
                        <option value='4'>Karta Płatnicza </option>
                        <option value='5'>Za pobraniem </option>
                    </select>
                </form>
                <div>
                   {this.state.value == 2 ? <div>Po złożeniu zamówienia zostaniesz przekierowany na stronę Przelewy 24, gdzie będziesz mógł zlecić przelew bezpośrednio z Twojego banku. Po pomyślnej realizacji płatności zamówienie zostanie sfinalizowane.</div> : null}
                   {this.state.value == 3 ? 'Zostaniesz przeniesiony do strony PayPal, aby dokończyć proces płatności.' : null}
                   {this.state.value == 4 ?  
                   <div><p>Zasady dotyczące płatności kartą płatniczą w Unii Europejskiej się zmieniają. Wkrótce będziesz musiał/musiała potwierdzić swoją tożsamość przy każdej płatności online. Skonaktuj się ze swoim bankiem, aby to skonfigurować.</p>
                   <form>
                       <label >Imię i nazwisko na karcie<input type="text"/></label>
                       <label >Numer karty płatniczej<input type="text"/></label>
                       <label >Ważność<input type="text"/></label>
                       <label >Numer kontrolny karty płatniczej<input type="text"/></label>
                   </form></div> : null}
                   {this.state.value ==5 ? 
                   <div>
                       <div>Adres dostawy: Paulina jaskiewicz Jaskiewicz Migdałowa 21 62-800 Kalisz Polska</div>
                       <p>Aktualnie staramy się zrobić jak najwięcej, aby ograniczyć osobiste kontakty. Z tego powodu, zachęcamy Cię do wybrania płatności online (bezdotykowych) za Twoje zamówienie. Jeśli jednak zdecydujesz się na płatność „za pobraniem”, prosimy o przygotowanie odliczonej kwoty dla kuriera.</p>
                    </div> : null}
                </div>
                <div><p>przesyłka</p><p>łączna kwota</p><button disabled={this.state.value ==1} onClick={() => {this.props.step(4)}}>Dalej</button></div>
            </div>
         );
    }
}
 
export default Payment;