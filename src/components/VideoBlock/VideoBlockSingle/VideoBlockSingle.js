import {Link} from 'react-router-dom';

const VideoBlockSingle = ({item}) => {
    return(
            <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link to={`video/${item.slug}`} className="play-icon">
                              <i className="fas fa-play-circle"></i>
                              </Link>
                              <Link to={`video/${item.slug}`}>
                              <img className="img-fluid" src={`assets/images/thumb/${item.images}`} alt=""/>
                              </Link>                              
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                              <Link to={`video/${item.slug}`}>{item.title}</Link>
                              </div>
                              <div className="video-page text-success">
                                 {item.channel_name}  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 No views &nbsp;<i className="fas fa-calendar-alt"></i> 1 Months ago
                              </div>
                           </div>
                        </div>
           </div>
    )
}

export default VideoBlockSingle;