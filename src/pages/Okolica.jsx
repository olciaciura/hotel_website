import React, {useEffect, useState} from "react";

export function Okolica(){

    const path = '/okolica_photos'
    const nr = 3
    const [fileNames, setFileNames] = useState([])
    const place = [['Zakopane', 'Karkonosze'], ['Bieszczady']]
    const opis = [ [ 'popularne miejsce w Tatrach, znane z pięknych krajobrazów, licznych szlaków turystycznych i bogatej kultury góralskiej. Można tu podziwiać malownicze widoki, wspinac się na szczyty, relaksować się w termach, a także spróbować tradycyjnych góralskich potraw', 
                    'pasmo górskie na granicy polsko-czeskiej, z pięknymi szlakami turystycznymi i malowniczymi wodospadami. W Karkonoszach znajdują się również kurorty wypoczynkowe, w których można odpocząć i zrelaksować się w pięknych okolicznościach przyrody.'], 
                    ['dziewicze tereny na południowym wschodzie Polski, z pięknymi krajobrazami, górami, lasami i dzikimi zwierzętami. Można tu wędrować po malowniczych szlakach, kąpać się w górskich rzekach, a także poznać kulturę i tradycje miejscowych ludzi.']]
    const link = [['https://www.youtube.com/watch?v=jRdQDTpQbLU&list=RDatvkLYluMS0&index=9', 'https://www.w3schools.com/css/css_positioning.asp'], ['http://manichatki.pl/galeria/']]
    const short_link = [['https://www.youtube.com/', 'https://www.w3schools.com'], ['http://manichatki.pl']]


    useEffect(() => {
        setFileNames([])
        let temp = []
        for (let i = 0; i < nr; i = i + 2) {
            let list;
            let filename = path + '/image' + i + '.png';
            if( i + 1 < nr ){
                let filename_1 = path + '/image' + (i + 1) + '.png';
                list = [filename, filename_1]
            }
            else{
                list = [filename, '']
            }    
            temp.push(list);
        }
        setFileNames(temp)
    }, [])

    return(
        <div id='page'>
            {
                fileNames.map((fileName, index) => (
                    <>
                    <div className="place">
                        <img id="photo_place" src={fileName[0]}/>
                        <div id="place">
                            <p id="title_galery">{place[index][0]}</p>
                            <p>{opis[index][0]}</p>
                            <a href={link[index][0]} target="_blank">{short_link[index][0]}</a>
                        </div>
                    </div>
                    <div className="place">
                        <div id="place">
                            <p id="title_galery">{place[index][1]}</p>
                            <p>{opis[index][1]}</p>
                            <a href={link[index][1]} target="_blank">{short_link[index][1]}</a>
                        </div>
                        <img id="photo_place" src={fileName[1]}/>
                    </div>
                    </>
                ))
            }
        </div>
    )
}
export default Okolica;