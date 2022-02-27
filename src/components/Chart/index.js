import './chart.scss';
import {NavLink} from 'react-router-dom';

function Chart ({chart,name,slug}){
  return (
   
    <div className="home__chart">
      <h3 className="name ">
        {name}
      </h3>
      <div className="chart">
        {chart && chart.map((item,index)=>

          {
            if(index==0) {
              return(
                <NavLink className="chart-item first"  to={`/${slug}/${item.alias}/${item.encodeId }`} key ={index}>
                  <div className="chart-img">
                      <img src={item.thumbnail} alt="" />
                      <p className="index">
                          01
                      </p>
                      <div className="dark-footer"></div>
                  </div>
                  <div className="text"> 
                      <div  className="title">
                       { item.title}
                      </div >
                      <p className="singer">
                        { item.artists.map(item=>item.name).join(', ')}
                      </p>
                  </div>
                </NavLink>
              )
            }
            return(
              <NavLink className="chart-item align-items-center" to={`/${slug}/${item.alias}/${item.encodeId }`} key ={index}>
                <div className="chart-rank">
                  <p className="index">
                     {index<9 && '0'}{index+1}
                  </p>
                  <div className="chart-border-bottom">

                  </div>
                </div>
                <div className="text"> 
                    <div  className="title">
                      { item.title}
                    </div >
                    <p className="singer">
                      { item.artists.map(item=>item.name).join(', ')}
                    </p>
                    <div className="text-chart-border-bottom"></div>
                </div>
              </NavLink>
            )
          })
        }
          
          
      </div>
    </div>
  )
}
export default Chart