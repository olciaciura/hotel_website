import React, {useEffect, useState} from "react";

export function Galery(){

    const [galeryState, setGaleryState] = useState('')
    const [bigPhoto, setBigPhoto] = useState({'id': null, 'fileName': null})

    const path1 = '/galery_photos/domek'
    const path2 = '/galery_photos/otoczenie'
    const path3 = '/galery_photos/środek'

    const nr_1 = 11
    const nr_2 = 11
    const nr_3 = 11

    const [fileNames1, setFileNames1] = useState([])
    const [fileNames2, setFileNames2] = useState([])
    const [fileNames3, setFileNames3] = useState([])

    useEffect(() => {
        setFileNames1([])
        setFileNames2([])
        setFileNames3([])
        for (let i = 0; i < nr_1; i++){
            let filename = path1 + '/image' + i + '.png';
            setFileNames1(current => {current.push(filename); return [...current]});
        }
        for (let i = 0; i < nr_2; i++){
            let filename = path2 + '/image' + i + '.png';
            setFileNames2(current => {current.push(filename); return [...current]});
        }
        for (let i = 0; i < nr_3; i++){
            let filename = path3 + '/image' + i + '.png';
            setFileNames3(current => {current.push(filename); return [...current]});
        }
    }, [])

    return(
        <div id='page'>
            <p id='title_galery'>CZĘŚĆ 1</p>
            {
                fileNames1.map((fileName, index) => (
                    <img key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setGaleryState('big1');                    
                    }}/>
                ))
            }
            <p id='title_galery'>CZĘŚĆ 2</p>
            {
                fileNames2.map((fileName, index) => (
                    <img key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setGaleryState('big2');                    
                    }}/>
                ))
            }
            <p id='title_galery'>CZĘŚĆ 3</p>
            {
                fileNames3.map((fileName, index) => (
                    <img key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setGaleryState('big3');                    
                    }}/>
                ))
            }

            {  
                galeryState == 'big1' && <>
                            <div className="overlay">
                                <button id="close" onClick={() => setGaleryState('')}>X</button>
                                <button id="left" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id +nr_1 - 1 ) % nr_1
                                        current.id = index
                                        current.fileName = fileNames1[index]
                                        return current
                                    })
                                }}>lewo</button>
                                <button id="right" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id + 1 ) % nr_1
                                        current.id = index
                                        current.fileName = fileNames1[index]
                                        return current
                                    })
                                }}>prawo</button>
                                <img key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                            </div>
                        </>
            }
            {  
                galeryState == 'big2' && <>
                            <div className="overlay">
                                <button id="close" onClick={() => setGaleryState('')}>X</button>
                                <button id="left" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id +nr_2 - 1 ) % nr_2
                                        current.id = index
                                        current.fileName = fileNames2[index]
                                        return current
                                    })
                                }}>lewo</button>
                                <button id="right" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id + 1 ) % nr_2
                                        current.id = index
                                        current.fileName = fileNames2[index]
                                        return current
                                    })
                                }}>prawo</button>
                                <img key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                            </div>
                        </>
            }
            {  
                galeryState == 'big3' && <>
                            <div className="overlay">
                                <button id="close" onClick={() => setGaleryState('')}>X</button>
                                <button id="left" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id +nr_3 - 1 ) % nr_3
                                        current.id = index
                                        current.fileName = fileNames3[index]
                                        return current
                                    })
                                }}>lewo</button>
                                <button id="right" onClick={() => {
                                    setBigPhoto(current => {
                                        let index = ( current.id + 1 ) % nr_3
                                        current.id = index
                                        current.fileName = fileNames3[index]
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
export default Galery;