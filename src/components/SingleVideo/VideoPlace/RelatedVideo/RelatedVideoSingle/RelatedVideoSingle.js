import { TIME_AGO_FEATURE } from "../../../../../others/utility";
import { useHistory } from "react-router-dom";

const RelatedVideoSingle = ({item}) => {


    const history = useHistory();

    function handleClick() {
       history.push(`/video/${item.main_id}`);
     }
 


    return(

<div className="video-card video-card-list">
                                    <div className="video-card-image">
                                       <a className="play-icon cursor" onClick={handleClick}><i className="fas fa-play-circle"></i></a>
                                       <a className="cursor" onClick={handleClick}><img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}videos/${item.video_thumbnail}`} alt="" /></a>
                                       {/* <div className="time">3:50</div> */}
                                    </div>
                                    <div className="video-card-body">

                                       <div className="video-title">
                                          <a className="cursor" onClick={handleClick}>{item.video_title}</a>
                                       </div>
                                       <div className="video-page text-success">
                                       {item.channel_name}  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                       </div>
                                       <div className="video-view">
                                       {item.views== null ? 0 : item.views} views &nbsp;<i className="fas fa-calendar-alt"></i> {TIME_AGO_FEATURE(item.created_at)}
                                       </div>
                                    </div>
                                 </div>

    )
}

export default RelatedVideoSingle;