import {useEffect, useState} from 'react';
import { useParams,useLocation } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap'
import ControlPLayerVideo from '../../components/ControlPLayerVideo'
import BoxListVideo from '../../components/BoxListVideo'
import Ads from '../../components/Ads'




import {GET_VIDEO} from '../../contants/uriGetApi'

function Video () {
  const { pathname } = useLocation();
  const {id} =useParams('id')
  const [dataVideo,setDataVideo] = useState(null)
  useEffect(()=>{
    fetch(GET_VIDEO+id )
    .then(res=>res.json())
    .then(data=>{
      if(data.data.err === 0){
        setDataVideo(data.data.data)
      }
    })
  },[id])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container >
      <Row>
        <Col xs='9'>
            
            <ControlPLayerVideo dataVideo = {dataVideo}/>
            <br></br>
            <BoxListVideo  boxListVideo={dataVideo && dataVideo.recommends} title="Video Liên Quan  "/>
        </Col>
        <Col xs='3'>
            <Ads />
        </Col>
       
      </Row>   
    </Container>
  )
}
export default Video