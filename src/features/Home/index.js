import Slide from './../../components/Slide'
import Ads from './../../components/Ads'
import SlidePlayList from './../../components/SlidePlayList'
import Album from './../../components/Album'
import Chart from './../../components/Chart'
// hook 
import {useState,useEffect} from 'react'

import {Container,Row,Col} from 'reactstrap'

import {
  ALBUM1,
  ALBUM2,
  ALBUM3,
  ALBUM4,
  ALBUM5,
  ALBUM6,
  ALBUM7,
  ALBUM8,
  ALBUM9,
  ALBUM10,
  ALBUM11,
  ALBUM12,
  ALBUM13,
  ALBUM14,
  ALBUM15,
  ALBUM16,
} from './../../contants/album'


const album = [
  {
    img:ALBUM1,
    title:'Tháng 2 Nghe Gì?'
  },
  {
    img:ALBUM2,
    title:'Nhạc Xuân Hay Nhất Mọi Thời Đại'
  },
  {
    img:ALBUM3,
    title:'My Valentine'
  },
  {
    img:ALBUM4,
    title:'Trong  Ký Ức Của Anh'
  },
  {
    img:ALBUM5,
    title:'Ngày Anh Đi Em Đã Thay Đổi'
  },
  {
    img:ALBUM6,
    title:'Những Bài Hát Nghe Khi Hết Tết'
  },
  {
    img:ALBUM7,
    title:'An Khang Thịnh Vượng'
  },
  {
    img:ALBUM8,
    title:'Yêu Thương Không Là Mãi Mãi (Tuyển Tập Trữ Tình)'
  },
  {
    img:ALBUM9,
    title:'Câu Chuyện Đầu Năm (Tuyển Tập Trữ Tình)'
  },
  {
    img:ALBUM10,
    title:'Gió Thổi Mây Bay'
  },
  {
    img:ALBUM11,
    title:'Những Bài Nhạc Rap Dành Cho Du Lịch'
  },
  {
    img:ALBUM12,
    title:'Xuân, Tình Yêu Và Đất Nước (Tuyển Tập Nhạc Đỏ)'
  },
  {
    img:ALBUM13,
    title:'Nam Tuổi Dần Nghe Gì?'
  },
  {
    img:ALBUM14,
    title:'Tuyệt phẩm 30 bài hát nhạc Bolero trữ tình hay nhất mọi thời đại'
  },
  {
    img:ALBUM15,
    title:'Những Phút Giây Yêu Thương'
  },
  {
    img:ALBUM16,
    title:'Vạn sự như ý'
  },
]

function Home(){
  const [chartHome,setChartHome] = useState(null)
  const [dataHome,setDataHome] = useState(null)


  useEffect(()=>{
    fetch('http://localhost:5000/getChartHome')
    .then(res=>res.json())
    .then(data =>{
      if (data.data.msg === 'Success' ) setChartHome(data)
    })
    fetch('http://localhost:5000/getHome/1')
    .then(res=>res.json())
    .then(data =>{
      if (data.msg === 'Success' ) setDataHome(data.data.items)
    })
  },[])
  
  return (
      <Container>
          <Row className="justify-content-between">
            <Col xs='9'>
              <Slide />
            </Col>
            <Col xs='3'>
              <Ads />
            </Col>
            <Col xs="12">
               {dataHome && <SlidePlayList dataSlide={dataHome[3]} /> }
            </Col>
            <Col xs="9">
                <Album album = {album} />
            </Col>
            <Col xs="3">
                {chartHome?.data?.msg === 'Success' && <Chart chart = {chartHome.data?.data?.RTChart?.items} name="BXH  Bài hát " slug="baihat"/>}
            </Col>
          </Row>
          <div style={{marginBottom:'1000px'}}>

          </div>
      </Container>

  )
}
export default Home