import {useState,useRef} from 'react'
import './controlPlayer.scss'
import Thumb  from  '../Thumb'
import  ReactJinkePlayer from 'react-jinke-music-player'
import Slider from 'rc-slider';
import  formatTime from 'format-duration'
import 'rc-slider/assets/index.css';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function ControlPLayerMusic({urlSong,dataSong,handleSetCurrentNext,handleSetCurrentPrevious}){
    const [trackIndex, setTrackIndex] = useState(0);

    const handleClickPrevious = () => {
      setTrackIndex((currentTrack) =>
        currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
      );
    };
  
    const handleClickNext = () => {
      setTrackIndex((currentTrack) =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
      );
    };
    const musicTracks = [
        {
          src: urlSong
        },
      ];
    return (
        <div className="player">
           
            <div className="player-header">
           
                <div className="name">
                    {dataSong?.title ? `${dataSong?.title} -`:'' } <span  className="singer ">{dataSong?.artistsNames}</span>
                </div>
                {/* <div className="type ">
                    <span  className="label" >Thể loại:</span> <span> Nhạc Trẻ</span>
                </div> */}
            </div>  
            <div className="player-controler">
                <div className="player-thumb">
                    <Thumb img={dataSong?.thumbnailM}> </Thumb>
                </div>
                <div className="player-info">
                    <div className='text-center'> 
                        <h1 className="name-detail">
                            Bài Hát :  {dataSong?.title ? `${dataSong?.title} `:'Không Xác Định' } 
                        </h1>
                        <h2 className='singer'>
                            <span  className="singer ">Ca Sỹ : {dataSong?.artistsNames}</span>
                        </h2>
                   </div>
                   <AudioPlayer
                        autoPlay
                        src={musicTracks[trackIndex].src}
                        showSkipControls={true}
                        showJumpControls={false}
                        onClickPrevious={handleSetCurrentPrevious}
                        onClickNext={handleSetCurrentNext}
                        onEnded={handleSetCurrentNext}
                    />
                </div>
            </div>         
        </div>
    )
}
export default   ControlPLayerMusic
