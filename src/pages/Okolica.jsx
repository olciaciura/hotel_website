import React, {useEffect, useState} from "react";

export function Okolica(){

    const [okolicaState, setOkolicaState] = useState('');
    const [bigPhoto, setBigPhoto] = useState({'id': null, 'fileName': null})

    const path = '/okolica_photos'
    const nr = 11
    const [fileNames, setFileNames] = useState([])

    useEffect(() => {
        setFileNames([])
        for (let i = 0; i < 11; i++){
            let filename = path + '/image' + i + '.png';
            setFileNames(current => {current.push(filename); return [...current]});
        }
    }, [])

    return(
        <div id='page'>
            <p id='title_galery'></p>
            {
                fileNames.map((fileName, index) => (
                    <img key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setOkolicaState('big');
                    }}/>
                ))
            }
            {  
                okolicaState == 'big' && <>
                            <div className="overlay">
                                <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr - 1 ) % nr
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState(bigPhoto.id)
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr_1
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState(bigPhoto.id)
                                }}>{'>'}</button>
                                <div className="bigPhoto">
                                    <button id="close" onClick={() => setGaleryState('')}>X</button>
                                    <img class='big' key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}
export default Okolica;