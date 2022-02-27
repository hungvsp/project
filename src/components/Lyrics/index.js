import './lyrics.scss';
import {useState} from 'react'
import { Lrc } from 'react-lrc';
function Lyrics (){
    const [isSeeFull,setIsSeeFull] = useState(false)

    return (
        <div className="lyric">
           
            <div className="title">
                Lời Baì Hát
            </div>
            <div className={`content-text${isSeeFull ? ' full':'' }`}>
                Thầy ơi
                <br/>
                Cho con một quẻ xem bói đầu năm <br/>
                Con xin chắp tay nguyện cầu<br/>
                Cung kính thành tâm<br/>
                Năm nay kinh tế thế nào?<br/>
                Công danh sự nghiệp ra sao?<br/>
                Cho con biết ngay đi nào!<br/>
                Chỉ riêng tình duyên thì con chẳng cần thầy phán ra<br/>
                Trời cho biết ngay thôi màaaa<br/><br/>

                Phận duyên đến như món quà<br/>
                Chờ mong tình yêu vội vàng rồi lại chẳng đến đâu<br/>
                Thôi thì ta đừng âu sầu<br/>
                Hẹn ngày sau sẽ gặp nhau!<br/>
                Tình yêu đến như phép màu chẳng ai bói ra được đâu<br/>
                Gặp nhau có duyên không hẹn<br/>
                Tự nhiên ý hợp tâm đầu<br/>
                Người ta ép mỡ ép dầu<br/>
                Nào ai ép duyên được đâu<br/>
                Tình yêu đến không mong cầu<br/>
                Rồi mai có khi dài lâu woooh hoooo<br/>
                Rồi mai có khi dài lâu woooh hoooo<br/><br/>

                Thầy ơi<br/>
                Cho con một quẻ xem bói đầu năm<br/>
                Con xin chắp tay nguyện cầu<br/>
                Cung kính thành tâm<br/>
                Bao lâu chưa đi sang Hàn<br/>
                Visa con sắp hết hạn!<br/>
                Có đứa bạn nào đâm ngang<br/>
                "Nên mua đất hay mua vàng?"<br/>
                Chỉ riêng tình duyên thì con chẳng cần thầy phán ra<br/>
                Trời cho biết ngay thôi màaaa<br/><br/>

                Phận duyên đến như món quà<br/>
                Chờ mong tình yêu vội vàng rồi lại chẳng đến đâu<br/>
                Thôi thì ta đừng âu sầu<br/>
                Hẹn ngày sau sẽ gặp nhau!<br/>
                Tình yêu đến như phép màu chẳng ai bói ra được đâu<br/>
                Gặp nhau có duyên không hẹn<br/>
                Tự nhiên ý hợp tâm đầu<br/>
                Người ta ép mỡ ép dầu<br/>
                Nào ai ép duyên được đâu<br/>
                Tình yêu đến không mong cầu<br/>
                Rồi mai có khi dài lâu woooh hoooo<br/>
                Rồi mai có khi dài lâu woooh hoooo<br/>
                <br/>
                Rap:<br/>
                Càng nhiều thứ trong đầu, càng nhiều điều nuối tiếc<br/>
                Ít đi điều mong cầu, lòng êm như suối biếc<br/>
                Hôm qua đã xong rồi ngày mai thì khó biết<br/>
                Cố gắng ngày hôm nay không gì là khó hết<br/>
                Muốn thì phải làm mà dịch ám đành phải lùi<br/>
                Còn sức còn khỏe là còn mừng còn phải cười<br/>
                Nhìn các cô chú đang chống dịch mòn cả người<br/>
                Bớt than bớt thở, mình khổ một họ khổ mười<br/>
                Nếu mà, nếu mà, nếu mà đợi<br/>
                Đời người chắc gì đã là đường bước được<br/>
                Tương lai là thứ không bao giờ lường trước được<br/>
                Đi tìm điều tích cực để vui lên mà sống thì<br/>
                Hướng nào cũng tốt, đường nào cũng thông<br/>
            </div>
            <span
                className="btn-see" 
                onClick={()=>{
                     setIsSeeFull(!isSeeFull)
                }}
            >
                {isSeeFull ? 'Rút gọn' : 'Xem thêm'}
            </span>
        </div>
       
    )
}
/*! For license information please see main.min.js.LICENSE.txt */
export default Lyrics