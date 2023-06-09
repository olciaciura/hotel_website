import React from "react";

export function Offer(){

    let punctor = '=>'
    
    return(
        <div id='page'>
        <div className='black_header'>
            <p id='information'>Oferta</p>
        </div>
        <div className='place'>
            <img className='offer' id='photo_place' src='../../dom.jpg'/>
            <div id='place'>
                <p><br/><span id='nazwa'> Chwila... Moment </span> składa się z dwóch niezależnych apartamentów połączonych wspólnym tarasem:
                <br/> {punctor} "Chwila" - ma ekspozycję zachodnio-południową
                <br/> {punctor} "Moment" - ma ekspozycję wschodnio-południową
                <br/><br/>W całym domu mogę przyjąć maksymalnie 12 osób (6 miejsc w każdym apartamencie: 2 sypialnie dla 4 osób i rozkładana 2 osobowa kanapa w salonie);
                <br/><br/>Wokół domu duży teren zielony z bezpośrednim dostępem do rzeki Białej Lądeckiej i piękny starodrzew umożliwiający rozwieszenie hamaków, miejsce na ognisko;
                <br/><br/>Przed domem miejsca parkingowe dla 4 samochodów;
                <br/><br/>Dostępna sieć wi-fi światłowodowa;
                <br/><br/>Prywatnie, uwielbiam zwierzaki, ale w tym miejscu, z różnych względów, nie mogę ich niestety przyjąć;
                <br/><br/></p>
            </div>
        </div>

        <div className='place'>
            <div id='place'>
                <p><br/><br/>Układ pomieszczeń:</p>
                <ul>
                <li>- na dole: salon z aneksem kuchennym i jadalnią, łazienka, przedsionek (w salonie znajduje się rozkładana kanapa)</li>
                <li>- na górze : dwie sypialnie (1 łóżko 140 cm, dwa łóżka 90 cm), garderoba</li>
                </ul>
                <p><br/>Wyposażenie kuchni: </p>
                <ul>
                <li>- lodówka, zmywarka, płyta indukcyjna 2 palnikowa, czajnik, kawiarka włoska</li>
                <li>- naczynia, sztućce, garnki i drobne sprzęty do gotowania</li>
                </ul>
                <p><br/>Ogrzewanie podłogowe w całym domu</p>
                <br/><br/>
            </div>
            <img className='offer' id='photo_place' src='../../kuchnia.jpg'/>
        </div>
        
        <div className='place'>
            <img className='offer' id='photo_place' src='../../okolica.jpg'/>
            <div id='place'>            
            <p><br/><br/>Nie ma telewizji, ani telewizorów. W zamian oddaję  do Waszej dyspozycji książki, 
                mapy i przewodniki planszówki, kredki i rysowanki, materiały plastyczne, możliwość udostępnienia 
                różnych sprzętów przydatnych do wspólnego spędzania czasu, np. rzutnika, gitary, śpiewników, 
                przyczepki rowerowej dla  dzieci, sanek, piłek, badmintona, itp.
                <br/><br/>Na zewnątrz duży taras, który pozwala spędzać czas na dworze w pogodę i niepogodę, 
                teren zielony z miejscem na ognisko, hamaki i leżaki do wylegiwania się nad brzegiem rzeki;
                <br/><br/>Na wiosnę ruszy własny ogródek i zielnik – jeśli macie zacięcie ogrodnicze do 
                grzebania w grządkach i potrzebę kontaktu z ziemią  - zapraszam do własnoręcznego siania i 
                sadzenia roślinek, dla dzieciaków może to być super zabawa
                <br/><br/>Ja sama uwielbiam różnorakie rękodzieło i czasami organizuję warsztaty rękodzieła – 
                decoupage, filcowanie, wyrób świeczek, wypieki – przy grupie kilku osób (małych i dużych) 
                możemy się na takie spotkanie z rękodziełem umówić
                <br/><br/><br/></p>
            </div>
            </div>
            <div className='place'>     
            <div id='place'>            
            <p>
                <br/><br/>Wspólnie i aktywnie – niezliczone możliwości: w zimie narty zjazdowe w okolicznych 
                    ośrodkach narciarskich po polskiej i czeskiej stronie, kilkadziesiąt kilometrów tras 
                    narciarstwa biegowego (jeśli jeszcze nie próbowaliście tego sportu zachęcam z całego serca, 
                    z chęcią pomogę w zorganizowaniu sprzętu i instruktora), możliwość morsowania w Białej Lądeckiej, 
                    a poza sezonem zimowym : szlaki turystyczne do pieszych wędrówek, kilka szczytów Korony Gór 
                    Polski do zdobycia, skałki wspinaczkowe, trasy rowerowe, wędrówki nordic walking (tu również 
                    mogę pomóc w zorganizowaniu instruktora i sprzętu), jazda konna w pobliskim ośrodku jeździeckim, 
                    sporty wodne na Zalewie Morawka, spływy pontonowe, dużo ciekawych miejsc do zwiedzania 
                    (m.in. Jaskinia Niedźwiedzia, kopalnia złota Złoty Stok, kopalnia uranu, twierdza Kłodzka, 
                    muzeum papiernictwa w Dusznikach Zdr. i wiele innych); Więcej szczegółowych informacji w 
                    zakładce „Okolica”.<br/><br/><br/></p>
            </div>
            <img className='offer' id='photo_place' src='../../okolica2.png'/>
        </div>

        <div className='place'>
            <img className='offer' id='photo_place' src='../../okolica3.jpg'/>
            <div id='place'>            
            <p><br/><br/>Dla miłośników rowerów
            <br/>Asfaltem, drogą szutrową, polnymi skrótami – dwukierunkowo, jednokierunkowo, 
            z górki i pod górkę – po płaskim raczej rzadko😉 niezliczone możliwości i kilometry 
            tras o różnym stopniu trudności. Zachęcam do poczytania opisów na stronie urzędu miasta 
            https://stronie.pl/538/szlaki-rowerowe-singletracki-bike-park.html.
            <br/>W planach mam budowę osobnego, zamykanego pomieszczenia na rowery – wiem, 
            jakim oczkiem w głowie są dla Was te dwa kółka😊 Tymczasem, można je przechowywać w 
            przedsionku. Jeśli wolelibyście inaczej, możemy też poszukać innego rozwiązania.<br/><br/></p>
            </div>
        </div>
        </div>
        
    )
}
export default Offer;