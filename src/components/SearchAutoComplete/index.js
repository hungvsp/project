import './searchAutoComplete.scss'
import {NavLink} from 'react-router-dom'
import {SONG_SLUG,VIDEO_SLUG} from './../../contants/slug'
function switchToLink  (key){
  switch(key){
    case 'songs':
      return SONG_SLUG
      break;
    case 'videos':
      return VIDEO_SLUG
      break;
    default: return SONG_SLUG
  }
}
function SearchAutoComplete({data,className}){

  const {songs,artists,videos,playlists} = data

  const hanldeRender = (data)=>{

    const keyArray=  Object.keys(data)
    const resultShow = keyArray.map((key,index)=>{
      const dataChild = data[key]
      if(dataChild){
        return (
          <div className={key} key={index}>
            <div className="header-title">
                <span className="icon"></span>
                <span>{key}</span>
            </div>
            <ul className="results">
              
              {dataChild.map(
                (data,index)=>(
                  <li className="item" key ={index}>
                    <NavLink  to={`/${switchToLink(key)}/${data.alias}/${data.encodeId}`} className="link-item">
                        {data.title || data.name} {data.artistsNames?'-':''} {data.artistsNames}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        )
      }  
   })
   
    return resultShow
  }
 
  return (
    <div className={`search-auto-complete ${className ? className :''}`}>
      {hanldeRender({songs,artists,videos,playlists})}
    </div>
  )
}
export default SearchAutoComplete  