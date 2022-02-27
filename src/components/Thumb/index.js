import './thumb.scss'
import  formatTime from 'format-duration'

function Thumb ({
  img,
  isIconPlay,
  isHoverBgDark,
  artistsNames,
  title,
  duration 
}){
  return(
    <div className="thumb">
      <div className="thumb-img">
        <img src={img} alt='hi anh em'/>
        {isIconPlay && <div className="circle-play"></div> }
        {isHoverBgDark &&  <div className="hover-bg-thumb-slide"></div> }
        {duration &&  <div className="duration">{formatTime(duration * 1000)}</div> || duration===0 && <div className="duration">--:--</div> }
      </div>
      {title && <p className="title">{title}</p> }
      {artistsNames && <p className="artistsNames">{artistsNames}</p> }

    </div>
  )
}
export default Thumb  