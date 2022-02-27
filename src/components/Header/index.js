import {useState,useEffect,useRef} from 'react';
import {Container,Row,Col} from 'reactstrap'
import {LOGO} from './../../contants/logo'
import {SEARCH} from './../../contants/uriGetApi'
// router
import {NavLink} from 'react-router-dom'
import './Header.scss'
import SearchAutoComplete from '../SearchAutoComplete'
function Header (){
    const [inputKeySearch,setInputKeySearch] = useState('')
    const [dataShowSearch,setDataShowSearch] = useState({})
    const [focused, setFocused] = useState(true)
    const [isAutoSearch,setIsAutoSearch]  = useState(focused)
    const timeoutIdCurrent = useRef()
    const onFocus = () => setFocused(true)
    const onBlur = (e) => {
        const timeoutID = setTimeout(() =>{
            setFocused(false)
        },150)
        timeoutIdCurrent.current = timeoutID 
        
    }
    useEffect(
        ()=>{
            setIsAutoSearch(focused)
            // xoa bo setTime Out
            timeoutIdCurrent.current && clearTimeout(timeoutIdCurrent.current)
        }
        ,[focused]
    )

    useEffect(
        ()=>{
            if(inputKeySearch.trim()){
                fetch(SEARCH+inputKeySearch)
                .then(res=>res.json())
                .then(data=>{
                    if(data.data.msg === "Success") setDataShowSearch(data.data.data) 
                })
            }
        }
        ,[inputKeySearch]
    )
    
    const handleInputKeySearch =(e)=>{
        const valKeyInput = e.target.value.trimStart()
        setInputKeySearch(valKeyInput)
    }
    return (
        <header className='header'>
            <Container>
                <Row className="header__top align-items-center justify-content-between  " xs="auto" >
                    <Col className="header__top--logo">
                        <NavLink to="/">
                            <img src={LOGO} alt="" />
                        </NavLink>
                    </Col>
                    <Col className="header__top--seach">
                        <div className='header__top--seach-box'>
                            <input type="text"
                                onChange={handleInputKeySearch}
                                value={inputKeySearch}
                                onFocus={onFocus}
                                onBlur={onBlur}
                            />
                            <button> </button>
                        </div>
                        <SearchAutoComplete
                            className={isAutoSearch? 'active':''}
                            data={dataShowSearch} 
                         />
                    </Col>
                    <Col className="header__top--user">
                        <NavLink to="#" className="header__top--user-login">Đăng nhập</NavLink>
                        <span>/</span>
                        <NavLink to="#" className="header__top--user-signup">Đăng ký</NavLink>
                    </Col>
                </Row>
            </Container>
            <div className="header-hr"></div>
            <Container>
                <ul className="header__category d-flex">
                    <li className="header__category--item d-flex align-items-center">
                        <NavLink to="#" className="header__category--link">
                            Chủ đề
                        </NavLink>
                    </li>
                    <li className="header__category--item d-flex align-items-center">
                        <NavLink to="#" className="header__category--link">
                            BXH
                        </NavLink>
                    </li>
                    <li className="header__category--item d-flex align-items-center">
                        <NavLink to="#" className="header__category--link">
                            Album
                        </NavLink>
                    </li>
                    <li className="header__category--item d-flex align-items-center">
                        <NavLink to="#" className="header__category--link">
                            Music Video
                        </NavLink>
                    </li>
                    <li className="header__category--item d-flex align-items-center">
                        <NavLink to="#" className="header__category--link">
                            Nghệ sĩ
                        </NavLink>
                    </li>
                </ul>


            </Container>
        </header>
    )
}

export default Header