import './album.scss';
import Thumb from './../Thumb'
import {NavLink} from 'react-router-dom';
import {Row,Col} from 'reactstrap'
import {VIDEO_SLUG} from './../../contants/slug'

function BoxListVideo ({boxListVideo,title}){
  return (
      <div className="home__boxListVideo">
          <div className="home__boxListVideo--header">
            <h1 className="name" >{title}</h1>
          </div>
          {boxListVideo && 
            <Row className="home__boxListVideo--thumb">
              {boxListVideo.map((video,index ) =>{
                return (<Col xs='3' key= {index}>
                  <NavLink to={`/${VIDEO_SLUG}/${video.alias}/${video.encodeId}`}>
                    <Thumb 
                      img={video.thumbnailM} 
                      isIconPlay={true}
                      isHoverBgDark={true}
                      title={video.title}
                      artistsNames ={video.artistsNames}
                      duration ={video.duration}
                    ></Thumb>
                  </NavLink>
                  
                </Col>)
              })}
            </Row>
          }
          
      </div>
  )
}
export default BoxListVideo