import VideoCard from "../Video/VideoCard/VideoCard";

const MyVideoBlock = ({details}) => {

    return (
        <>
<div className="video-block section-padding">
                  <div className="row">
                  <div className="col-md-12">
                        <div className="main-title">                          
                           <h6>My Videos</h6>
                        </div>
                     </div>

                     {
                        details?.length ?(
                         details.map((item,index)=>(
                             <VideoCard key={index} item={item} categoryShow/>
                         ))
                         ) : <p className="no-found-text">No videos Found</p>
                     }


                  </div>                  
               </div>  

        </>

    )

}

export default MyVideoBlock;