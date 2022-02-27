import './album.scss';
import Thumb from '../../../../components/Thumb'
import {Row,Col} from 'reactstrap'
function Album ({album}){
  return (
      <div className="home__album">
          <div className="home__album--header">
            <h1 className="name">Album</h1>
            <ul  className="link-title">
                <li className="link-title-item active">
                  Nghe Nhiều
                </li>
                <li className="link-title-item">
                  Mới Nhất
                </li>
            </ul>
          </div>
          <Row className="home__album--thumb">
            {album.map((item ) =>{
              return (<Col xs='3'>
                <Thumb 
                  img={item.img} 
                  isIconPlay={true}
                  isHoverBgDark={true}
                  text={item.text}
                ></Thumb>
              </Col>)
            })}
          </Row>
          
      </div>
  )
}
export default Album