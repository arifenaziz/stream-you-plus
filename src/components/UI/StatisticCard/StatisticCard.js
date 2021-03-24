import { useHistory } from "react-router-dom";

const StatisticCard = ({name,icon,theme,data,path}) => {

   const history = useHistory();

   function handleClick() {
      history.push(`/${path}`);
    }

    return(        
        <div className={`card text-white ${theme} o-hidden h-100 border-none `}>
           <div className="card-body">
              <div className="card-body-icon">
                  
                 <i className={`fas fa-fw ${icon}`} ></i>
              </div>
              <div className="mr-5"><b>{data}</b> {name}</div>
           </div>
           <a className="card-footer text-white clearfix small z-1 cursor" onClick={handleClick}>
           <span className="float-left">View Details</span>
           <span className="float-right">
           <i className="fas fa-angle-right"></i>
           </span>
           </a>
        </div>     
    )
}

export default StatisticCard;