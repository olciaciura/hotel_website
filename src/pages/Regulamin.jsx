import React, {useEffect, useState} from "react";

export function Regulamin(){
    return (
        <div id='page'>
        <div className='black_header'>
            <p id='information'>NIE regulamin</p>
        </div>
        <p><span id='larger_regulamin'>
            Na samo słowo „regulamin” dostaję gęsiej skórki i moja wolna, niesforna dusza cierpi….
            <br/>Tak więc, nie o regulamin tu chodzi, a o umowę pomiędzy nami – tak po prostu i po ludzku: 
            Wiecie na pewno jak to jest, jak długo się o czymś marzy, wkłada wiele wysiłku, żeby to marzenie 
            zrealizować, wyczekuje z niecierpliwością czasu, kiedy to spełnienie w końcu nadejdzie….
            <span id='nazwa_large'> Chwila … Moment </span> jest właśnie takim marzeniem, niedawno spełnionym, 
            otwierającym drogę do kolejnych, które mam nadzieję, już za niedługo zaczną się realizować 😊
            <br/><br/>„Wypieszczone” i „wychuchane” – jak to określili moi znajomi, a przede wszystkim 
            przygotowane z myślą o Was, moich Gościach, abyście się tu czuli, jak u siebie – przytulnie 
            i domowo.  Mam nadzieję, że ta intencja będzie Wam towarzyszyć podczas całego pobytu, i że 
            zaopiekujecie się Chwilą…Moment, jak swoim własnym domostwem 😊 
            <br/>Będę więc wdzięczna za Waszą uważność i zadbanie o wyposażenie, wrażliwość na „gospodarskie” 
            korzystanie z mediów (woda/prąd), dzielenie ze mną się wszelkimi uwagami i pomysłami – zawsze coś 
            można poprawić czy usprawnić 😊 Jeśli coś się uszkodzi/zepsuje, dajcie proszę znać, żebym mogła 
            temu zaradzić, przed przyjazdem następnych gości.
            <br/><br/>Z pełnym zaufaniem, oddaję Chwilę…Moment pod Waszą opiekę!
            <br/><br/><span id='do_prawej'>Jola</span> <br/></span>
        </p>

        <div className='place'>     
            <div id='regulamin'>            
            <p><b>Sugestie i prośby od „gospodarskiego oka”:</b>
            <br/>- zwracanie uwagi na domykanie kranów, zamykanie okien/drzwi przed wyjściem (zwłaszcza w sezonie grzewczym), 
            <br/>- niewchodzenie na piętro w obuwiu zewnętrznym, 
            <br/>- po zakończeniu wieczoru na tarasie - wnoszenie do środka naczyń i pożywienia (wiatr i zwierzaki potrafią czasem narobić dużego bałaganu), 
            <br/>- segregację śmieci tak, żeby nie wozić pustego powietrza (zgniatanie pojemników/butelek/kartonów), 
            <br/>- niezostawienie leżaków ogrodowych na noc w „terenie” – najlepiej na tarasie,
            <br/>- jeśli skończyliście palić ognisko lub grilla – prośba o dokładne wygaszenie żaru, 
            <br/>- planszówki są świetnym sposobem na wspólne spędzanie czasu, pod warunkiem, że niczego 
                nie brakuje i można w nie grać – wielka prośba o uważność na wszystkie małe elementy, które 
                można łatwo zgubić, a jeśli zauważycie, że już czegoś brakuje – dajcie proszę znać, postaram się to uzupełnić, 
            <br/>roślinki na tarasie: nie wszyscy mają ogrodnicze zacięcie, jeśli jednak zauważycie, że akurat 
                podczas Waszego pobytu aura dopisała, i roślinki „usychają z pragnienia”, wielka prośba o ich 
                podlanie – najlepiej wczesnym rankiem, lub pod wieczór – może w ten sposób uda się nam wspólnie wyhodować zieloną dżunglę😊   
            </p></div>
            <img className='offer' id='photo_place' src='../../regulamin/sugestie.jpg'/>
        </div>

{/* dla młodszych dla palaczy i dla rowezystów */}
        <div className='place'>   
            <img className='offer' id='photo_place' src='../../regulamin/sugestie3.jpg'/>
            <div id='regulamin'>            
            <p><span id='tekst'><b>Do młodszych gości </b>
            <br/>Jeśli jakaś książka Was zainteresuje, zaczniecie czytać i nie skończycie – możemy się umówić, że ją Wam pożyczę – odeślecie pocztą po przeczytaniu, lub oddacie przy następnych odwiedzinach, które mam nadzieję nadejdą 😊
            <br/>Gry i zabawki z małymi elementami (np. lego) – fajnie byłoby, gdybyście po skończonej zabawie zbierali/składali wszystkie części – jeśli otoczycie je taką „rodzicielską” opieką – dłużej będą Wam służyć 😊
            </span>
            

            <br/><br/><span id='tekst'><b>Dla rowerzystów</b>
            <br/>w planach mam wiatę na rowery, tymczasem rozwiązaniem może być przypinanie rowerów na tarasie, lub wprowadzanie do przedsionka (jeśli to będzie opcja, którą wybierzecie, wielka prośba o uważność na ściany)</span>
            <br/><br/><span id='tekst'><b>Dla palaczy</b>
            <br/>palimy tylko na zewnątrz, prośba o korzystanie z popielniczek i nie wyrzucanie niedopałków „za siebie”</span>

            </p>
            </div>
        </div>

{/* wifi lato i zima */}
        <div className='place'>     
            <div id='regulamin'>            
            <p><span id='tekst'><b>Letnią porą:</b>
            <br/>- przy otwartych oknach, będą wlatywać do środka różne żyjątka 
            <br/>– prośba o ich „pokojową” ewakuację (np. złapanie do słoika czy 
                siatki na motyle i wypuszczenie na dwór), byłoby mi bardzo przykro, 
                gdyby zakończyły swój żywot rozgniecione na ścianie…
            <br/>- letnie wieczory przy grillu to super sprawa, będę bardzo wdzięczna, 
                jeśli uda się utrzymać grill i akcesoria w czystości, tak aby kolejni 
                goście też mogli cieszyć się z możliwości grillowania;</span>
            
            <br/><br/><span id='tekst'><b>Zimową porą:</b>
            <br/>- elektryczne suszarki do butów i ubrań – przy ich używaniu, prośba o 
                ich nadzorowanie: niezostawianie włączonych urządzeń na noc, ani kiedy 
                nie ma Was w domu, wyłączanie jeśli już wszystko co miało się wysuszyć, jest suche;</span>
            </p>
            </div>
            <img className='offer' id='photo_place' src='../../regulamin/sugestie4.jpg'/>
        </div>

        {/* praktyczne wskazówki */}
        <div className='place'>     
            <img className='offer' id='photo_place' src='../../regulamin/sugestie2.jpg'/>
            <div id='regulamin'>            
            <p><b>Praktyczne wskazówki:</b>
            <br/><br/><span id='tekst'><b>Segregacja śmieci</b>
            <br/>przy drodze po prawej stronie stoją pojemniki na śmieci; plastik i metal / papier / szkło / odpady bio;</span>
            
            <br/><br/><span id='tekst'><b>Woda z kranu</b>
            <br/>woda jest czerpana ze studni głębinowej, przebadana – można pić bezpośrednio z kranu;</span>

            <br/><br/><span id='tekst'><b>Ognisko</b>
            <br/>możecie wykorzystać zebrany chrust pod wierzbami, a jeśli akurat nie będzie już żadnego „zapasu”, 
                można wybrać się na spacer do lasu i po drodze pozbierać trochę patyków;</span>

            <br/><br/><span id='tekst'><b>Internet</b>
            <br/>w całym domu jest dostępny internet światłowodowy;</span>

            <br/><br/><span id='tekst'><b>Pomysły na wspólne spędzanie czasu</b>
            <br/>W zakładce Przydatne informacje;</span>

           </p></div>
        </div>

        </div>
    )
}