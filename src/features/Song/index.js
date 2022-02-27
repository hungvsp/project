import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap'
import Ads from '../../components/Ads'
import ControlPLayerMusic from '../../components/ControlPLayerMusic'
import PlayNext from '../../components/PlayNext'
import Lyrics from '../../components/Lyrics'
import {GET_SONG} from './../../contants/uriGetApi'

function Song () {
  const {id} =useParams('id')
  const [song,setSong] = useState('https://www.youtube.com/watch?v=wmjiCP6R-7I')
  const [dataSong,setDataSong] = useState(null)

  useEffect(()=>{
    fetch(GET_SONG+id )
    .then(res=>res.json())
    .then(data=>{
      if(data?.data?.msg === "Success") {
        setSong(data.data.data[128])
        setDataSong (data.data.infoSong)
      }
    })
  },[id])
  return (
    <Container >
      <Row>
        <Col xs='9'>

            {/* {song.status === 'success' || <ControlPlayer song = {song} />} */}
            <ControlPLayerMusic urlSong = {song} dataSong = {dataSong}/>
            <br></br>
            <Lyrics />
        </Col>
        <Col xs='3'>
            <Ads />
            <PlayNext setSong={setSong} />
        </Col>
        <Col xs="8" >
          content test for commit 2
        </Col>
        <Col xs="4" >
          
        </Col>
      </Row>   
    </Container>
  )
}
export default Song