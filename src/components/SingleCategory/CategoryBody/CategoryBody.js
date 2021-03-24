import VideoCard from "../../Video/VideoCard/VideoCard";

const CategoryBody = ({data,details}) => {

    console.log('DATA',data);

    return(
        <>
        
        <div className="video-block section-padding">
                  <div className="row">
                  <div className="col-md-12">
                        <div className="main-title">                           
                           <h6>{data.category_name} Category | Total {data.views==null ? 0 : data.views} Views</h6>
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

export default CategoryBody;