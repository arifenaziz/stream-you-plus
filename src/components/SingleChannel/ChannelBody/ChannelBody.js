import VideoCard from "../../Video/VideoCard/VideoCard";

const ChannelBody = ({details}) => {
    return(
        <>
        
        <div className="video-block section-padding">
                  <div className="row">
                  <div className="col-md-12">
                        <div className="main-title">
                           {/* <div className="btn-group float-right right-action">
                              <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                              </div> 
                           </div> */}
                           <h6>Videos</h6>
                        </div>
                     </div>

                     {
                        details?.length ?(
                         details.map((item,index)=>(
                             <VideoCard key={index} item={item}/>
                         ))
                         ) : <p className="no-found-text">No videos Found</p>
                     }


                  </div>                  
               </div>       
                      
        </>
    )
}

export default ChannelBody;