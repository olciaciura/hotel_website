import React from "react";

export function Cennik(){
    return(
        <div id='page'>
        <div className='tab'>
            <p id='tabela'>CENNIK</p>
            <table>
                <tbody>
                    <tr>
                        <td id='left_col'>Apartament do 4 osób</td>
                        <td id='right_col'>400 zł / doba</td>
                    </tr>
                    <tr id='down'>
                        <td id='left_col'>Dodatkowe osoby (max 2)</td>
                        <td id='right_col'>70 zł / doba</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='tab'>
            <p id='tabela'>DŁUGOŚĆ POBYTU</p>
            <table>
                <tbody>
                    <tr>
                        <td id='left_col'>Sezon 'wysoki' - ferie zimowe, wakacje letnie</td>
                        <td id='right_col'>min 7 nocy (od soboty do soboty)</td>
                    </tr>
                    <tr>
                        <td id='left_col'>Święta, długie weekendy</td>
                        <td id='right_col'>do ustalenia</td>
                    </tr>
                    <tr id='down'>
                        <td id='left_col'>Pozostałe terminy</td>
                        <td id='right_col'>min 2 noce</td>
                    </tr>
                </tbody>
            </table>
        </div>

<p>
<br/><span id='bigger'>Ale jak to w życiu bywa – zawsze są wyjątki od reguły, więc warto dzwonić i dopytać</span>
<br/><br/><br/> &#x279C;&nbsp;&nbsp;<b>Pobyt rozpoczyna się o godzinie 15.00, a kończy o 10.00</b> – jeśli jest potrzeba ustalenia innego przedziału czasowego – proszę o kontakt.
<br/>&#x279C;&nbsp;&nbsp;Rezerwacja zostaje potwierdzona po wpłacie zaliczki w wysokości <b>30% ceny za cały pobyt</b>. 
<br/>&#x279C;&nbsp;Zaliczka jest <b>bezzwrotna</b>, jeśli rezerwacja zostanie anulowana na <b>mniej niż 14 dni przed planowanym terminem przyjazdu</b>.

<br/><br/><br/><b>Numer konta:</b> ………
<br/>W tytule przelewu proszę wpisać: <b>imię i nazwisko osoby rezerwującej oraz termin</b>.
</p>
        </div>
    )
}
export default Cennik;