import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './features/Home'
import Song from './features/Song'
import Video from './features/Video'
import Album from './features/Album'
import './App.scss';


function App() {
  return (
         <>
            <Header/>
            <Routes>
              <Route exact='true' path="/" element={<Home />} />  
              <Route exact='true' path="/video/:title/:id" element={<Video />} />    
              <Route exact='true' path="/baihat/:title/:id" element={<Song />} />  
              <Route exact='true' path="/album/:id" element={<Album />} />  
            </Routes>
         </>
  );
}

export default App;
