import React, {useEffect, useState} from "react";

export function Okolica(){

    const [okolicaState, setOkolicaState] = useState([]);
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
                                <button id="close" onClick={() => setOkolicaState('')}>X</button>
                                <button id="left" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id +nr - 1 ) % nr
                                        current.id = index
                                        current.fileName = fileNames[index]
                                        return current
                                    })
                                }}>lewo</button>
                                <button id="right" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id + 1 ) % nr
                                        current.id = index
                                        current.fileName = fileNames[index]
                                        return current
                                    })
                                }}>prawo</button>
                                <img key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                            </div>
                        </>
            }
        </div>
    )
}
export default Okolica;