import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './album.scss';

import {GET_PLAYLIST,GET_SONG} from './../../contants/uriGetApi'
import ControlPLayerMusic from './../../components/ControlPLayerMusic';
import PlayList from './../../components/PlayList';

import {Row,Col,Container} from 'reactstrap';
function Album ({album}){
    const {id} =useParams('id');
    const [dataAlbum,setDataAlbum] = useState(null)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [currentIdSong,setCurrentIdSong] = useState(undefined)
    const [dataSong,setDataSong] = useState(null)
    const handleSetCurrentNext = ()=>{
        
        setCurrentIndex(currentIndex+1)
    }
    const handleSetCurrentPrevious = ()=>{
        setCurrentIndex(currentIndex-1)

    }
    useEffect(()=>{
        fetch(GET_PLAYLIST+id)
        .then(res=>res.json())
        .then(data=>{
            if(data.data.msg==='Success') {
                setDataAlbum(data.data.data)
                setCurrentIdSong(data.data.data.song.items[currentIndex].encodeId)
            }
        })
       
    },[id])

    useEffect (()=>{
       dataAlbum && setCurrentIdSong(dataAlbum.song.items[currentIndex].encodeId)
       console.log(currentIndex)
    },[currentIndex])

    useEffect (()=>{
        fetch(GET_SONG+currentIdSong)
        .then(res=>res.json())
        .then(data=>{
            if(data.data.msg === 'Success') setDataSong({data:data.data.data,infoSong:data.data.infoSong})
        })
    },[currentIdSong])
    console.log(dataSong)
    return (
        <Container >
            <Row>
                <Col xs = '12'>
                    <Col  xs = '9'> 
                        {dataAlbum && 
                        <div className="info-detail-box">
                            <p className="title">
                                {dataAlbum.title}
                            </p>
                            <p className="artists">
                                {dataAlbum.artistsNames}
                            </p>
                            <p className="description">
                                <span className="label">Lời tựa : </span>{dataAlbum.description}
                            </p>

                        </div>

                        }
                    </Col>     
                </Col>
                <Col xs='9'>
                    {/* {song.status === 'success' || <ControlPlayer song = {song} />} */}
                    {dataSong && <ControlPLayerMusic 
                        urlSong = {dataSong.data[128]}
                        dataSong = {dataSong.infoSong}
                        handleSetCurrentNext = {handleSetCurrentNext}
                        handleSetCurrentPrevious = {handleSetCurrentPrevious}
                    />}
                    <br></br>
                
                </Col>
                <Col xs='3'>
                    {dataAlbum && <PlayList dataSongs = {dataAlbum.song} 
                        setCurrentIdSong ={setCurrentIdSong} 
                        setCurrentIndex={setCurrentIndex}
                        currentIndex= {currentIndex}
                    />}
                </Col>
            </Row>   
        </Container>
    )
}
export default Album