import React from "react";

export function Offer(){

    return(
        <div id='page'>
        <div className='black_header'>
            <p id='information'>Oferta</p>
        </div>
        <div className='place'>
            <img className='offer' id='photo_place' src='../../dom.jpg'/>
            <div id='place'>
                <p><br/><br/><span id='nazwa'> Chwila... Moment </span> składa się z dwóch niezależnych apartamentów połączonych wspólnym tarasem:
                <br/><br/> <span id='nazwa'> Chwila </span>  ma ekspozycję zachodnio-południową
                <br/> <span id='nazwa'> Moment </span>  ma ekspozycję wschodnio-południową
                <br/><br/><br/>
                Podstawowe informacje</p>
                <ul>
                <li>W każdym apartamencie maksymalnie może być 6 osób, w tym dwie na rozkładnej kanapie w salonie</li>
                <li>Prywatnie, uwielbiam zwierzaki, ale w tym miejscu, z różnych względów, nie mogę ich niestety przyjąć</li>
                <li>Internet –  w trakcie instalacji, światłowód powinien zostać podłączony w kwietniu b.r</li>
                <li>Sieć GSM – problem z zasięgiem ma tu tylko sieć PLUS, inne sieci dobrze odbierają</li>
                <li>Proszę o niepalenie tytoniu, ani innych używek w domu, i korzystanie z popielniczek na zewnątrz</li>
                </ul>
                
            </div>
        </div>

        <div className='place'>
            <div id='place'>
                <p><br/><br/>W każdym apartamencie:</p>
                <ul>
                <li>Dół: salon z aneksem kuchennym i jadalnią, łazienka, przedsionek</li>
                <li>Góra: dwie sypialnie dla 4 osób (1 łóżko 140 cm, dwa łóżka 90 cm), garderoba</li>
                <li>Wyposażenie kuchni: lodówka, zmywarka, płyta indukcyjna 2 palnikowa</li>
                <li>Ogrzewanie podłogowe w całym domu</li>
                </ul>
            </div>
            <img className='offer' id='photo_place' src='../../kuchnia.jpg'/>
        </div>
        
        <div id='link_to_inf'/>
        

        </div>
    )
}
export default Offer;