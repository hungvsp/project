import {useEffect,useState} from 'react';

import ReactJWPlayer from 'react-jw-player';
import {GET_STREAMING_VIDEO} from '../../contants/uriGetApi'
import  './controlPLayerVideo.scss'
function ControlPLayerVideo({dataVideo}){
    if(dataVideo){
      const id = dataVideo.encodeId
      return( 
          <div className="player-video">
              
              <ReactJWPlayer
                playerId='video'
                playerScript='https://content.jwplatform.com/libraries/IDzF9Zmk.js'
                playlist={GET_STREAMING_VIDEO + id}
              />
              <div className="name">
                  {dataVideo?.title ? `${dataVideo?.title} -`:'Không Xác Định' } <span  className="singer ">{dataVideo?.artistsNames}</span>
              </div>
          </div>
      )
    }else{
      return <h1> dang tai</h1>
    }
    
   
}
export default ControlPLayerVideo