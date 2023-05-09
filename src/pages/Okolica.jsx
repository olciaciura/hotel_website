import React, {useEffect, useState} from "react";

export function Okolica(){

    const [okolicaState, setOkolicaState] = useState('');
    const [bigPhoto, setBigPhoto] = useState({'id': null, 'fileName': null})

    const path = '/okolica_photos'
    const nr = 11
    const [fileNames, setFileNames] = useState([])

    useEffect(() => {
        setFileNames([])
        let temp = []
        for (let i = 0; i < nr; i++) {
            let filename = path + '/image' + i + '.png';
            temp.push(filename);
        }
        setFileNames(temp)
    }, [])

    return(
        <div id='page'>
            <p id='title_galery'></p>
            <div className="images">
            {
                fileNames.map((fileName, index) => (
                    <img key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setOkolicaState('big');
                    }}/>
                ))
            }
            </div>
            {  
                okolicaState != '' && <>
                            <div className="overlay">
                            <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr - 1 ) % nr
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames[index]
                                    }
                                    setBigPhoto(temp)
                                    setOkolicaState(bigPhoto.id)
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames[index]
                                    }
                                    setBigPhoto(temp)
                                    setOkolicaState(bigPhoto.id)
                                }}>{'>'}</button>
                                <div className="bigPhoto">
                                    <button id="close" onClick={() => setOkolicaState('')}>X</button>
                                    <img class='big' key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}
export default Okolica;