import React, {useEffect, useState} from "react";

const imageUrls = {
    'path1': '/galery_photos/domek',
    'path2': '/galery_photos/środek',
    'path3': '/galery_photos/otoczenie',
    'path4': '/galery_photos/others'
}

const nrOfImages = { 
    'path1': 14,
    'path2': 13,
    'path3': 99,
    'path4': 69
}

export function Galery(){

    const [galeryState, setGaleryState] = useState('')
    const [bigPhoto, setBigPhoto] = useState({'id': null, 'fileName': null})
    const [fileNames1, setFileNames1] = useState([])
    const [fileNames2, setFileNames2] = useState([])
    const [fileNames3, setFileNames3] = useState([])
    const [fileNames4, setFileNames4] = useState([])

    useEffect(() => {
        preloadImages();
    }, []);

    function preloadImages() {
        Object.entries(imageUrls).forEach(([path, url]) => {
          const numImages = nrOfImages[path];
          let temp = [];
    
          for (let i = 0; i < numImages; i++) {
            const imageUrl = `${url}/image${i}.jpg`;
            temp.push(imageUrl);
    
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = imageUrl;
            link.as = 'image';
    
            document.head.appendChild(link);
          }
    
          switch (path) {
            case 'path1':
              setFileNames1(temp);
              break;
            case 'path2':
              setFileNames2(temp);
              break;
            case 'path3':
              setFileNames3(temp);
              break;
            case 'path4':
              setFileNames4(temp);
              break;
            default:
              break;
          }
        });
      }

    return(
        <div id='page'>
            <p id='title_galery'><span id='nazwa_bigger'>Chwila...Moment</span> na zewnątrz</p>
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
            <p id='title_galery'><span id='nazwa_bigger'>Chwila...Moment</span>  wnętrze</p>
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
                                    let index = ( bigPhoto.id + nrOfImages['path1'] - 1 ) % nrOfImages['path1']
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames1[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big1')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nrOfImages['path1']
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
                                    let index = ( bigPhoto.id + nrOfImages['path2'] - 1 ) % nrOfImages['path2']
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames2[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big2')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nrOfImages['path2']
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
                                    let index = ( bigPhoto.id + nrOfImages['path3'] - 1 ) % nrOfImages['path3']
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames3[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big3')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nrOfImages['path3']
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
                                    let index = ( bigPhoto.id + nrOfImages['path4'] - 1 ) % nrOfImages['path4']
                                    let temp = {
                                        'id': index,
                                        'fileName': fileNames4[index]
                                    }
                                    setBigPhoto(temp)
                                    setGaleryState('big4')
                                }}>{'<'}</button>
                                <button id="right" onClick={() => {
                                    let index = ( bigPhoto.id + 1 ) % nrOfImages['path4']
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