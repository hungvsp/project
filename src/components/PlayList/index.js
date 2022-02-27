import {useEffect, useState} from 'react'
import './playlist.scss';
import Thumb from './../Thumb'

 function PlayList ({dataSongs,setCurrentIdSong,setCurrentIndex,currentIndex}){
     return (
         <div className="playlist-album">
             <div className="playlist-album-header">
                <h3>DANH SÁCH BÀI HÁT</h3>
                <span>{dataSongs.total} bai hat</span>
             </div>
             <ul>
                 {dataSongs.items.map((song,index) => {
                     return (
                        <li 
                            key={index}
                            className={`d-flex align-items-center item-play-box ${currentIndex == index ? 'active' : ''}`} 
                            onClick = {()=>{
                                setCurrentIndex(index)
                            }}
                        > 
                            <div className="thumb-song">
                                <Thumb img={song.thumbnail}>
                                </Thumb>
                            </div>
                            <div className="info">
                                <div className="title">
                                    {song.title}
                                </div>
                                <div className="singer">
                                    {song.artistsNames}
                                </div>
                            </div>
                        </li>
                     )
                 })}
               
             </ul>
         </div>
     )
 }
 export default PlayList