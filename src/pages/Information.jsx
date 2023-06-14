import React, {useEffect, useState} from "react";

export function Information(){

    return(
        <div id='page'>
        <div className='black_header'>
            <p id='information'>Przydatne informacje</p>
        </div>
        <p>
            Jeśli zastanawiacie się, jak można aktywnie spędzić czas, tutaj znajdziecie kilka 
            podpowiedzi - w zależności od zainteresowań, pogody i czasu, parę linków, które 
            mogą się przydać w podjęciu decyzji:
        </p>

        <div className='place'>   
            <img className='offer' id='photo_place' src='../../regulamin1.jpg'/>
            <div id='regulamin'>            
                <p><b>Stronie Śląskie i najbliższa okolica</b>
                <br/><a href='https://www.niesamowitapolska.eu/polecane-miasta/stronie-slaskie-atrakcje' target='_blank'>Ogólnie o atrakcjach w okolicy</a>
                <br/><a href='https://kuzniaalchemiczna.pl/oferta/' target='_blank'>Kuźnia Alchemiczna</a>
                <br/><a href='https://www.koniefurmanka.pl/' target='_blank'>Furmanka – ośrodek jeździecki</a>
                <br/><a href='https://www.facebook.com/people/Muzeum-Minera%C5%82%C3%B3w/100063793350158/' target='_blank'>Sklep i  muzeum minerałów</a>
                <br/><a href='https://stronie.pl/100/galeria-na-szlaku.html' target='_blank'>Galeria na Szlaku</a>
                <br/><a href='https://www.uireny.pl/s/pl/82/wapiennik-laskawy-kamien-stara-morawa' target='_blank'>Wapiennik</a>
                <br/><a href='https://wakacjezdzieciakiem.pl/polska/dolnoslaskie/634-stara-morawa-zalew-z-plaza.html' target='_blank'>Zalew Stara Morawa</a>
                <br/> od maja do września – jarmark lokalnych produktów w Nowym Gierałtowie (plac wiejski) – rękodzieło, lokalne wypieki (chleb, ciasta), lokalne wędliny, jajka, mleko, sery itp.
                </p>
            </div>
        </div>
        <div className='place'>   
            <div id='regulamin'>            
                <p><b>Kletno</b>
                <br/><a href='http://jaskinianiedzwiedzia.pl/' target='_blank'>Jaskina Niedźwiedzia</a>
                <br/><a href='https://www.muzeum-kletno.pl/' target='_blank'>Muzeum</a>
                <br/><a href='https://www.kletno.pl/' target='_blank'>Kopalnia uranu</a>
                <br/><a href='https://park.kletno.pl/oferta/' target='_blank'>Park linowy</a>
                <br/><br/><b>Lądek Zdrój</b>
                <br/><a href='https://jaskiniaradochowska.pl/' target='_blank'>Jaskinia Radochowska</a>
                <br/><a href='https://hasajacezajace.com/trojak-gory-zlote-ladek-zdroj/' target='_blank'>Trojak – stok narciarski, skałki wspinaczkowe, turystyka piesza</a>
                <br/><a href='https://skifamily.pl/' target='_blank'>stok narciarski</a>
                <br/><a href='https://www.goryonline.com/przewodnik-skalki-ladeckie-,2008116,i.html' target='_blank'>skałki wspinaczkowe</a>
                <br/><br/><a href='https://www.zameknaskale.com.pl/zwiedzanie-zamku/' target='_blank'>Trzebieszowice - Zamek na Skale</a>
                <br/><a href='https://www.niesamowitapolska.eu/wojewodztwa/dolnoslaskie/ziemia-klodzka/atrakcje/kopalnia-zlota-w-zlotym-stoku' target='_blank'>Złoty Stok - Kopalnia złota</a>
                </p>
            </div>
            <img className='offer' id='photo_place' src='../../okolica.jpg'/>
        </div>
        <div className='place'>   
            <img className='offer' id='photo_place' src='../../okolica.jpg'/>
            <div id='regulamin'>            
                <p><a href='https://www.niesamowitapolska.eu/wojewodztwa/dolnoslaskie/ziemia-klodzka/atrakcje/twierdza-klodzko-atrakcje' target='_blank'>Kłodzko</a>
                <br/><a href='https://www.niesamowitapolska.eu/wojewodztwa/dolnoslaskie/ziemia-klodzka/atrakcje/szlak-ginacych-zawodow' target='_blank'>Kudowa Zdrój</a>
                <br/><a href='https://podroze.onet.pl/polska/dolnoslaskie/duszniki-zdroj-atrakcje-turystyczne-co-warto-zobaczyc-ciekawe-miejsca/4s1p97s' target='_blank'>Duszniki Zdrój</a>
                <br/><a href='https://palacmarianny.com.pl/informacje/' target='_blank'>Kamieniec Ząbkowicki</a>
                <br/><a href='https://bartekwpodrozy.pl/zabkowice-slaskie-co-warto-zobaczyc-atrakcje/' target='_blank'>Ząbkowice Śląskie</a>
                <br/><br/><b>Czeski ośrodek Dolni Morava</b>
                <br/><a href='https://stronapodrozy.pl/najdluzszy-most-wiszacy-na-swiecie-otwarto-w-czechach-przeszlismy-sie-sky-bridge-721-w-osrodku-dolni-morava-czy-warto-sie-tam/ar/c7-15946645' target='_blank'>Sky Bridge</a>
                <br/><a href='https://www.dolnimorava.cz/pl/mamucia-kolejka-gorska' target='_blank'>Mamucia kolejka górska</a>
                <br/><a href='https://www.dolnimorava.cz/pl/pomysly-na-wycieczki' target='_blank'>Inne pomysły na wycieczki</a>
                </p>
            </div>
        </div>
        <div className='place'>   
            <div id='regulamin'>            
                <p><b>Trasy rowerowe</b>
                <br/><a href='https://stronie.pl/538/szlaki-rowerowe-singletracki-bike-park.html' target='_blank'>https://stronie.pl/538/szlaki-rowerowe-singletracki-bike-park.html</a>
                <br/><a href='https://czarnagora.pl/mapa_letnia/' target='_blank'>https://czarnagora.pl/mapa_letnia/</a>
                <br/><br/><a href='https://stronie.pl/4166/mapy-opisy-qrkody-tras.html' target='_blank'>Trasy narciarstwa biegowego</a>
                <br/><br/><b>Narty zjazdowe</b>
                <br/><a href='https://skifamily.pl/' target='_blank'>Kamienica/Lądek Zdrój </a>
                <br/><a href='https://www.skiinfo.pl/dolnoslaskie/czarna-gora/osrodek-narciarski' target='_blank'>Czarna Góra</a>
                <br/><a href='https://www.wyciagwbielicach.pl/' target='_blank'>Bielice</a></p>
            </div>
            <img className='offer' id='photo_place' src='../../okolica.jpg'/>
        </div>
        </div>
    )
}
export default Information;