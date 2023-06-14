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
                        <td id='left_col'>Dodatkowa osoba (max 2)</td>
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
                        <td id='left_col'>Sezon "wysoki" - ferie zimowe, wakacje letnie</td>
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
            <br/><span id='bigger'>Ale jak to w życiu bywa – zawsze są wyjątki od reguły, więc warto dzwonić i dopytać.</span>
            <br/><br/> Pobyt rozpoczyna się o godzinie 16.00, a kończy o 10.00 – jeśli jest potrzeba ustalenia innego przedziału czasowego – proszę o kontakt.
            <br/>Rezerwacja zostaje potwierdzona po wpłacie zaliczki w wysokości 30% ceny za cały pobyt. Zaliczka jest bezzwrotna, jeśli rezerwacja zostanie anulowana ma mniej niż 21 dni przed planowanym terminem przyjazdu.
            <br/>Pozostałą część należności za pobyt proszę uregulować przelewem do dnia przyjazdu (liczy się data wpływu na konto bankowe).

            <br/><br/>Płatności wyłącznie bezgotówkowe.
            <br/>Jeśli jest potrzeba wystawienia faktury, proszę o wcześniejszą informację.

            <br/><br/>Numer konta: Jolanta Piecuch 54 1140 2004 0000 3802 8347 8492
            <br/>W tytule przelewu proszę wpisać: imię i nazwisko osoby rezerwującej oraz termin.
            </p>
        </div>
    )
}
export default Cennik;