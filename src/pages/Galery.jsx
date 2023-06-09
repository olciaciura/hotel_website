import React, {useEffect, useState} from "react";

export function Galery(){

    const [galeryState, setGaleryState] = useState('')
    const [bigPhoto, setBigPhoto] = useState({'id': null, 'fileName': null})

    const path1 = '/galery_photos/domek'
    const path2 = '/galery_photos/środek'
    const path3 = '/galery_photos/otoczenie'
    const path4 = '/galery_photos/others'

    const nr_1 = 14
    const nr_2 = 13
    const nr_3 = 22
    const nr_4 = 17

    const [fileNames1, setFileNames1] = useState([])
    const [fileNames2, setFileNames2] = useState([])
    const [fileNames3, setFileNames3] = useState([])
    const [fileNames4, setFileNames4] = useState([])

    

    useEffect(() => {
        let temp = []
        for (let i = 0; i < nr_1; i++) {
            let filename = path1 + '/image' + i + '.jpg';
            temp.push(filename);
        }
        setFileNames1(temp)

        temp = []
        for (let i = 0; i < nr_2; i++){
            let filename = path2 + '/image' + i + '.jpg';
            temp.push(filename);
        }
        setFileNames2(temp)

        temp = []
        for (let i = 0; i < nr_3; i++){
            let filename = path3 + '/image' + i + '.jpg';
            temp.push(filename);
        }
        setFileNames3(temp)

        temp = []
        for (let i = 0; i < nr_4; i++){
            let filename = path4 + '/image' + i + '.jpg';
            temp.push(filename);
        }
        setFileNames4(temp)

    }, [])



    return(
        <div id='page'>
            <p id='title_galery'>Chwila... Moment na zewnątrz</p>
            <div className="images">
            {
                fileNames1.map((fileName, index) => (
                    <div>
                        <img id="photo" key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                            setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                            setGaleryState('big1');                    
                        }}/>
                    </div>
                ))
            }
            </div>
            <p id='title_galery'>Chwila... Moment wnętrze</p>
            <div className="images">
            {
                fileNames2.map((fileName, index) => (
                    <div>
                        <img id="photo" key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                            setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                            setGaleryState('big2');                    
                        }}/>
                    </div>
                ))
            }
            </div>
            <p id='title_galery'>Okolica</p>
            <div className="images">
            {
                fileNames3.map((fileName, index) => (
                    <div>
                        <img id="photo" key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                            setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                            setGaleryState('big3');                    
                        }}/>
                    </div>
                ))
            }
            </div>
            <p id='title_galery'>Moje uchwycone Chwile i Momenty</p>
            <div className="images">
            {
                fileNames4.map((fileName, index) => (
                    <div>
                    <img id="photo" key={index} src={fileName}  alt={`Photo: ${fileName}`} onClick={() => {
                        setBigPhoto(current => {current.id = index; current.fileName = fileName; return current});
                        setGaleryState('big4');                    
                    }}/>
                    </div>
                ))
            }
            </div>

            {  
                galeryState == 'big1' && <>
                            <div className="overlay">
                                <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr_1 - 1 ) % nr_1
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames1[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big1')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr_1
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames1[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big1')
                                }}>{'>'}</button>
                                <div className="bigPhoto">
                                    <button id="close" onClick={() => setGaleryState('')}>X</button>
                                    <img class='big' key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                                </div>
                            </div>
                        </>
            }
            {  
                galeryState == 'big2' && <>
                            <div className="overlay">
                                <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr_2 - 1 ) % nr_2
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames2[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big2')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr_2
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames2[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big2')
                                }}>{'>'}</button>
                                <div className="bigPhoto">
                                    <button id="close" onClick={() => setGaleryState('')}>X</button>
                                    <img class='big' key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                                </div>
                            </div>
                        </>
            }
            {  
                galeryState == 'big3' && <>
                <div className="overlay">
                                <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr_3 - 1 ) % nr_3
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames3[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big3')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr_3
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames3[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big3')
                                }}>{'>'}</button>
                                <div className="bigPhoto">
                                    <button id="close" onClick={() => setGaleryState('')}>X</button>
                                    <img class='big' key={bigPhoto.id} src={bigPhoto.fileName}  alt={`Photo: ${bigPhoto.fileName}`}/>
                                </div>
                            </div>
                        </>
            }
            {  
                galeryState == 'big4' && <>
                <div className="overlay">
                                <button id="left" onClick={() => {
                                    let index = ( bigPhoto.id + nr_4 - 1 ) % nr_4
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames4[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big4')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nr_4
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames4[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big4')
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
export default Galery;