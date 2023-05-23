import React, {useEffect, useState} from "react";

export function Regulamin(){
    return (
        <div id='page'>
        <div className='black_header'>
            <p id='information'>NIE regulamin</p>
        </div>
        <p>
        Na samo słowo „regulamin” dostaję gęsiej skórki i moja wolna, niesforna dusza cierpi….
<br/>Tak więc, nie o regulamin tu chodzi, a o umowę pomiędzy nami – tak po prostu i po ludzku :
<br/>Wiecie na pewno jak to jest, jak długo się o czymś marzy, wkłada wiele wysiłku, żeby to marzenie zrealizować, wyczekuje z niecierpliwością czasu, kiedy to spełnienie w końcu nadejdzie….
<br/><span id='nazwa'> Chwila … Moment </span> jest właśnie takim marzeniem, niedawno spełnionym, otwierającym drogę do kolejnych, które mam nadzieję, już za niedługo zaczną się realizować 😊
<br/>„Wypieszczone” i „wychuchane” – jak to określili moi znajomi, a przede wszystkim przygotowane z myślą o Was, moich Gościach, abyście się tu czuli, jak u siebie – przytulnie i domowo.  Mam nadzieję, że ta intencja będzie Wam towarzyszyć podczas całego pobytu, i że zaopiekujecie się Chwilą…Moment, jak swoim własnym domostwem 😊 
Będę więc wdzięczna za Waszą uważność i zadbanie o wyposażenie, wrażliwość na „gospodarskie” korzystanie z mediów (woda/prąd), dzielenie ze mną się wszelkimi uwagami i pomysłami – zawsze coś można poprawić czy usprawnić 😊
Jeśli coś się uszkodzi/zepsuje, dajcie proszę znać, żebym mogła temu zaradzić, przed przyjazdem następnych gości.
<br/>Z pełnym zaufaniem, oddaję Chwilę…Moment pod Waszą opiekę!
<br/><br/><span id='do_prawej'>Jola</span> <br/>
        </p>

        <div className='place'>     
            <div id='regulamin'>            
            <p><br/><br/><b>Sugestie i prośby od „gospodarskiego oka” :</b></p>
                <ul>
                <li>zwracanie uwagi na domykanie kranów, zamykanie okien/drzwi przed wyjściem (zwłaszcza w sezonie grzewczym)</li>
                <li>niewchodzenie na piętro w obuwiu zewnętrznym</li>
                <li>po zakończeniu wieczoru na tarasie - wnoszenie do środka naczyń i pożywienia (wiatr i zwierzaki potrafią czasem narobić dużego bałaganu)</li>
                <li>segregację śmieci tak, żeby nie wozić psutego powietrza (zgniatanie pojemników/butelek/kartonów)</li>
                <li>ściąganie hamaków przy deszczowej pogodzie</li>
                <li>niezostawienie leżaków ogrodowych na noc w „terenie” – najlepiej na tarasie</li>
                <li>jeśli skończyliście palić ognisko lub grilla – prośba o dokładne wygaszenie żaru</li>
                <li>planszówki są świetnym sposobem na wspólne spędzanie czasu, pod warunkiem, że niczego nie brakuje i można w nie grać – wielka prośba o uważność na wszystkie małe elementy, które można łatwo zgubić, a jeśli zauważycie, że już czegoś brakuje – dajcie proszę znać, postaram się to uzupełnić,</li>
                </ul>
            </div>
            <img className='offer' id='photo_place' src='../../sugestie.jpg'/>
        </div>

        <div className="praktyczne_wskazowki">

        </div>

        <div className="pory_roku">
        <div id='lato'>
            <p><br/><br/><b>LETNIĄ PORĄ:</b></p>
            <ul>
                    <li>zwracanie uwagi na domykanie kranów, zamykanie okien/drzwi przed wyjściem (zwłaszcza w sezonie grzewczym)</li>
                    <li>niewchodzenie na piętro w obuwiu zewnętrznym</li>
            </ul>
        </div>
        <div id='zima'>
            <p><br/><br/><b>ZIMOWĄ PORĄ:</b></p>
            <ul>
                    <li>elektryczne suszarki do butów i ubrań – przy ich używaniu, prośba o ich nadzorowanie: nie zostawianie włączonych urządzeń na noc, ani kiedy nie ma Was w domu, wyłączanie jeśli już wszystko co miało się wysuszyć, jest suche</li>
            </ul>
        </div>
        </div>


        </div>
    )
}