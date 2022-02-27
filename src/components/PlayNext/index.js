import Thumb from './../Thumb'
import './playNext.scss'

function PlayNext({setSong}){
    return (
        <div className="song-next">
            <h2>
                Tiếp Theo
            </h2>
            <ul className="autoplay-list"> 
                <li className="autoplay-item first d-flex align-items-end"> 
                    <div className="thumb-song-next">
                        <Thumb img='https://i.imgur.com/HuyqTSE.jpg'>
                        </Thumb>
                    </div>
                    <div className="info">
                        <div className="title">
                            Ngày Tết Quê Em
                        </div>
                        <div className="singer">
                            Thùy Chi
                        </div>
                    </div>
                </li>
                <li className="autoplay-item  d-flex align-items-center" > 
                    <div className="thumb-song-next">
                        <Thumb img='https://i.imgur.com/HuyqTSE.jpg'>
                        </Thumb>
                    </div>
                    <div className="info">
                        <div className="title">
                            Anh biet minh den sau
                        </div>
                        <div className="singer">
                            Thùy Chi
                        </div>
                    </div>
                </li><li className="autoplay-item  d-flex align-items-center"> 
                    <div className="thumb-song-next">
                        <Thumb img='https://i.imgur.com/HuyqTSE.jpg'>
                        </Thumb>
                    </div>
                    <div className="info">
                        <div className="title">
                            Ngày Tết Quê Em
                        </div>
                        <div className="singer">
                            Thùy Chi
                        </div>
                    </div>
                </li>
                <li className="autoplay-item  d-flex align-items-center"> 
                    <div className="thumb-song-next">
                        <Thumb img='https://i.imgur.com/HuyqTSE.jpg'>
                        </Thumb>
                    </div>
                    <div className="info">
                        <div className="title">
                            Ngày Tết Quê Em
                        </div>
                        <div className="singer">
                            Thùy Chi
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}
export default PlayNext