import { TIME_AGO_FEATURE } from "../../../others/utility";
import { useHistory } from "react-router-dom";

const VideoCard = ({item,categoryShow}) => {

   const history = useHistory();

   function handleClick() {
      history.push(`/video/${item.main_id}`);
    }


    

    return (
    <>
                        <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon cursor" onClick={handleClick}><i className="fas fa-play-circle"></i></a>
                              <a onClick={handleClick} className="cursor"><img className="img-fluid size-fit" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}videos/${item.video_thumbnail}`} alt="" /></a>
                              {/* <div className="time">3:50</div> */}
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a onClick={handleClick} className="cursor">{item.video_title}</a>
                              </div>

                              {categoryShow ? 
                              <div className="video-page text-success">
                                 {item.channel_name}  <a title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              :null
                              }

                              <div className="video-view">
                              {item.views} views &nbsp;<i className="fas fa-calendar-alt"></i> {TIME_AGO_FEATURE(item.created_at)}
                              </div>
                           </div>
                        </div>
                     </div>
    </>
    )
}

export default VideoCard;